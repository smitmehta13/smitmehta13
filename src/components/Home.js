import React from 'react'
import { FaFileAlt, FaGithub, FaEnvelope } from 'react-icons/fa'
import RESUME from '../assets/docs/resume.pdf'

class Home extends React.Component {

    componentDidMount = () => {
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
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 300 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        window.onload = function () {
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
        };

    }


    render() {
        return (
            <React.Fragment>
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
                                <span>Lucas</span>
                                &nbsp;
                                <span
                                    className="txt-rotate"
                                    data-period="1000"
                                    data-rotate='["Nogueira", "Serafim", "Araujo"]'
                                >
                                </span>
                            </h1>
                        </span>
                        <div className="pl1">
                            <span className="degree-title">
                                <h3 className="pl1">
                                    <span className="computer-title">Computer</span>
                                    &nbsp;
                            <span className="engineering-title">Engineering</span></h3>
                            </span>
                            <span className="school-title">
                                <h5 className="pl3">University Of Waterloo</h5>
                            </span>
                        </div>
                    </div>
                </div>
                <div style={{ animationDelay: '3s' }} className="mt10 justify-center appear-button">
                    <a href={RESUME} className="home-main-button">
                        <i><FaFileAlt /></i>&nbsp;
                        Resume
                    </a>
                    <a href="https://github.com/lnogueir" className="home-main-button">
                        <i><FaGithub /></i>&nbsp;
                        Github
                    </a>
                    <a href="mailto: lnogueir@uwaterloo.ca" className="home-main-button">
                        <i><FaEnvelope /></i>&nbsp;
                        Email
                    </a>
                </div>
            </React.Fragment>

        )
    }
}

export default Home;