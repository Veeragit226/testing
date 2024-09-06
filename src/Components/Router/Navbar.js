// import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {

    // const empty=axios.get('https://jsonplaceholder.typicode.com/')
  return (
    <div>
        <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Help'>Help</Link></li>
            <li><Link to='/Settup'>Settup</Link></li>
        </ul>
    </div>
  )
}

export default Navbar