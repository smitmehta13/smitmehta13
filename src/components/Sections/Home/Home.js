import React from 'react'
import RESUME from '../../../assets/resume/MehtaSmit.pdf'
import LINKEDIN_ICON from '../../../assets/images/linkedinIcon.svg'
import GITHUB_ICON from '../../../assets/images/githubLogo.svg'
import BackgroundGame from './BackgroundGame';
import $ from 'jquery'

class Home extends React.Component {
    static isFirstRender = true

    componentWillUnmount = () => {
        $('.appear-button').css('animation-delay', 'none')
        $('.delay-appear-hire-me').css('animation-delay', 'none')
        $('html, body').css('overflow', 'auto')
        $('body').css('background-color', `linear-gradient(left,#282c34, #282c34, #4b6cb7, #D6A4A4, rgb(68, 130, 172),#757F9A,  #71B280,  #ffe082)`)
    }

    componentDidMount = () => {
        if (Home.isFirstRender) {
            $('.appear-button').css('animation-delay', '3s');
            $('.delay-appear-hire-me').css('animation-delay', '3.5s');
            Home.isFirstRender = false;
        }
    }

    render() {
        return (
            <React.Fragment>
                <BackgroundGame />
                <section className="home-section animated">
                    <div>
                        <div className="mt50">
                            <span className='smit-name-title'>
                                <h1>
                                    <span>Smit Mehta</span>
                                </h1>
                            </span>
                            <div className="home-links justify-around appear-button">
                                <a className="home-link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/smitmehtadev/">
                                    <img alt="Linkedin Icon" style={{top: 1}} width="26" src={LINKEDIN_ICON}/> Linkedin
                                </a>
                                <span><i>•</i></span>
                                <a className="home-link" rel="noopener noreferrer" target="_blank" href="https://github.com/smitmehta13">
                                    <img alt="Github Icon" style={{top: 3}} width="26" src={GITHUB_ICON}/> Github
                                </a>
                            </div>
                        </div>
                        <div className="home-hire-me delay-appear-hire-me">
                            <h3>
                                Let's Work together?
                            </h3>
                            <div className="home-hire-me-links">
                                <a rel="noopener noreferrer" target="_blank" href={RESUME} className="home-link"><span role="img" aria-label="Resume Icon">📄</span> Resume</a>
                                <a rel="noopener noreferrer" target="_blank" href="mailto: smitmehta.dev@gmail.com" className="home-link"><span role="img" aria-label="Email Icon">📫</span> Email</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;