import React from 'react'
import '../FilmList/FilmList.css'
import axios from '../../axios'
import { useEffect,useState } from 'react'
import { ApiKey,ImageUrl } from '../../constant'

 

function FilmList(props) {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) =>{
      console.log(response.data.results)
      setMovie(response.data.results)
      
    })
   
  }, [])
  
  return (
    <div>
        <h3>{props.title}</h3>
        <div className='filmlist'>
          {movie.map((item)=>
                      <img className='card-img' src={`${ImageUrl+item.poster_path}`} alt="card" />
                    )}

            </div>
            
      
    </div>
  )
}

export default FilmList
