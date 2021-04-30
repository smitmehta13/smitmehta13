import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import GREENHEART from '../../../assets/images/greenheart.jpg'

function MeVolunteer(props) {
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="Camp GreenHeart" src={GREENHEART}>
                    Camp GreenHeart <span role="img" aria-label="emoji">💚</span>
                </MeImage>
                <div className="me-body">
                    <h1>Volunteer <span role="img" aria-label="emoji">🙌</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={2} />
                    <p>
                        <br />
                        During high school, I did a lot of volunteering work. I found that a great way to socialize and develop my soft skills.
                        <br/><br/>
                        In my junior year, I enrolled in a public exchange program in the USA, and there I completed over 30 hours of volunteer work throughout the program in community centers, assisting elderly and setting up events.
                        <br/><br/>
                        Due to my many contributions, the exchange program agency awarded me with certificates and a trip to volunteer at their annual summer camp in Chicago to support little from the slums of the city!
                </p>
                </div>
            </div>
        </div>
    )
}

export default MeVolunteer;