import React from 'react'
import './connect.css'
import { EMAIL } from './email'
export default function Connect() {
  return (
    <div id='connect' className='connect-container'>
        <div className='connect-wrapper'>
            <div className='connect-ele-i'>
              <img className='connect-hero' src='https://media0.giphy.com/media/iIZO5d4IfSa0nkyLju/giphy.gif?cid=ecf05e47exqepv5m3x54sjxp5hi2v320y42oc5yebfj6ih65&rid=giphy.gif&ct=s'/>
              <h1 className='connect-title'>Get in Touch.</h1>
              <p className='connect-des'>Currently, I'm open for freelance work and a full-time software engineer at a company.</p>
              <div className='connect-email'>
                  <p className='email-text'> Email me at : <span>shoumyadeepnarayan30@gmail.com</span></p>
                  <p className='connect-line'>Just shoot me an email or click the button!</p>
                  <a href={`mailto:${EMAIL}`} className='email-btn'>Email me</a>
              </div>
            </div>
        </div>
    </div>
  )
}
