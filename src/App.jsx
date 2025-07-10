import { useState } from 'react'
import './App.css'
import PokeList from './components/PokeList'
import { Route, Routes } from 'react-router-dom'
import RegionList from './components/RegionList'
import PokeCard from './components/PokeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<RegionList />} />
      <Route path='/pokelist/:id' element={<PokeList />} />
      <Route path='/pokemon/:id' element={<PokeCard />} />
    </Routes>
  )
}

export default App
