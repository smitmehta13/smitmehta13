import React from 'react'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import MeImage from './MeImage'
import ME from '../../../assets/images/me.jpg'

function MeIntro() {
    const today = new Date();
    const birthDate = new Date("09/13/2000");
    const myAgeInDays = (today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24);
    const myAge = Math.floor(myAgeInDays / 365);
    return (
        <div className="me-intro-wrap">
            <MeImage alt="Intro Profile" src={ME}>
                This is me <span role="img" aria-label="emoji">😎</span>
            </MeImage>
            <div className="me-body">
                <h1>Intro <span role="img" aria-label="emoji">🌱</span></h1>
                <MeSectionBreadcrumbs sectionIndex={0} />
                <p>
                    <br />
                    Hey there! Welcome to my home on the internet!
                    <br /><br />
                    My name is Smit Mehta, and I am currently pursuing a career in software development with a strong foundation in Computer Applications.
                    <br /><br />
                    I love working with diverse teams on challenging projects that contribute to society's growth in meaningful ways. I have a keen interest in software development, automation, and cloud technologies.
                    <br /><br />
                    Feel free to connect with me on <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.linkedin.com/in/smitmehtadev">LinkedIn</a>!
                </p>

            </div>
        </div>
    )
}

export default MeIntro;