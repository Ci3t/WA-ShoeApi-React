import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div>
        <Link to='/' style={{ margin: '1rem' }}>
        home
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
