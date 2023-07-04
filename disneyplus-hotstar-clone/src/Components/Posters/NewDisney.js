import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNewDisney } from '../../features/movie/movieSlice'
import './Poster.css'

const NewDisney = () => {

    const movies = useSelector(selectNewDisney);

  return (
    <div className='poster__container'>
        <h1>NewDisney</h1>
        <div className='poster__content'>
            {
                movies && movies.map((movie, key) => (
                    <div key={key} className='imgWrap'>
                        <Link to={'/detail/'+ movie.id}>
                            <img src={movie.cardImg} alt={movie.title} className='poster__img'></img>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewDisney