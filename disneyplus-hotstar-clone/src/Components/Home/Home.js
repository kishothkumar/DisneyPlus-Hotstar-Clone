import React from 'react'
import ImgSlider from '../ImgSlider/ImgSlider'
import Viewers from '../Viewers/Viewers'
import './Home.css'

const Home = (props) => {
  return (
    <main className='homeContainer'>
      <ImgSlider />
      <Viewers />
    </main>
  )
}

export default Home