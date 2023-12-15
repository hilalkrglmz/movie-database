import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const Header = () => {

  return (
    <header className='d-flex justify-content-between mt-2'>
      <Link to={"/"} className="d-flex align-items-center gap-4">
        <img style={{ maxWidth: "150px" }} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
      </Link>
      <SearchForm/>
    </header>
  )
}

export default Header