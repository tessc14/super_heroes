import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Matches, Heroes } from './pages'
import { NavBar } from './components'
import './App.css'

function App() {
  

  return (
    <div className="App"> superhero
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/matches' element={<Matches/>}></Route>
          <Route path='/heroes' element={<Heroes/>}></Route>
        </Route>
      </Routes>
      
         
    </div>
  )
}

export default App
