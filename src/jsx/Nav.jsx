import React from 'react'

import { Link } from 'react-router-dom';
import './Styles/styleNav.css'

export const Nav = () => {
  return (
    <div className='nav'>
      <span className='home'>

        <Link to='/' style={{ margin: '1rem' }}>
        Home
      </Link>
        <Link to='/ShoesList' style={{ margin: '1rem' }}>
        Shoes
      </Link>
      </span>

     <span className='addProduct '>
        <Link className='btn' to='/CreateShoeProduct' style={{ margin: '1rem' }}>
        Sell Product
      </Link>
     </span>
    </div>
  )
}
