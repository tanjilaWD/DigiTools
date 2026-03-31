
import './App.css'
import Banner from './components/banner/Banner'
import Navber from './components/navber/Navber'
import Started from './components/started/Started'
import Stats from './components/stats/Stats'
import StartedCard from './components/ui/StartedCard'

function App() {
 

  return (
    <>
     <Navber/> 
     <Banner/>
     <Stats/>
     <Started/>
    </>
  )
}

export default App
