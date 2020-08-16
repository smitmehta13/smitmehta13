import React from 'react'
import { FaFileAlt, FaGithub, FaEnvelope } from 'react-icons/fa'
import RESUME from '../../../assets/docs/resume.pdf'
import BackgroundGame from './BackgroundGame';
import $ from 'jquery'

class Home extends React.Component {
    static is_first_render = true

    componentWillUnmount = () => {
        $('.appear-button').css('animation-delay', 'none')
        $('html, body').css('overflow', 'auto')
        $('body').css('background-color', `linear-gradient(left,#282c34, #282c34, #4b6cb7, #D6A4A4, rgb(68, 130, 172),#757F9A,  #71B280,  #ffe082)`)
    }

    componentDidMount = () => {
        if (window.innerWidth > 645) {
            $('html, body').css('overflow', 'hidden')
        }
        $('body').css('background-color', '#282c34')
        if (Home.is_first_render) {
            $('.appear-button').css('animation-delay', '3s');
            Home.is_first_render = false;
        }
        var TxtRotate = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                let to_add = this.txt.length === fullTxt.length ? fullTxt.length - 3 : this.txt.length - 1
                this.txt = fullTxt.substring(0, to_add);
            } else {
                let to_add = this.txt.length < fullTxt.length - 3 ? this.txt.length + 1 : fullTxt.length
                this.txt = fullTxt.substring(0, to_add);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 3; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 350;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };


        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    }

    render() {
        return (
            <React.Fragment>
                <BackgroundGame />
                <section className="home-section animated">
                    <div className="home-main-titles">
                        <div>
                            <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                                <circle cx="170" cy="170" r="160" stroke="#cyan" />
                                <circle cx="170" cy="170" r="135" stroke="#d3dae6" />
                                <circle cx="170" cy="170" r="110" stroke="cyan" />
                                <circle cx="170" cy="170" r="85" stroke="#d3dae6" />
                            </svg>
                        </div>
                        <div className="titles-container">
                            <span className='lucas-name-title'>
                                <h1 className="color-white">
                                    <span>Lucas Nogueira</span>
                                </h1>
                            </span>
                            <div className="pl1">
                                <span className="degree-title">
                                    <h3 className="pl1">
                                        <span className="computer-title">Computer</span>
                                        &nbsp;
                                        <span className="engineering-title">Engineering</span>
                                    </h3>
                                </span>
                                <span className="school-title">
                                    <h5 className="pl3">University Of Waterloo</h5>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="justify-center appear-button">
                            <a rel="noopener noreferrer" target="_blank" href={RESUME} className="home-main-button">
                                <i><FaFileAlt /></i>&nbsp;
                                Resume
                        </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/lnogueir" className="home-main-button">
                                <i><FaGithub /></i>&nbsp;
                                Github
                        </a>
                            <a rel="noopener noreferrer" target="_blank" href="mailto: lnogueir@uwaterloo.ca" className="home-main-button">
                                <i><FaEnvelope /></i>&nbsp;
                                Email
                        </a>
                        </div>
                        <div className="rotating-home-text">
                            <span>{"//"}&nbsp;</span>
                            <span
                                className="txt-rotate"
                                data-period="1400"
                                data-rotate={`
                                [
                                    "Software Developer 💻", 
                                    "Ping Ponger 🏓", 
                                    "Guitarrist 🎸",
                                    "Runner 🥇", 
                                    "Bookworm 📖"
                                ]
                                `}
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;