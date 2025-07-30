// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

// Registration Schema
const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minlength: [2, 'First name must be at least 2 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minlength: [2, 'Last name must be at least 2 characters']
  },
  jobTitle: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^[\+\d\s\-\(\)]+$/.test(v);
      },
      message: 'Please enter a valid mobile number'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email address'
    }
  },
  website: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Please enter a valid website URL'
    }
  },
  agreeToPolicy: {
    type: Boolean,
    required: [true, 'You must agree to the privacy policy']
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Create index for email uniqueness
registrationSchema.index({ email: 1 }, { unique: true });

const Registration = mongoose.model('Registration', registrationSchema);

// API Routes

// POST /api/register - Register for event
app.post('/api/register', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      jobTitle,
      company,
      mobile,
      email,
      website,
      agreeToPolicy
    } = req.body;

    // Validate required fields
    if (!agreeToPolicy) {
      return res.status(400).json({
        success: false,
        error: 'You must agree to the privacy policy to register'
      });
    }

    // Create new registration
    const registration = new Registration({
      firstName: firstName?.trim(),
      lastName: lastName?.trim(),
      jobTitle: jobTitle?.trim(),
      company: company?.trim(),
      mobile: mobile?.trim(),
      email: email?.trim().toLowerCase(),
      website: website?.trim() || undefined,
      agreeToPolicy,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    // Save to database
    await registration.save();

    console.log(`✅ New registration: ${firstName} ${lastName} (${email})`);

    res.status(201).json({
      success: true,
      message: 'Registration successful! We look forward to seeing you at the event.',
      data: {
        id: registration._id,
        name: `${firstName} ${lastName}`,
        email: email,
        registeredAt: registration.registeredAt
      }
    });

  } catch (error) {
    console.error('❌ Registration error:', error);

    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'This email address is already registered for the event'
      });
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages[0] || 'Please check your information and try again'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.'
    });
  }
});

// GET /api/registrations - Get all registrations (admin)
app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find({})
      .select('-__v')
      .sort({ registeredAt: -1 });

    res.json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    console.error('❌ Error fetching registrations:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch registrations'
    });
  }
});

// GET /api/stats - Registration statistics
app.get('/api/stats', async (req, res) => {
  try {
    const total = await Registration.countDocuments();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayCount = await Registration.countDocuments({
      registeredAt: { $gte: today }
    });

    const latest = await Registration.findOne()
      .sort({ registeredAt: -1 })
      .select('firstName lastName email registeredAt');

    // Company statistics
    const companyStats = await Registration.aggregate([
      {
        $group: {
          _id: '$company',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      success: true,
      stats: {
        totalRegistrations: total,
        registrationsToday: todayCount,
        latestRegistration: latest,
        topCompanies: companyStats
      }
    });
  } catch (error) {
    console.error('❌ Error fetching stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics'
    });
  }
});

// GET /api/health - Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Banking Conference API is running!',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// Basic route for testing
app.get('/', (req, res) => {
  res.json({
    message: 'Banking Conference API',
    status: 'Running',
    endpoints: {
      register: 'POST /api/register',
      registrations: 'GET /api/registrations',
      stats: 'GET /api/stats',
      health: 'GET /api/health'
    }
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('❌ Server error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Banking Conference Server running on port ${PORT}`);
      console.log(`🌐 API Health Check: http://localhost:${PORT}/api/health`);
      console.log(`📊 Registration Stats: http://localhost:${PORT}/api/stats`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();