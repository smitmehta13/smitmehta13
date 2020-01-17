import React from 'react'
import SALVADOR_PLANE_VIEW from '../../../assets/images/salvador_plane_view.jpg'
import YOUNG_ME_GUITAR from '../../../assets/images/young_me_guitar.png'
import LOLSKILLS_RANK from '../../../assets/images/lolskills.jpg'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'

function MeOrigins(props) {
    return (
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
                        Most of my family, however, is from a city called Recife, also in the northeast of Brazil but in the state of Pernambuco. Due to this, throughout my whole life, I've visited Recife at least twice a year. <br />
                        I grew up in an awesome environment with lots of kids to play with. I played several outdoor games on a daily basis until the age of 9, when I moved to a new place with no kids to play with and I lost contact with all my previous friends. Today, I believe, this event played a key role on how things turned out the way they did.<br />
                        The age of 9 is the beginning of a complete new life for me and my oldest memories are from this age.
                    </p>
                </div>
                <MeImage alt="Plane Views" src={SALVADOR_PLANE_VIEW}>
                    My Home <span role="img" aria-label="emoji">💛 🇧🇷</span>
                </MeImage>
            </div>
            <div className="me-intro-wrap">
                <MeImage alt="Band Concert" src={YOUNG_ME_GUITAR}>
                    11 y.o. me at school concert <span role="img" aria-label="emoji">🎸</span>
                </MeImage>
                <div className="me-body">
                    <p>
                        At this age, I started to demonstrate thorough commitment and hard work towards playing the guitar, which is up to this day one of my hobbies.
                        I created a band with some of my closest friends and we played and won awards at school for 3 consecutive years. <br />
                        I loved to play with other people and through music, I formed great friendships but most importantly developed important skills such as:
                    </p>
                    <ul>
                        <li>Getting out of my comfort zone - playing in front of other people is TOUGH</li>
                        <li>Teamwork - without this, one cannot perform a song in group</li>
                        <li>Learning under pressure - when needed to master songs within tight deadlines</li>
                    </ul>
                </div>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        Around the same time, I started playing League Of Legends, when it had just been released and wasn't the most popular game.<br />
                        The same effort and commitment were put towards the game, and for those who have played, at the age of 13, I became the 5th best Garen in Brazil according to <a href="http://www.lolskill.net/">LolSkills</a>. <br />
                        I played with my friends, on teams with them and joined small local tournaments.
                        Two of them are still on this journey and one participated in the World Championship for the Brazilian team.<br />
                        Through this game, I learned how to remain calm in tough situations and developed better teamwork skills.

                        <br /><br />
                        However, all these sedentary activities made me gain a couple of extra pounds that I would have to deal with later in life. <br />
                        By the time I entered High School, such commitment and hard work towards those hobbies would be shifted in the direction of Fitness Lifestyle, Math and Science, which will be discussed in the next section.

                    </p>
                </div>
                <MeImage alt="LolSkill rank" src={LOLSKILLS_RANK}>
                    I was famous at school :p <span role="img" aria-label="emoji">🎮</span>
                </MeImage>
            </div>
        </div>
    )
}

export default MeOrigins