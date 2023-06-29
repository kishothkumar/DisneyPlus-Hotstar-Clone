import React from 'react'
import logo from '../assets/images/logo.svg'
import home from '../assets/images/home-icon.svg'
import search from '../assets/images/search-icon.svg'
import watchlist from '../assets/images/watchlist-icon.svg'
import originals from '../assets/images/original-icon.svg'
import movies from '../assets/images/movie-icon.svg'
import series from '../assets/images/series-icon.svg'
import './Header.css'
import { auth, provider } from '../firebase'

const Header = () => {

    const handleAuth = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

  return (
    <nav className='Header'>
        <a className='logo'>
            <img className='logo_img' src={logo} alt='Disney+'></img>
        </a>
        <div className='menu'>
            <a className='menus'>
                <img src={home} alt='home'></img>
                <span>HOME</span>
            </a>
            <a className='menus'>
                <img src={search} alt='home'></img>
                <span>SEARCH</span>
            </a>
            <a className='menus'>
                <img src={watchlist} alt='home'></img>
                <span>WATCHLIST</span>
            </a>
            <a className='menus'>
                <img src={originals} alt='home'></img>
                <span>ORIGINALS</span>
            </a>
            <a className='menus'>
                <img src={movies} alt='home'></img>
                <span>MOVIES</span>
            </a>
            <a className='menus'>
                <img src={series} alt='home'></img>
                <span>SERIES</span>
            </a>
        </div>
        <a className='LoginBtn' onClick={handleAuth}>LOGIN</a>
    </nav>
  )
}

export default Header