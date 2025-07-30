// App.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import EventOverview from './components/EventOverview'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
import Registration from './components/Registration'
import Footer from './components/Footer'
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventOverview />
      <Agenda />
      <Speakers />
      <Registration />
      <Footer />
    </div>
  )
}
export default App