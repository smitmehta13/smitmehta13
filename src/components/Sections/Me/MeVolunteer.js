import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import KASHMIR from '../../../assets/images/me-volunteering.jpg'

function MeVolunteer(props) {
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="Camp GreenHeart" src={KASHMIR}>
                    Kashmir volunteering <span role="img" aria-label="emoji">☺️</span>
                </MeImage>
                <div className="me-body">
                    <h1>Volunteer <span role="img" aria-label="emoji">🙌</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={2} />
                    <p>
                        <br />
                        During my 8th grade, I had the opportunity to volunteer with my classmates in Kashmir. It was an enriching experience that allowed me to socialize and develop my soft skills while giving back to the community.
                        <br /><br />
                        We worked on various projects, including helping at local schools, organizing community events, and assisting in distributing essential supplies to those in need.
                        <br /><br />
                        This experience was deeply rewarding and fostered a strong sense of teamwork and community spirit among us. It was a significant step in my journey of volunteering and community involvement.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default MeVolunteer;