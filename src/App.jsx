import './App.css'
import { Main } from './components/main/main'
import { NavBar } from './components/nav/nav'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
