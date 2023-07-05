import React from 'react'
import Disney from '../../assets/images/viewers-disney.png'
import Marvel from '../../assets/images/viewers-marvel.png'
import National from '../../assets/images/viewers-national.png'
import Pixar from '../../assets/images/viewers-pixar.png'
import Starwars from '../../assets/images/viewers-starwars.png'
import DisneyVideo from '../../assets/videos/1564674844-disney.mp4'
import PixarVideo from '../../assets/videos/1564676714-pixar.mp4'
import MarvelVideo from '../../assets/videos/1564676115-marvel.mp4'
import StarwarsVideo from '../../assets/videos/1608229455-star-wars.mp4'
import NationalVideo from '../../assets/videos/1564676296-national-geographic.mp4'
import './Viewers.css'

const Viewers = () => {
  return (
    <div className='viewersContainer'>
        <div className='imgWrap'>
            <img src={Disney} alt=''></img>

            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={DisneyVideo} type='video/mp4'></source>
            </video>
        </div>
        <div className='imgWrap'>
            <img src={Pixar} alt=''></img>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={PixarVideo} type='video/mp4'></source>
            </video>
        </div>
        <div className='imgWrap'>
            <img src={Marvel} alt=''></img>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={MarvelVideo} type='video/mp4'></source>
            </video>
        </div>
        <div className='imgWrap'>
            <img src={Starwars} alt=''></img>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={StarwarsVideo} type='video/mp4'></source>
            </video>
        </div>
        <div className='imgWrap'>
            <img src={National} alt=''></img>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src={NationalVideo} type='video/mp4'></source>
            </video>
        </div>
    </div>
  )
}

export default Viewers