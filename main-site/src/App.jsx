// App.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import EventOverview from './components/EventOverview'
import Agenda from './components/Agenda'
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventOverview />
      <Agenda />
      {/* Other sections... */}
    </div>
  )
}
export default App