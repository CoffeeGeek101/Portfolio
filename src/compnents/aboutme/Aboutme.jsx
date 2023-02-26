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
                <img className='profile-photo' src='https://scontent.fccu5-1.fna.fbcdn.net/v/t1.6435-9/145650218_853694495200442_3750033430878188665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Rj3pOjXDV6sAX8LJGBJ&_nc_ht=scontent.fccu5-1.fna&oh=00_AfB0QXdVSwWUA7pBQO1v50hRBB0h68w_2cbNkNm5qm3ecQ&oe=641BA429'/>
                <p className='bio-des'>Hi, my name is Shoumyadeep Narayan from India, I am currently a student at a local computer science university, pursuing a degree in software engineering. Specialized in frontend development, including experience with HTML5, CSS3, Javascript ES6, React.js, Redux, Node.js and MongoDB. Displayed aptitude for quickly learning new technologies as market demands change.</p>
            </div>
            <div className='past-epx'>
                <p className='position'>Web Developer Intern</p>
                <div className='about-intern'>
                    <p className='intern-des'>Collaborated with a team of developers to build modern and responsive user interfaces using the best practices. Built an admin dashboard with Charts for visualization that tracks the information of interns</p>
                    <img className='intern-img' src='https://uploads-ssl.webflow.com/61a8d1d6f4ba145b578385f7/62e25f0a74e45d39dd926f51_radialx%20course%20player%20logo.png'/>
                </div>
            </div>
            <div className='more-about'>For more information</div>
            <a href='https://drive.google.com/file/d/1-BGgtSVGjwJ_55ZlBJ0yAJhgcH5e5L_i/view'><button className='resume-btn'>Resume</button></a>
        </div>
    </div>
    </>
  )
}
