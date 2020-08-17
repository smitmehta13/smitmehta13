import React from 'react'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import MeImage from './MeImage'
import ME from '../../../assets/images/me2.png'

function MeIntro() {
    return (
        <div className="me-intro-wrap">
            <MeImage alt="Intro Profile" src={ME}>
                This is me <span role="img" aria-label="emoji">😎</span>
            </MeImage>
            <div className="me-body">
                <h1>Intro <span role="img" aria-label="emoji">✨</span></h1>
                <MeSectionBreadcrumbs sectionIndex={0} />
                <p>
                    <br />
                    Hi and welcome to my home on the internet!<br />
                    As you've guessed, my name is Lucas, more specifically Lucas Nogueira Serafim de Araujo. I know, it's huge. <br />
                    I am 20 years old and I currently pursue a Computer Engineering degree at the University Of Waterloo with hopes to graduate in 2023. <br /><br />
                    This section, unlike the others, it's not focused on my work/academic related accomplishments. It's for you to get to know me better and learn about my interests and what I do for fun! Hopefully you can relate to me in some way 😃.<br /><br />
                    Make sure to connect with me on <a rel="noopener noreferrer" target="_blank" className="link" href="https://github.com/lnogueir">Github</a>, <a rel="noopener noreferrer" target="_blank" className="link" href="https://ca.linkedin.com/public-profile/in/lucas-nogueira-2b1b58190">Linkedin</a> and <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.instagram.com/lucasnogueira021/">Instagram</a>!
                </p>
            </div>
        </div>
    )
}

export default MeIntro;