// App.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import EventOverview from './components/EventOverview'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventOverview />
      <Agenda />
      <Speakers />
      {/* Other sections... */}
    </div>
  )
}
export default App