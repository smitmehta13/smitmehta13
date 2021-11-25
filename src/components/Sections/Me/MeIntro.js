import React from 'react'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import MeImage from './MeImage'
import ME from '../../../assets/images/me2.png'

function MeIntro() {
    const today = new Date();
    const birthDate = new Date("02/28/2000");
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
                    <br /><br/>
                    My name is Lucas, I am {myAge} years old currently pursuing a Computer Engineering degree at the University Of Waterloo with hopes to graduate in 2023.
                    <br /><br />
                    I love to work with diverse teams on challenging projects that, ideally, contributes to society's growth in some way. I am also interested in any projects involving audio/video systems or streaming - I love that stuff.
                    <br /><br />
                    Make sure to connect with me on <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.linkedin.com/in/lnogueir/">Linkedin</a>!
                </p>
            </div>
        </div>
    )
}

export default MeIntro;