import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function NavBar() {
  return (
    <>
        <header>
            <nav>
                <NavLink to='/'>Home   </NavLink>
                <NavLink to='/matches'>Matches   </NavLink>            
                <NavLink to='/matchmaking'>Matchmaking   </NavLink>            
                <NavLink to='/heroes'>Heroes</NavLink>            
            </nav>
        </header>
        <Outlet />
    </>
    
  )
}

export default NavBar
