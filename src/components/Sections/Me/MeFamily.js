import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import ME_GRANDMAS from '../../../assets/images/me_grandmas.png'
import MOM from '../../../assets/images/mom.png'
import FAMILY from '../../../assets/images/family.png'
import BROS_PROFS from '../../../assets/images/bros_profs.png'
import CANADA_FAMILY from '../../../assets/images/canada_family.jpg'
import MORE_FAMILY from '../../../assets/images/more_family.png'


function MeFamily(props) {
    const GALERY = [
        { src: FAMILY, alt: 'My family' },
        { src: CANADA_FAMILY, alt: 'My Canada Family' },
        { src: MOM, alt: 'Whom cheers me the most, mom!' },
        { src: BROS_PROFS, alt: 'Friends and teachers' },
        { src: MORE_FAMILY, alt: 'Uncle and Cousins' }
    ]
    return (
        <div>
            <div className="me-intro-wrap">
                <MeImage alt="Intro Profile" src={ME_GRANDMAS}>
                    Grandmas and I <span role="img" aria-label="emoji">👵🏻</span>
                </MeImage>
                <div className="me-body">
                    <h1>Family <span role="img" aria-label="emoji">🙌🏻</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={4} />
                    <p>
                        <br />
                        Throughout my journey, I have demonstrated to be a quick learner, a team worker, and someone who's not afraid to face new challenges. <br />
                        Besides that, the number of scenarios I've had to adapt have made me learn to be comfortable even when out of my comfort zone. <br />
                        However, none of that would have been possible if I haven't had great help and inspiration from family and friends.<br />
                        I am eternally grateful to all the people who have supported me, especially my mom, who plays a key role in the success I've had and the success that is yet to come. <br />
                    </p>
                </div>
            </div>
            <div className="photo-galery">
                {GALERY.map((item, i) => <MeImage key={i} alt={item.alt} src={item.src} />)}
            </div>
        </div>
    )
}

export default MeFamily;
