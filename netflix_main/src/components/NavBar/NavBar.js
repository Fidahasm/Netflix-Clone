import React from 'react'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
       <img className='logo' src='https://wallpapers.com/images/hd/netflix-logo-redon-black-l2sdc7dpfo35m127.png' alt='logo'/>
       <div className='nav-contents'>
       <a href="">TV Shows</a>
       <a href="">Movies</a>
       <a href="">Recently Added</a>
       <a href="">My List</a>
       </div>
       <a><i class='bx bx-search'></i></a>
      
    </div>
  );
}

export default NavBar
