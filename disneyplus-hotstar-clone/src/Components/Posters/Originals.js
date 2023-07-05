import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { selectOriginal } from '../../features/movie/movieSlice'
import './Poster.css'

const Originals = () => {

    const movies = useSelector(selectOriginal);

  return (
    <div className='poster__container'>
        <h1>Originals</h1>
        <div className='poster__content'>
            {
                movies && movies.map((movie, key) => (
                    <div key={key} className='poster__imgWrap'>
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

export default Originals