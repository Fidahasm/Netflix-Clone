import React from 'react'
import '../FilmList/FilmList.css'
import axios from '../../axios'
import { useEffect,useState } from 'react'
import { ApiKey,ImageUrl } from '../../constant'
import Youtube from 'react-youtube'

 

function FilmList(props) {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) =>{
      console.log(response.data.results)
      setMovie(response.data.results)
      
    })
   
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("Array Empty!")
      }
    }).catch((error)=>
      {
        console.log("Error Found")
      })
  }
  console.log(movie.id)

  return (
    <div>
        <h3>{props.title}</h3>
        <div className='filmlist'>
          {movie.map((item)=>
                      <img onMouseEnter={() =>handleMovie(item.id)} onMouseLeave={() =>{setUrlId('')}} className='card-img' src={`${ImageUrl+item.poster_path}`} alt="card" />
                    )}

            </div>
          { urlId &&  <Youtube opts={opts} videoId={urlId.key}/>}
            
      
    </div>
  )
}

export default FilmList
