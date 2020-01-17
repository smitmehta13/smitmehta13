import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import ME from '../../../assets/images/me.png'
import ME_FIT from '../../../assets/images/me_fit.png'
import HONOR_ROLE from '../../../assets/images/honour_role.png'
import EXCHANGE_PROGRAM_FAMILY from '../../../assets/images/exchange_program_family.jpg'
import GREENHEART from '../../../assets/images/greenheart.jpg'
import ME_AS_WALTER from '../../../assets/images/me_as_walter.png'
import VESTIBULAR_PASSEI from '../../../assets/images/vestibular_passei.png'


function MeHS(props) {
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="Graduating me" src={ME}>
                    Graduating me <span role="img" aria-label="emoji">👨🏻‍🎓</span>
                </MeImage>
                <div className="me-body">
                    <h1>High School <span role="img" aria-label="emoji">📚</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={2} />
                    <p>
                        <br />
                        High School was for me another life-changing experience.<br />
                        I moved to one of the best High Schools in Salvador I had math and sciences every year, and there I didn't know anybody. Thus, again, away from my friends.  <br />
                        As discussed above, I was overweight and a bit shy due to my sedentary hobbies. Therefore, initially, it was hard to adapt to the new environment. <br />
                        With that being said, I focused less on social interaction and more on academics. In my first year of HS, I quickly developed a passion for chemistry, achieved good marks and believed I was going to become a Chemical Engineer.
                        Once I learned about organic chemistry, all the chemistry between me and the subject had faded <span role="img" aria-label="emoji">😂</span>. <br />
                        By the end of my first year, I enjoyed most of my courses especially physics, math and history and my hobbies were still very much active.
                </p>
                </div>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        <br />
                        I ended the year weighing 85kg, which is a lot for a not very tall kid I was. Going to my second year of HS, I decided to change. I was determined to lose weight, stop playing video games and develop my social skills.<br />
                        At the same time, my mom motivated me to enroll in a public exchange program in the USA, which I would attend an american high school and live in the house of a traditional american family for 10 months.
                        As scary as that sounds, I took the challenge as I believed that would be the perfect opportunity to get out of my comfort zone, develop better social skill and properly learn english all at once. <br />
                        September 2015, I moved to a small town in upstate New York called Start Lake and there I completed my softmore year of High School. <br />
                        First challenge I faced was the language barrier. It was rough to understand those fast speaking countryside fellas. However, not knowing the language gave me an excuse in case I sound stupid <span role="img" aria-label="emoji">🤣</span>, because of this fact, in my opinion, it was easier to socialize.
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
                        <br /><br />
                        After a month or so, the language was not a problem anymore. I was able to communicate well with everyone. Through volunteer work, I got in touch with a broad variety of people and backgrounds and this way my social skills rapidly increased. <br /><br />
                        Surprisingly, the language didn't affect my marks either. Against the exchange student coordinator's advice, I took physics with the Seniors, chemistry with the Juniors and math with the Softmores. <br />
                        To be honest, it was a lot easier than my school in Brazil, as for me. Since for me, the content covered was mostly a review, except for a couple of topics in physics, due to this, without too much effort, I managed to be on the honor roll list in the school every single month of the program. <br />
                        I was quite happy with the way the exchange program was going since most goals I had set had been accomplished, but one was left.
                    </p>
                </div>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        <br />
                        I still had planned to lose weight and become fit. Without excuses, I went chasing it. <br />
                        A bit before winter 2016, I went to the gym every day with my host siblings and friends. It was a great way to socialize while doing something productive under the cold weather of NY. By the time of spring, I had lost over 40 pounds. <br />
                        This way, I was able to join the varsity track team and compete alongside my host brother. <br />
                        Our coach was an AMAZING guy. He was a retired navy and previously a rugby athlete. Our everyday practices were tiring and tough. As a reference, the team started with 15 people and ended with 6. I enjoyed the hustle, the coach inspired me and made me want to impress him. Under his guidance I managed to put on 22 pounds back, but now of lean muscle.<br />
                        After that, I had accomplished all the goals I had set in mind when I decided to go to my exchange program.
                    </p>
                </div>
                <MeImage alt="Track & Field" src={ME_FIT}>
                    Track > Soccer <span role="img" aria-label="emoji">🏃🏻</span>
                </MeImage>
            </div>
            <div className="me-intro-wrap">
                <MeImage alt="Camp GreenHeart" src={GREENHEART}>
                    Camp GreenHeart <span role="img" aria-label="emoji">💚</span>
                </MeImage>
                <div className="me-body">
                    <p>
                        <br />
                        With a month left till the completion of the program, due to my volunteer work awards and academic achievements I received an invitation from GreenHeart, the non-profit organization that offered the exchange program, to spend a couple more weeks in the USA to become a camp leader at their annual camp aimed towards poor children in Chicago. <br />
                        Of course, I accepted such a great offer. They made me a tourist and introduced me to the beautiful city of Chicago. <br />
                        After that, at the camp, I had daily tasks with the dorm I was managing. <br />
                        I had to come up with a battle cry, dorm symbol and organize outdoor games. The kids came up with a dorm lullaby and I played the guitar along with them. <br />
                        In the end, I was assigned to perform a presentation about my culture and life in Brazil to the children from all dorms. <br />
                        This experience exposed me closer to the reality of children from the suburbs of a big city in America, it was very fulfilling to work with these kids, but at the same time sad and emotional to see them crying at the of the camp.
                    </p>
                </div>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        <br />
                        After a year full of new achievements, I came back to Brazil. And now, I was certain that I wanted to live abroad. Luckily, my mom's brother, who happens to be a software developer, had moved to Canada a couple of years back and told me very good things about the University Of Waterloo. Thus, at 16 years of age, I had set a new goal: attend UWaterloo Engineering. <br />
                        In the meantime though, I had to catch up on my school, since the year I spent abroad had been academically lighter. Since my goal was on UWaterloo and not the local schools, I focused on achieving good scores on international exams such as the IELTS and SAT, for instance. However, knowing how competitive it would be to get in waterloo, I needed a second option in case waterloo didn't work out, hence I also studied for the ENEM (the Brazilian national exam for entrance to most universities). <br />
                        I focused mostly on math, physics, and essay (ENEM's essay is worth a LOT). For math and physics, I spent several extra hours with the teachers on a daily basis. And in order to practice essays, I did something rather unusual: I read books nonstop. In 2017, I read over 20 books (mostly related to current events, politics, and history) while maintaining an over 90% average in school and committed to the gym every day.  <br />
                    </p>
                </div>
                <MeImage alt="Me and my teacher" src={ME_AS_WALTER}>
                    Me dressed up as my math teacher <span role="img" aria-label="emoji">🤓</span>
                </MeImage>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        <br />
                        At that point, I had decided which engineering to pursue: Electrical. I had chosen it due to my passion for math and physics. Such passion would later turn fully into programming.
                        By the end of the year, I had good enough marks on all the necessary international exams required for UW, however, I wouldn't know whether I got accepted or not until March. However, due to geographic reasons, universities in Brazil start in February. <br />
                        After receiving results from the ENEM, I was eligible to attend one of Brazil's most prestigious engineering institutes, UFRJ (Federal University Of Rio de Janeiro). <br />
                        As that had been always my second option, I moved to Rio de Janeiro at the beginning of 2018 to study Electrical Engineering. <br />
                        That will begin my transition into adulthood, which will be discussed with more details next.
                    </p>
                </div>
                <MeImage alt="Me and my teacher" src={VESTIBULAR_PASSEI}>
                    HS directors w/ me after UFRJ acceptance <span role="img" aria-label="emoji">🎉</span>
                </MeImage>
            </div>
        </div>
    )
}

export default MeHS;