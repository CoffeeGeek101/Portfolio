import React from 'react'
import './aboutme.css';

export default function Aboutme() {
  return (
    <>
    {/* <img className='aboutme-hero' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/> */}
    <div id='aboutme' className='aboutme-container'>
        <div className='aboutme-wrapper'>
            <p className='aboutme-title'>About me.</p>
            <div className='bio'>
                <img className='profile-photo' src='/avi.jpg'/>
                <p className='bio-des'>Hi, my name is Shoumyadeep Narayan from India, I'm  a Software Engineer. Specialized in frontend development, including experience with HTML5, CSS3, Javascript ES6, TypeScript, Next.js, React.js, Redux, Zustand, Redis, Node.js and MongoDB. Displayed aptitude for quickly learning new technologies as market demands change.</p>
            </div>
            <div className='past-epx'>
                <p className='position'>Web Developer Intern</p>
                <div className='about-intern'>
                    <p className='intern-des'>Collaborated with a team of developers to build modern and responsive user interfaces using the best practices. Built an admin dashboard with Charts for visualization that tracks the information of interns</p>
                    <img className='intern-img' src='https://uploads-ssl.webflow.com/61a8d1d6f4ba145b578385f7/62e25f0a74e45d39dd926f51_radialx%20course%20player%20logo.png'/>
                </div>
            </div>
            <div className='past-epx'>
                <p className='position'>Junior Software Developer</p>
                <div className='about-intern'>
                    <p className='intern-des'>Collaborated with a team of developers to build modern and responsive user interfaces using Agile Software Development methodology. I have contributed to making the UI effecient and add new features on top of it. Also worked on Okta intergration with companys SSO to enable OIDC for users and the employee using the product.</p>
                    <img className='intern-img' src='https://uploads-ssl.webflow.com/618ec2e26c7ec2fc245f0a7a/619f98efd9a323aa5772fb8f_Weblogo%201.png'/>
                </div>
            </div>
            <div className='more-about'>For more information</div>
            <a href='https://drive.google.com/file/d/1HLEXJQXtXQo0MvhJIRbZCU8pX5QFr-4I/view?usp=sharing'><button className='resume-btn'>Resume</button></a>
        </div>
    </div>
    </>
  )
}
