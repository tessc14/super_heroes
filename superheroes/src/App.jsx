import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Matches, Heroes, Matchmaking } from './pages'
import { NavBar } from './components'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/matches' element={<Matches/>}></Route>
          <Route path='/heroes' element={<Heroes/>}></Route>
          <Route path='/matchmaking' element={<Matchmaking/>}></Route>
        </Route>
      </Routes>
      
         
    </div>
  )
}

export default App
