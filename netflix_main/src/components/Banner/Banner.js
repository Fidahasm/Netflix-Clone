import React from 'react'
import '../Banner/Banner.css'

function Banner() {
  return (
    <div>
        <div  className='banner'>
            <div className='banner-content'>
            <h1>Movie Name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vitae. </p>
            <div className='buttons'>
                <div className='btn' id='play-btn'>
                    <i class='bx bx-play'>Play</i>
                </div>
                <div className='btn' id='list-btn'>
                    <i class='bx bx-plus'  >My List</i>
                </div>
            </div>
           
            </div>
            <div className='gradient'></div>

            </div>
           
        
      
    </div>
  )
}

export default Banner
