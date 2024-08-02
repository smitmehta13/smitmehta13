import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import HOLI from '../../../assets/images/holi.jpg'
import KAYAKING from '../../../assets/images/Kayaking.jpg'
import ME_FIT from '../../../assets/images/me_fit.png'
import Skills from './Skills/Skills'

function MeHobbies(props) {
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="kayaking in North Ontario" src={KAYAKING}>
                    Kayak N' Code <span role="img" aria-label="emoji">👨‍💻🚣🏻</span>
                </MeImage>
                <div className="me-body">
                    <h1>Hobbies <span role="img" aria-label="emoji">🎯</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={1} />
                    <p>
                        <br />
                        Kayaking and coding may seem like distinct activities, but they share a common thread in their demands for problem-solving and adaptability. Kayaking requires navigating through unpredictable waters, which parallels the process of debugging and optimizing code. Both activities involve a blend of strategy, precision, and perseverance. Just as I adjust my strokes and approach to tackle different water conditions, I adapt my coding techniques to overcome various technical challenges. Each hobby enhances my ability to stay focused, think critically, and embrace new experiences, making them integral parts of my personal and professional growth.
                    </p>
                </div>
            </div>

            <Skills />

            <div className="me-intro-wrap">
                <MeImage alt="Band Concert" src={HOLI}>
                    Holi celebration with Family <span role="img" aria-label="emoji">🎊🌈</span>
                </MeImage>
                <div className="me-body">
                    <p>
                        Another hobby of mine is celebrating festivals. I love immersing myself in cultural traditions and community events, which has been both enriching and fulfilling!
                        <br />
                        Through these celebrations, I’ve developed important skills such as:
                    </p>
                    <ul style={{ margin: '0 3px' }}>
                        <li>Embracing Diversity: Experiencing different cultures has broadened my perspective.</li>
                        <li>Building Connections: Celebrating with others strengthens relationships and creates lasting memories.</li>
                    </ul>
                    <p style={{ margin: 0 }}>
                        <br />
                        Recently, I’ve been involved in organizing local festival events and sharing highlights on my 
                        <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.facebook.com/events/waterloo-public-square/indian-food-carnival/411676604984608/">
                        social media</a>. Check it out for a glimpse of the fun!
                    </p>
<p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
</p>
                </div>
            </div>
        </div>

    )
}

export default MeHobbies;