import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import ME from '../../../assets/images/me.png'
import HONOR_ROLE from '../../../assets/images/honour_role.png'
import EXCHANGE_PROGRAM_FAMILY from '../../../assets/images/exchange_program_family.jpg'
import UWATERLOO_IN from '../../../assets/images/uwaterloo_in.png'

function MeHS(props) {
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="Graduating me" src={ME}>
                    Graduating me <span role="img" aria-label="emoji">👨🏻‍🎓</span>
                </MeImage>
                <div className="me-body">
                    <h1>High School <span role="img" aria-label="emoji">📚</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={3} />
                    <p>
                        <br />
                        High School was quite an experience for me.<br />
                        I attended one of the best High Schools in Salvador, <a rel="noopener noreferrer" target="_blank" className="link" href="http://www.csp-ba.com.br/">Colégio São Paulo</a>, and had math and sciences classes throughout all years. <br/>
                        In my first year of HS, I quickly developed a passion for chemistry, achieved good marks and believed I was going to become a Chemical Engineer.
                        Once I learned about organic chemistry, all the chemistry between me and the subject had faded <span role="img" aria-label="emoji">😂</span>.
                        <br/> <br/>
                        On my second year of HS, I enrolled on a public exchange program in the USA, which I would attend an american high school and live in the house of a traditional american family for 10 months. As scary as that sounds, I believed that would be a great opportunity to get out of my comfort zone, develop my social skill and properly learn english all at once.
                </p>
                </div>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        <br />
                        At the age of 15, I moved to a small town in upstate New York called Start Lake and there I completed my softmore year of High School as an exchange student! <br />
                        There I had to overcome several challenges first of which I faced was the language barrier, because as a matter of fact Brazil speaks strictly Portuguese and I had never spoken with a native english speaker before. 
                        <br/>
                        It was rough to understand those fast speaking countryside fellas. However, not knowing the language gave me an excuse in case I sound stupid <span role="img" aria-label="emoji">🤣</span>, because of this, it was actually easier to socialize. After a month or so, the language was not a problem anymore. I was able to communicate well with everyone and through volunteer work, I got in touch with a broad variety of people and backgrounds and this way I was able to develop my social skills greatly. <br /><br />
                    </p>
                </div>
                <MeImage alt="Host family" src={EXCHANGE_PROGRAM_FAMILY}>
                    My american family <span role="img" aria-label="emoji">🇺🇸</span>
                </MeImage>
            </div>
            <div className="me-intro-wrap">
                <MeImage alt="Honour Role Card" src={HONOR_ROLE}>
                    Honor Roll Card <span role="img" aria-label="emoji">🥇</span>
                </MeImage>
                <div className="me-body">
                    <p>
                        <br/>
                        Thankfully, the language difference didn't affect my marks. It was honestly a lot easier than my school in Brazil, since for me, the content covered was mostly a review, except for a couple of topics in physics since I took it with Seniors. Without too much effort, I managed to be on the honor roll list in the school every single month of the program.
                        <br/><br/>
                        Due to my volunteer work awards and academic achievements I received an invitation from <a rel="noopener noreferrer" target="_blank" className="link" href="https://greenhearttravel.org/">GreenHeart</a>, the non-profit organization that offered the exchange program, to spend a couple more weeks in the U.S. to become their international camp leader at their annual camp aimed towards poor children in Chicago. <br/>
                        Of course, I accepted and they made me a tourist and introduced me to the beautiful city of Chicago. There I was assigned to perform several presentation about my culture and life in Brazil to all the children who attended the camp. It was very fulfilling experience. 
                        <br/><br/>
                        After that I came back to Brazil and I was certain that I wanted to live abroad!
                    </p>
                </div>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        Luckily, my mom's brother, who happens to be a software developer, lives in Waterloo, Canada and told me very good things about the University Of Waterloo. At 16 years of age, I had set a new goal: attend UWaterloo Engineering. <br />
                        I focused on achieving good scores on international exams such as the <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.ieltscanada.ca/">IELTS</a> and <a rel="noopener noreferrer" target="_blank" className="link" href="https://collegereadiness.collegeboard.org/sat">SAT</a>. 
                        I wasn't sure which program I wanted, but I knew it would be engineering in some shape or form, hence I worried mostly about maths and physics and at the end applied for Electrical Engineering. Later I'd switch to Computer.
                        <br/> <br/>
                        With an average of <strong>93%</strong>, I was accepted to attend the Electrical Engineering Class of 2023 at the University Of Waterloo!
                        During the 6 months break between HS graduation and UWaterloo's first day, I attended one of Brazil's most prestigious engineering institutes, <a rel="noopener noreferrer" target="_blank" className="link" href="https://ufrj.br/">UFRJ</a>, to get a head start in courses such as calculus, physics and coding.
                    </p>
                </div>
                <MeImage alt="UW Acceptance Email" src={UWATERLOO_IN}>
                    UW Acceptance Email <span role="img" aria-label="emoji">🖤💛</span>
                </MeImage>
            </div>
        </div>
    )
}

export default MeHS;