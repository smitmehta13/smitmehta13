import React from 'react'
import TechBar from './TechBar'
import PYTHON from '../../../../assets/images/python.svg'
import JAVASCRIPT from '../../../../assets/images/javascript.svg'
import CPLUS from '../../../../assets/images/c++.svg'
import HTML from '../../../../assets/images/html.svg'
import CSS from '../../../../assets/images/css.svg'
import JAVA from '../../../../assets/images/java.svg'
import GO from '../../../../assets/images/go-logo.png'
import AWS from '../../../../assets/images/aws-logo.svg'
import REACT from '../../../../assets/images/react.svg'
import MONGODB from '../../../../assets/images/mongodb.svg'
import NODE from '../../../../assets/images/node.svg'
import DOCKER from '../../../../assets/images/docker.svg'
import REDIS from '../../../../assets/images/redis.svg'
import WEBRTC from '../../../../assets/images/webrtc.svg'
import $ from 'jquery'


function Skills() {
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


        //initialize language graph without scroll trigger
        $($('.graphs-wrap')[0]).children().each(handleGraphClick)

        //load graphs onscroll
        document.addEventListener('aos:in', handleScrollInGraph)
        document.addEventListener('aos:out', handleScrollOutGraph)

        return () => {
            document.removeEventListener('aos:in', handleScrollInGraph)
            document.removeEventListener('aos:out', handleScrollOutGraph)
            timeouts.forEach(timeout => clearTimeout(timeout))
        }
    }, [])

    const LANGUAGES = [
        { src: JAVASCRIPT, title: 'JavaScript', level: 95, color: '#757575' },
        { src: JAVA, title: 'Java', level: 73, color: '#ffb74d' },
        { src: CSS, title: 'CSS', level: 86, color: '#039be5' },
        { src: HTML, title: 'HTML', level: 89, color: '#ef5350' },
        { src: GO, title: 'Golang', level: 93, color: '#5DC9E2', logoClass: 'skill-golang-responsive' },
        { src: PYTHON, title: 'Python', level: 91, color: '#ffeb3b' },
        { src: CPLUS, title: 'C++', level: 82, color: '#5c6bc0' },
    ]

    const TOOLS = [
        { src: REACT, title: 'React', level: 90, color: '#263238' },
        { src: WEBRTC, title: 'WebRTC', level: 91, color: '#ffffff' },
        { src: DOCKER, title: 'Docker', level: 81, color: '#0db7ed' },
        { src: NODE, title: 'Node', level: 87, color: '#4caf50' },
        { src: AWS, title: 'AWS', level: 82, color: '#FF9900' },
        { src: REDIS, title: 'Redis', level: 79, color: '#D82C20' },
        { src: MONGODB, title: 'MongoDB', level: 85, color: '#66bb6a' },
    ]

    return (
        <section className="skills-section animated mt10 mb40">
            <h1 className="section-title"><span role="img" aria-label="emoji">💻</span> Hacker Stats <span role="img" aria-label="emoji">👨‍💻</span></h1>
            <div>
                <div className="mt30">
                    <div align="center" style={{ height: '40vh' }} className="graphs-wrap justify-around flex-wrap">
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
                <div className="mt30">
                    <div align="center" style={{ height: '40vh' }} className="graphs-wrap justify-around flex-wrap">
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
            </div>
        </section>
    )
}

export default Skills;
