import React from 'react'

import { Link } from 'react-router-dom';
import './Styles/styleNav.css'

export const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/' style={{ margin: '1rem' }}>
        Home
      </Link>
        <Link to='/ShoesList' style={{ margin: '1rem' }}>
        ShoesList
      </Link>
     
        <Link to='/CreateShoeProduct' style={{ margin: '1rem' }}>
        CreateShoeProduct
      </Link>
    </div>
  )
}
