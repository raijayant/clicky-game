import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar () {
  return (
    <div className='wrapper'>
      <p className='title'>

        <Link to='/' className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
        Clicky Game!
        </Link>
      </p>
      <p className='click'>
          Click an image to begin
      </p>
      <div class='scoreboard'>
        <p className='score'>
          Score:
        </p>
        <p className='digit'>
            0
        </p>
      </div>
      <div className='topscore'>
        <p>
          Top score:
        </p>
        <p className='top'>
          0
        </p>
      </div>
    </div>
  )
}

export default NavBar
