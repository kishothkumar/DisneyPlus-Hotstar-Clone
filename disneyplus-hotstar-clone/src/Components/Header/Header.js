import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.svg'
import home from '../../assets/images/home-icon.svg'
import search from '../../assets/images/search-icon.svg'
import watchlist from '../../assets/images/watchlist-icon.svg'
import originals from '../../assets/images/original-icon.svg'
import movies from '../../assets/images/movie-icon.svg'
import series from '../../assets/images/series-icon.svg'
import './Header.css'
import { auth, provider } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../../features/user/userSlice'


const Header = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                history('/home');
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if(!userName){
            auth.signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                alert(error.message);
            });
        } else if(userName) {
            auth.signOut()
            .then(() => {
                dispatch(setSignOutState());
                history('/');
            })
            .catch((error) => alert(error.message));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

  return (
    <nav className='Header'>
        <a className='logo'>
            <img className='logo_img' src={logo} alt='Disney+'></img>
        </a>
        {
            !userName?
            <a className='LoginBtn' onClick={handleAuth}>LOGIN</a>
            :
            <>
            <div className='menu'>
                <a href='/home' className='menus'>
                    <img src={home} alt='home'></img>
                    <span className='menuItem'>HOME</span>
                </a>
                <a className='menus'>
                    <img src={search} alt='home'></img>
                    <span className='menuItem'>SEARCH</span>
                </a>
                <a className='menus'>
                    <img src={watchlist} alt='home'></img>
                    <span className='menuItem'>WATCHLIST</span>
                </a>
                <a className='menus'>
                    <img src={originals} alt='home'></img>
                    <span className='menuItem'>ORIGINALS</span>
                </a>
                <a className='menus'>
                    <img src={movies} alt='home'></img>
                    <span className='menuItem'>MOVIES</span>
                </a>
                <a className='menus'>
                    <img src={series} alt='home'></img>
                    <span className='menuItem'>SERIES</span>
                </a>
            </div>
            <div className='profile'>
                <img className='profilePic' src={userPhoto}></img>
                <div className='dropDown'>
                    <span onClick={handleAuth}>Sign out</span>
                </div>
            </div>
            </>
        }
    </nav>
  )
}

export default Header