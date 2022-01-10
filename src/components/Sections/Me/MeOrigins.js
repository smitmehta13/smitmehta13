import React from 'react'
import SALVADOR_PLANE_VIEW from '../../../assets/images/salvador_plane_view.jpg'
import SALVADOR1 from '../../../assets/images/salvador_bahia1.jpg'
import SALVADOR2 from '../../../assets/images/salvador_bahia2.jpg'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'

function MeOrigins(props) {
    const GALERY = [
      { src: SALVADOR1, alt: 'Elevador Lacerda' },
      { src: SALVADOR2, alt: 'Farol da Barra' },
    ]
    return (
      <div>
        <div className="me-section-content-wrapper">
            <div className="me-origins-wrap">
                <div className="me-body">
                    <h1>Origins <span role="img" aria-label="emoji">🌱</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={1} />
                    <p>
                        <br />
                        I was born and raised in a city called Salvador, in the northeast of Brazil in the state of Bahia.<br />
                        Although I've been constantly moving since the age of 15, when I went on an Exchange Program, Salvador is and will always be my home town.
                        There is where all my childhood friends are and most importantly, my mom.<br /><br />
                        Most of my family, however, is from a city called Recife, also in the northeast of Brazil but in the state of Pernambuco.
                        I was lucky to have grown up in an awesome environment with lots of kids, playing several outdoor games and, of course, soccer on a daily basis. Surprisingly I completely lost interest in soccer and now I'm a basketball guy. I'm becoming Canadian 😅!
                    </p>
                </div>
                <MeImage alt="Plane Views" src={SALVADOR_PLANE_VIEW}>
                    My Home <span role="img" aria-label="emoji">💛 🇧🇷</span>
                </MeImage>
            </div>
        </div>
        <div className="photo-galery">
            {GALERY.map((item, i) => <MeImage key={i} alt={item.alt} src={item.src} />)}
        </div>
      </div>
    )
}

export default MeOrigins