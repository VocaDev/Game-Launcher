import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar 
        onSearch={(val) => console.log('Search:', val)}
        onToggleTheme={(isDark) => console.log('Dark mode:', isDark)} 
      />
    </>
  )
}

export default App
