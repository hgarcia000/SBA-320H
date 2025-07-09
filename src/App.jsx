import { useState } from 'react'
import './App.css'
import PokeList from './components/PokeList'
import { Route, Routes } from 'react-router-dom'
import RegionList from './components/RegionList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<RegionList />} />
      <Route path='/pokemon' element={<PokeList />} />
    </Routes>
  )
}

export default App
