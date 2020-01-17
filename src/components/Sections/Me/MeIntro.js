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
                    Hi!<br />
                    Welcome to my home on the internet. <br />
                    As you've guessed, my name is Lucas, more specifically Lucas Nogueira Serafim de Araujo. I know, it's huge. <br />
                    I am 19 years old and I currently pursue a Computer Engineering degree at the University Of Waterloo with hopes to graduate in 2023. <br /><br />
                    This section, unlike the others, it's not focused on my work/academic related accomplishments. It's about Lucas' story; a story of someone who's curious and eager to learn something new everyday.<br /><br />
                    It is a way for me to reflect and remember the things I have done in a nice synthesized chronological order.
                </p>
            </div>
        </div>
    )
}

export default MeIntro;