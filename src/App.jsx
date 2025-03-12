import { useState } from 'react'
import Nav from './components/nav'
import './App.css'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage/>
    </>
  )
}

export default App
