import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import RIO from '../../../assets/images/rio.jpg'
import UWATERLOO_IN from '../../../assets/images/uwaterloo_in.png'
import GOING_TO_CANADA from '../../../assets/images/going_to_canada.png'

function MeAdulting(props) {
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="Mom dropped me off in Rio" src={RIO}>
                    Moved to Rio <span role="img" aria-label="emoji">🌴</span>
                    &nbsp;-&nbsp;
                    <span role="img" aria-label="emoji">📍</span>Jardim Botânico
                </MeImage>
                <div className="me-body">
                    <h1>Adulting <span role="img" aria-label="emoji">💡</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={3} />
                    <p>
                        <br />
                        Thus, I moved to Rio, a new state, a new city and once again, a new life. I had never been to Rio before and wasn't aware of how nice it was down there. So far, it is definitely my favorite city.<br />
                        Although I was alone in my exchange program, this was the first time I actually lived by myself. <br />
                        Two weeks after I arrived, I received an acceptance letter from UWaterloo. I was super happy and excited, but that was not a reason for me to stop studying and procrastinate till September; that would be a waste. Instead, I decided to get ahead start and continued the term at UFRJ as if nothing had happened. <br />
                        There I had my first interaction with coding. I had a programming course taught in Python and I found it super fun. I found it a bit difficult in the beginning, but I really enjoyed the new problem-solving way I was being introduced to.  <br />
                    </p>
                </div>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        A couple of weeks in, I realized I needed some work experience in order to find a coop since I had very little coding experience back then. With that in mind, while I was taking an uber, I persuaded the driver to hire me as a math teacher to his kids. <br />
                        I always loved to teach physics and math to my friends, so I had lots of fun teaching math to kids. Soon, I had 7 other students 5 middle schoolers and 2 high schoolers. I kept working as a self-employed math tutor until the day I left Rio. <br />
                        At URFJ, I loved all my courses besides the labs. I was granted an award for being on the top 5% in my Calculus class which I was not able to receive since it was given to the students after I had already left the city. <br /> <br />
                        From the beginning, my time in Rio had been determined to have an end, hence I tried to make it as memorable as I could, just like one who knows the day of his death tries to make the most out of life. <br />
                        Within 4 months I made awesome friends, met people from all over Brazil. These 4 months will always have a special place in my mind.
                    </p>
                </div>
                <MeImage alt="UW Acceptance Email" src={UWATERLOO_IN}>
                    UW Acceptance Email <span role="img" aria-label="emoji">🖤💛</span>
                </MeImage>
            </div>
            <div className="me-intro-wrap">
                <MeImage alt="UW Acceptance Email" src={GOING_TO_CANADA}>
                    Heading to Canada <span role="img" aria-label="emoji">🇨🇦</span>
                </MeImage>
                <div className="me-body">
                    <p>
                        The time I had been waiting for 2 years had finally arrived. I was moving to Canada to study at UW. <br />
                        All the hard work paid off. My uncle, who I have previously mentioned above, was waiting for me in the "North Side". I was going to live with him and his family for the next 5 years (apart from internships outside Waterloo). <br />
                        If it wasn't for his hospitality, I don't believe it would be viable to attend my dream university. Uncle Clovis, a HUGE thanks! <br /><br />
                        Once I arrived and started making my first Canadian friends, I realized the level of competition at UW was different from what I had seemed before, it was a lot tougher. Everyone around me had had big accomplishments in and outside school. I first heard of Hackathons and quickly developed an interest in these events, but felt like I had too little experience to participate in one. <br />
                        After my first coop, where I had to code every day, programming became a passion and I decided to switch from Electrical to Computer Engineering. <br />
                        Now, after 2 years of coding, and experience at the enterprise level, I believe to be in the beginning, again, of a brand new phase in my life. <br />
                        This will be content for a future section which is still under development currently in real life.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default MeAdulting;