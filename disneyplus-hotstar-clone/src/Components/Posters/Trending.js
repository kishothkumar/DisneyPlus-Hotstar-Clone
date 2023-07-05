import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTrending } from '../../features/movie/movieSlice'
import './Poster.css'

const Trending = () => {

    const movies = useSelector(selectTrending);

  return (
    <div className='poster__container'>
        <h1>Trending</h1>
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

export default Trending