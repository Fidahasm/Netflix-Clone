import React, { useEffect,useState } from 'react'
import '../Banner/Banner.css'
import axios from '../../axios'
import { ApiKey,ImageUrl } from '../../constant'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
   axios.get(`/trending/all/week?api_key=${ApiKey}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[0])
   })
  }, [])
  
  return (

    <div>
        <div  className='banner' style={{backgroundImage:`url(${movie?ImageUrl+movie.backdrop_path:null})`}}>
            <div className='banner-content'>
            <h1>{movie?movie.title:null}</h1>
            <p className='desc'>{movie?movie.overview:null}</p>
            <div className='buttons'>
                <div className='btn' id='play-btn'>
                    <i class='bx bx-play'></i>
                    <p>Play</p>
                </div>
                <div className='btn' id='list-btn'>
                    <i class='bx bx-plus'  ></i>
                    <p>My List</p>
                </div>
            </div>
           
            </div>
            <div className='gradient'>
            
            </div>

            </div>
           
        
      
    </div>
  )
}

export default Banner
