import React from 'react'
import TechBar from './TechBar'
import PYTHON from '../../../assets/images/python.svg'
import JAVASCRIPT from '../../../assets/images/javascript.svg'
import CPLUS from '../../../assets/images/c++.svg'
import GOLANG from '../../../assets/images/golang.svg'
import HTML from '../../../assets/images/html.svg'
import CSS from '../../../assets/images/css.svg'
import JAVA from '../../../assets/images/java.svg'
import MYSQL from '../../../assets/images/mysql.svg'
import REACT from '../../../assets/images/react.svg'
import JQUERY from '../../../assets/images/jquery.svg'
import FLASK from '../../../assets/images/flask.svg'
import NODE from '../../../assets/images/node.svg'
import GIT from '../../../assets/images/git.svg'
import GOOGLE from '../../../assets/images/google.svg'
import STACK_OVERFLOW from '../../../assets/images/stack_overflow.svg'
import LOL1 from '../../../assets/images/lol1.svg'
import LOL2 from '../../../assets/images/lol2.svg'
import LOL3 from '../../../assets/images/lol3.svg'
import CHUCKLE_LAUGH from '../../../assets/audios/chuckle_laugh.mp3'
import $ from 'jquery'


function Skills() {
    Skills.is_funny = false
    Skills.is_laughing = false

    const laugh = () => {
        let goofy_laugh = new Audio(CHUCKLE_LAUGH)
        goofy_laugh.play()
    }

    const blast_laugh = () => {
        if (!Skills.is_laughing) {
            $('#lol2 > img').attr('src', LOL3)
            $('#lol2').removeClass('bounce')
            $('#lol2').addClass('lol2-animation')
            Skills.is_laughing = true
        } else {
            $('#lol2 > img').attr('src', LOL2)
            $('#lol2').removeClass('lol2-animation')
            $('#lol2').addClass('bounce')
            Skills.is_laughing = false
        }

    }

    React.useEffect(() => {
        var timeouts = [];

        var handleGraphClick = (i, graph) => {
            let timeout = setTimeout(() => {
                $(graph).find('.animate-tech-graph').click()
                const timeoutIndex = timeouts.indexOf(timeout)
                if (timeoutIndex > -1) {
                    timeouts.splice(timeoutIndex, 1)
                }
            }, i * 230)
            timeouts.push(timeout)
        }

        var handleScrollOutGraph = ({ detail }) => {
            let graphs_wrap = $(detail).find('.graphs-wrap').children()
            graphs_wrap.each((i, graph) => $(graph).find('.techbar-in').css('height', 0))
        }

        var handleScrollInGraph = ({ detail }) => {
            let graphs_wrap = $(detail).find('.graphs-wrap').children()
            graphs_wrap.each((i, graph) => $(graph).find('.techbar-in').css('height', 0))
            graphs_wrap.each(handleGraphClick)
        }

        var handleFunnySkill = () => {
            if ($(window).scrollTop() >= 700 && !Skills.is_funny) {
                timeouts.push(setTimeout(() => {
                    $('#lol1').removeClass('hidden')
                    $('#lol1').removeClass('fadeOutRight')
                    $('#lol1').addClass('fadeInRight')
                    timeouts.push(setTimeout(() => {
                        $('#lol1').removeClass('fadeInRight')
                        $('#lol1').css('animation-iteration-count', 'infinite')
                        $('#lol1').css('animation-duration', '2.5s')
                    }, 1000))
                    timeouts.push(setTimeout(() => {
                        $('#lol2').removeClass('hidden')
                        $('#lol2').removeClass('fadeOutLeft')
                        $('#lol2').addClass('fadeInLeft')
                        timeouts.push(setTimeout(() => {
                            $('#lol2').removeClass('fadeInLeft')
                            $('#lol2').addClass(Skills.is_laughing ? 'lol2-animation' : 'bounce')
                            $('#lol2').css('animation-iteration-count', 'infinite')
                            $('#lol2').css('animation-duration', '2s')
                        }, 1450))
                    }, 450))
                    Skills.is_funny = true
                }, 1000))
            } else if ($(window).scrollTop() < 700 && Skills.is_funny) {
                $('#lol1').css('animation-duration', '1s')
                $('#lol1').css('animation-iteration-count', '1')
                $('#lol1').removeClass('fadeOutRight')
                $('#lol1').addClass('fadeOutRight')
                $('#lol2').css('animation-duration', '1s')
                $('#lol2').css('animation-iteration-count', '1')
                $('#lol2').removeClass(Skills.is_laughing ? 'lol2-animation' : 'bounce')
                $('#lol2').addClass('fadeOutLeft')
                Skills.is_funny = false
            }
        }

        $(window).scroll(handleFunnySkill)

        //initialize language graph without scroll trigger
        $($('.graphs-wrap')[0]).children().each(handleGraphClick)

        //load graphs onscroll
        document.addEventListener('aos:in', handleScrollInGraph)
        document.addEventListener('aos:out', handleScrollOutGraph)

        return () => {
            $(window).off('scroll', handleFunnySkill)
            document.removeEventListener('aos:in', handleScrollInGraph)
            document.removeEventListener('aos:out', handleScrollOutGraph)
            timeouts.forEach(timeout => clearTimeout(timeout))
        }
    }, [])

    const LANGUAGES = [
        { type: 'normal', src: JAVASCRIPT, title: 'JavaScript', level: 95, color: '#757575' },
        { type: 'normal', src: JAVA, title: 'Java', level: 75, color: '#ffb74d' },
        { type: 'normal', src: CSS, title: 'CSS', level: 90, color: '#039be5' },
        { type: 'normal', src: HTML, title: 'HTML', level: 90, color: '#ef5350' },
        { type: 'normal', src: PYTHON, title: 'Python', level: 93, color: '#ffeb3b' },
        { type: 'normal', src: CPLUS, title: 'C++', level: 82, color: '#5c6bc0' },
    ]

    const TOOLS = [
        { type: 'normal', src: REACT, title: 'React', level: 90, color: '#263238' },
        { type: 'normal', src: FLASK, title: 'Flask', level: 85, color: '#ffffff' },
        { type: 'normal', src: MYSQL, title: 'MySQL', level: 65, color: '#ff6e40' },
        { type: 'normal', src: NODE, title: 'Node', level: 85, color: '#4caf50' },
        { type: 'normal', src: JQUERY, title: 'jQuery', level: 80, color: '#0d47a1' },
        { type: 'normal', src: GIT, title: 'Git', level: 77, color: '#333' },
    ]

    const SPECIAL = [{ type: 'special', src1: GOOGLE, src2: STACK_OVERFLOW, level: 100, color: '#66bb6a' }]

    return (
        <section className="skills-section animated">
            <h1 data-aos="fade-down" className="section-title">Skill Stats</h1>
            <div className="sections-wrap skills-wrap">
                <div data-aos="fade-up" data-aos-mirror="false">
                    <div className="mt60">
                        <h2 className="section-subtitle">Languages</h2>
                        <div align="center" style={{ height: '50vh' }} className="graphs-wrap mt40 justify-around flex-wrap">
                            {LANGUAGES.map((skill, i) => {
                                return (
                                    <TechBar
                                        key={i}
                                        index={i}
                                        load_delay={i * 230}
                                        skill={skill}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-mirror="false" className="mt20">
                    <h2 className="section-subtitle">Tools</h2>
                    <div align="center" style={{ height: '50vh' }} className="graphs-wrap mt40 justify-around flex-wrap">
                        {TOOLS.map((skill, i) => {
                            i = LANGUAGES.length + i
                            return (
                                <TechBar
                                    key={i}
                                    index={i}
                                    skill={skill}
                                />
                            )
                        })}
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-mirror="false" className="mt20">
                    <h2 className="section-subtitle">And most importantly...</h2>
                    <div align="center" style={{ height: '85vh' }} className="graphs-wrap mt40 justify-around flex-wrap">
                        {SPECIAL.map((skill, i) => {
                            i = TOOLS.length + LANGUAGES.length + i
                            return (
                                <TechBar
                                    key={i}
                                    index={i}
                                    skill={skill}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div id="lol1" className="hidden animated swing">
                <img onClick={laugh} title="Click me!" alt="LOL" src={LOL1} />
            </div>
            <div id="lol2" className="hidden animated">
                <img onClick={blast_laugh} title="Click me!" alt="LOL" src={LOL2} />
            </div>
        </section>
    )
}

export default Skills;
