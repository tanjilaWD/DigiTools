
import './App.css'
import Banner from './components/banner/Banner'
import Navber from './components/navber/Navber'
import Pricing from './components/pricing/Pricing'
import Started from './components/started/Started'
import Stats from './components/stats/Stats'
import StartedCard from './components/ui/StartedCard'
import Workflow from './components/workflow/Workflow'

function App() {
 

  return (
    <>
     <Navber/> 
     <Banner/>
     <Stats/>
     <Started/>
     <Pricing/>
     <Workflow/>
    </>
  )
}

export default App
