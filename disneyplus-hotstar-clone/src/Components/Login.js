import React from 'react'
import logo_one from '../assets/images/cta-logo-one.svg'
import './Login.css'

const Login = (props) => {
  return (
    <section className='container'>
        <div className='content'>
            <div className='app_logos'>
                <img className='logo_one' src={logo_one} alt=''></img>
            </div>
            <div className='bgImage'></div>
        </div>
    </section>
  )
}

export default Login