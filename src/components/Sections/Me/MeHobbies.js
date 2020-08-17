import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import YOUNG_ME_GUITAR from '../../../assets/images/young_me_guitar.png'
import HACKATHON from '../../../assets/images/hackathon_exp.jpeg'
import ME_FIT from '../../../assets/images/me_fit.png'
import ME_PLAYING from '../../../assets/videos/me_playing.mp4'
import Skills from './Skills/Skills';

function MeHobbies(props) {    
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="Mom dropped me off in Rio" src={HACKATHON}>
                    Hack N' Chill <span role="img" aria-label="emoji">👨‍💻</span>
                </MeImage>
                <div className="me-body">
                    <h1>Hobbies <span role="img" aria-label="emoji">🎯</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={2} />
                    <p>
                        <br/>
                        I've always tried to make sure my hobbies were something more than just fun to me. Hobbies for me should also be something productive, either socially or academically. 
                        A very good example of this are hackathons! Attending those couldn't be more fun and at the same time it is quite a learning experience. I can name several technologies (Google Vision, Speech-to-Text, many more...) that I've tried in these events and how those have improved my resume, specially when I was a beginner.
                    </p>
                </div>
            </div>

            <Skills />

            <div className="me-intro-wrap">
                <MeImage alt="Band Concert" src={YOUNG_ME_GUITAR}>
                    11 y.o. me at school concert <span role="img" aria-label="emoji">🎸</span>
                </MeImage>
                <div className="me-body">
                    <p>
                        I started playing the guitar, at the age of 9 and up to this day this is one of my favorite hobbies. At this point, music is part of who I am.<br/>
                        I loved to play with other people and through music, I formed great friendships but most importantly developed important skills such as:
                    </p>
                    <ul style={{margin: '0 3px'}}>
                        <li>Getting out of my comfort zone; playing in front of other people is TOUGH</li>
                        <li>Teamwork to rehearsal and perform a song in group</li>
                        <li>Learning under pressure when you need to master songs within tight deadlines</li>
                    </ul>
                    <p style={{margin: 0}}>
                        Checkout my <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.youtube.com/user/SuperLucasGuns/videos">Youtube</a> channel for some low-quality guitar covers 😂.
                    </p>
                </div>
            </div>
            <div className="guitar-video">
                <video controls>
                    <source src={ME_PLAYING} type="video/mp4" />
                    Your browser does not support videos.
                </video>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        <br /><br/>
                        Ever since my exchange program, when I joined the track varsity team on my HS, running has been a passions and my favorite sport to practice. <br/> <br/>
                        I do not run competitively anymore, but I sure miss the feeling of being on a race! Now I run only 3-4 times a week as way to de-stress and as an excuse to listen to music for long periods of time 😂. 
                        <br/><br/>
                        Running has kept me in shape and has contributed to my well-being mentally and physically in enumerous ways.
                    </p>
                </div>
                <MeImage alt={"Track & Field"} src={ME_FIT}>
                    {"Track == Best Sport"} <span role="img" aria-label="emoji">🏃🏻</span>
                </MeImage>
            </div>
        </div>

    )
}

export default MeHobbies;