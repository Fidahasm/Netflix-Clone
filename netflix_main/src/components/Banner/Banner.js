import React, { useEffect,useState } from 'react'
import '../Banner/Banner.css'
import axios from '../../axios'
import { ApiKey,ImageUrl } from '../../constant'

function Banner() {
  const [movie, setMovie] = useState([])
  const [currentMovieIndex,setCurrentMovieIndex] = useState(0)
  useEffect(() => {
   axios.get(`/trending/all/week?api_key=${ApiKey}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results)
    setCurrentMovieIndex(0)
   })
  }, [])
  useEffect(() => {
   const interval = setInterval(() => {
    if(movie.length>0)
      {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movie.length);
    }
   }, 5000);
   return()=>clearInterval(interval);
  }, [movie]);
   const currentMovie = movie[currentMovieIndex]
  
  return (

    <div>
        <div  className='banner' style={{backgroundImage:`url(${currentMovie?ImageUrl+currentMovie.backdrop_path:''})`}}>
            <div className='banner-content'>
            <h1>{currentMovie ? (currentMovie.title ? currentMovie.title : 'No Title') : ''}</h1>
            <p className='desc'>{currentMovie?currentMovie.overview:''}</p>
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
            <div className='gradient'></div>

            </div>
           
        
      
    </div>
  )
}

export default Banner
