import React from 'react'
import logo_one from '../assets/images/cta-logo-one.svg'
import logo_two from '../assets/images/cta-logo-two.png'
import './Login.css'

const Login = (props) => {
  return (
    <section className='container'>
        <div className='content'>
            <div className='app_logos'>
                <img className='logo_one' src={logo_one} alt=''></img>
                <a className='signin_link' href='#'>GET IT THERE</a>
                <p className='description'>Get Premier Access to Raya and the Last
                  Dragon for an additional fee with a Disney+ 
                  subscription. As of 03/26/21, the price of 
                  Disney+ and The Disney Bundle will increase
                  by $1.
                </p>
                <img className='logo_two' src={logo_two} alt=''></img>
            </div>
            <div className='bgImage'></div>
        </div>
    </section>
  )
}

export default Login