import React from 'react'
import TechBar from './TechBar'
import PYTHON from '../../../../assets/images/python.svg'
import JAVA from '../../../../assets/images/java.svg'
import SPRING_BOOT from '../../../../assets/images/spring-boot-logo.png'
import C from '../../../../assets/images/C.svg'
import JAVASCRIPT from '../../../../assets/images/javascript.svg'
import HTMLCSS from '../../../../assets/images/html_css.svg'
import SPRING from '../../../../assets/images/spring.svg'
import AWS from '../../../../assets/images/aws-logo.svg'
import REACT from '../../../../assets/images/react.svg'
import MONGODB from '../../../../assets/images/mongodb.svg'
import NODE from '../../../../assets/images/node.svg'
import DOCKER from '../../../../assets/images/docker.svg'
import REDIS from '../../../../assets/images/redis.svg'
import WEBRTC from '../../../../assets/images/webrtc.svg'
import SQL from '../../../../assets/images/sql-logo.png'
import MYSQL from '../../../../assets/images/mysql.svg'
import HIBERNATE from '../../../../assets/images/hibernate-logo.svg'
import ANGULARJS from '../../../../assets/images/angular-logo.png'
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
        { src: JAVA, title: 'JAVA', level: 95, color: '#FA5F55' },
        { src: SPRING_BOOT, title: 'Spring Boot', level: 92, color: '#FFFFFF' },
        { src: HTMLCSS, title: 'HTML & Css', level: 88, color: '#ef5350' },
        { src: JAVASCRIPT, title: 'JavaScript', level: 84, color: '#757575' },
        { src: REACT, title: 'React', level: 86, color: '#61DAFB' },  // Updated to match React.js experience
        { src: ANGULARJS, title: 'AngularJS', level: 85, color: '#DD0031' },  // Added AngularJS from your resume
        { src: SQL, title: 'SQL', level: 90, color: '#F7DF1E' }  // Added SQL based on your database experience
    ]
    
    const TOOLS = [
        { src: DOCKER, title: 'Docker', level: 90, color: '#0db7ed' },
        { src: NODE, title: 'Node.js', level: 84, color: '#339933' },  // Updated to Node.js for consistency
        { src: AWS, title: 'AWS', level: 80, color: '#FF9900' },
        { src: MONGODB, title: 'MongoDB', level: 82, color: '#66bb6a' },
        { src: SPRING, title: 'Spring Framework', level: 90, color: '#6DB33F' },  // Added Spring Framework
        { src: HIBERNATE, title: 'Hibernate', level: 85, color: '#2C6B7A' },  // Added Hibernate from your resume
        { src: MYSQL, title: 'MySQL', level: 88, color: '#4479A1' }  // Added MySQL based on your experience
    ]
    

    return (
        <section className="skills-section animated     mb30">
            <h1 className="me-section-subtitle"><span role="img" aria-label="emoji">💻</span> <span style={{opacity: 0.5}}>Hacker Stats</span> <span role="img" aria-label="emoji">👨‍💻</span></h1>
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
