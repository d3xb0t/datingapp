import './App.css'
import { Header } from './components/Header.jsx'
import { DatingCards } from './components/DatingCards.jsx'
import { SwipeButtons } from './components/SwipeButtons.jsx'

function App() {
  
  return (
    <div className="app">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  )
}

export default App
