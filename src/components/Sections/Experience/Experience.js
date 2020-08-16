import React from 'react'
import ExperienceCard from './ExperienceCard'
import THEWEATHERNETWORK_LOGO from '../../../assets/images/the-weather-network-logo.svg'
import AGF_LOGO from '../../../assets/images/agf-logo.svg'
import UW_LOGO from '../../../assets/images/uw_logo.jpg'
import JAVA from '../../../assets/images/java.svg'
import JAVASCRIPT from '../../../assets/images/javascript.svg'
import ORACLE from '../../../assets/images/oracle.svg'
import HTML from '../../../assets/images/html.svg'
import CSS from '../../../assets/images/css.svg'
import AWS from '../../../assets/images/aws.svg'
import CPLUS from '../../../assets/images/c++.svg'
import PYTHON from '../../../assets/images/python.svg'
import C from '../../../assets/images/C.svg'
import SPRING from '../../../assets/images/spring.svg'
import JQUERY from '../../../assets/images/jquery.svg'
import REACT from '../../../assets/images/react.svg'
import TYPESCRIPT from '../../../assets/images/typescript.svg'
import BOOTSTRAP from '../../../assets/images/bootstrap.svg'
import MONGODB from '../../../assets/images/mongodb.svg'
import DOCKER from '../../../assets/images/docker.svg'
import JENKINS from '../../../assets/images/jenkins.png'
import KUBERNETES from '../../../assets/images/kubernetes.svg'
import GO from '../../../assets/images/golang.svg'


function Experience(props) {
    const PELMOREX_TECH = [
        { src: GO, title: 'Golang' },
        { src: KUBERNETES, title: 'Kubernetes' },
        { src: MONGODB, title: 'MongoDB' },
        { src: DOCKER, title: 'Docker' },
        { src: JENKINS, title: 'Jenkins'},
        { src: TYPESCRIPT, title: 'Typescript' },
        { src: AWS, title: 'AWS' }
    ]
    const PELMOREX_URLS = {
        twitter: 'https://twitter.com/weathernetwork',
        apple: 'https://apps.apple.com/ca/app/the-weather-network/id473299958',
        instagram: 'https://www.instagram.com/weathernetwork',
        facebook: 'https://www.facebook.com/theweathernetworkCAN',
    }

    const AGF_TECH = [
        { src: JAVA, title: 'Java' },
        { src: SPRING, title: 'Java Spring' },
        { src: JAVASCRIPT, title: 'JavaScript' },
        { src: HTML, title: 'HTML' },
        { src: CSS, title: 'CSS' },
        { src: REACT, title: 'React' },
        { src: ORACLE, title: 'Oracle' },
        { src: AWS, title: 'AWS' },
        { src: JQUERY, title: 'jQuery' },
    ]
    const AGF_URLS = {
        linkedin: "https://www.linkedin.com/company/agf-managements",
        twitter: "https://twitter.com/agf",
        facebook: "https://www.facebook.com/AGFInvestments/"
    }

    const UW_TECH = [
        { src: C, title: 'C' },
        { src: CPLUS, title: 'C++' },
        { src: PYTHON, title: 'Python' },
        { src: HTML, title: 'HTML' },
        { src: CSS, title: 'CSS' },
        { src: BOOTSTRAP, title: 'Bootstrap' }
    ]
    const UW_URLS = {
        linkedin: "https://www.linkedin.com/school/uwaterloo/",
        instagram: "https://www.instagram.com/uofwaterloo",
        facebook: "https://www.facebook.com/university.waterloo/"
    }
    return (
        <section className="experience-section animated">
            <h1 data-aos="fade-down" className="section-title">Experience</h1>
            <div align="center" className="experiences-wrap sections-wrap">
                <div>
                <ExperienceCard
                        logo_src={THEWEATHERNETWORK_LOGO}
                        company="WeatherNetwork"
                        company_urls={PELMOREX_URLS}
                        prefered_url="https://www.theweathernetwork.com/"
                        title="Software Developer in Test, Infrastructure"
                        location="Oakville, Ontario"
                        start_date="May, 2020"
                        end_date="August, 2020"
                        tech={PELMOREX_TECH}
                    >
                        With its main headquarter located in downtown Toronto, AGF is a company that provides software to facilitate the management of investments and assets for its clients.<br /> <br />
                        As a member of the IT Development Services, I played a key role on several projects under AGF.com's repository.
                        My most significant contributions were to the NIGO project, a project which implemented a messaging system between staff, dealers, investors and clients. I was able to experience the whole <b>development life cicle</b> of the project; from prototyping phase to production deployment.<br /><br />
                        Much of my work was done on an inbox page, which was the main component under development.
                        I was assigned a crucial task which came with big responsabilities — implement backend and frontend interface to handle the "reply message" routine. <br />
                        To complete such task I:
                        <ul>
                            <li><b><strong>Created endpoints</strong></b> to handle message requests and perform communication between the web page and database.</li>
                            <li>
                                Implemented a <b>file scanning service</b> to ensure the security of BLOB uploads.<br />
                                <span className="pl15" style={{ opacity: .875 }}>
                                    <b>Note:</b> this was the <b>most challenging</b> task because as the user uploaded files, I had to transfer them to a virtual machine running an <b>ICAP server</b> with McAffe antivirus software, however, since ICAP protocol isn't as commonly used as HTTP, lack of documentation made it quite a challenge.
                                </span>
                            </li>
                            <li>Developed frontend interface prototype which had to be approved by the business and user experience team. Due to its success, I also implemented it into the project.</li>
                        </ul>
                        Besides the NIGO project, another essential project contribution I made was to migrate off a complex table of investments, currencies, government ratios and dates from <b>JSPs to ReactJs</b> components. To perform that, I had to update endpoints which used to return server built HTML to return <b>JSON</b> data that would be handled in the react application.
                        <br /><br />
                        Other than the above, daily basis I worked closely with developers and designers to create beautiful, responsive and dynamic web pages, utilized database tools to create/update <b>SQL stored procedures</b> and to vizualize data, debugged and fixed problems!
                        <br />
                    </ExperienceCard>
                </div>
                <div>
                    <ExperienceCard
                        logo_src={AGF_LOGO}
                        company="AGFManagement"
                        company_urls={AGF_URLS}
                        prefered_url="https://www.agf.com"
                        title="Junior Web Developer"
                        location="Toronto, Ontario"
                        start_date="September, 2019"
                        end_date="December, 2019"
                        tech={AGF_TECH}
                    >
                        With its main headquarter located in downtown Toronto, AGF is a company that provides software to facilitate the management of investments and assets for its clients.<br /> <br />
                        As a member of the IT Development Services, I played a key role on several projects under AGF.com's repository.
                        My most significant contributions were to the NIGO project, a project which implemented a messaging system between staff, dealers, investors and clients. I was able to experience the whole <b><strong>development life cicle</strong></b> of the project; from prototyping phase to production deployment.<br /><br />
                        Much of my work was done on an inbox page, which was the main component under development.
                        I was assigned a crucial task which came with big responsabilities — implement backend and frontend interface to handle the "reply message" routine. <br />
                        To complete such task I:
                        <ul>
                            <li>Created endpoints to handle replied messages and perform communication between the web page and database.</li>
                            <li>
                                Implemented a <b><strong>file scanning service</strong></b> to ensure the security of BLOB uploads.<br />
                                <span className="pl15" style={{ opacity: .875 }}>
                                    <b><strong>Note:</strong></b> this was the most challenging task because as the user uploaded files, I had to transfer them to a virtual machine running an <b><strong>ICAP server</strong></b> with McAffe antivirus software, however, since ICAP protocol isn't as commonly used as HTTP, lack of documentation made it quite a challenge.
                                </span>
                            </li>
                            <li>Developed frontend interface prototype which had to be approved by the business and user experience team. Due to its success, I also implemented it into the project.</li>
                        </ul>
                        Besides the NIGO project, another essential project contribution I made was to migrate off a complex table of investments, currencies, government ratios and dates from <b><strong>JSPs to ReactJs</strong></b> components. To perform that, I had to update endpoints which used to return server built HTML to return <b>JSON</b> data that would be handled in the react application.
                        <br /><br />
                        Other than the above, daily basis I worked closely with developers and designers to create beautiful, responsive and dynamic web pages, utilized database tools to create/update <b><strong>SQL stored procedures</strong></b> and to vizualize data, debugged and fixed problems!
                        <br />
                    </ExperienceCard>
                </div>
                <div>
                    <ExperienceCard
                        logo_src={UW_LOGO}
                        company="UWaterloo"
                        company_urls={UW_URLS}
                        prefered_url="https://uwaterloo.ca/"
                        title="CS138 - Teaching Assistant"
                        location="Waterloo, Ontario"
                        start_date="January, 2019"
                        end_date="April, 2019"
                        tech={UW_TECH}
                    >
                        The University Of Waterloo is ranked 20th in the world in Computer Science, according to <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.usnews.com/education/best-global-universities/computer-science?page=2">U.S. News</a>, and its Software Engineering program is the most competitive undergraduate program in Canada. <br /> <br />
                        As a teaching assistant at UW's Computer Science department, I taught and coordinated <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.student.cs.uwaterloo.ca/~cs138/">CS138</a>, a 1st-year level Software Engineering course, and guaranteed its success with over <b><strong>90%</strong></b> of class approval at the end. <br /><br />
                        In order to promote the course's success, I had to perform both management and coding tasks.<br />
                        In terms of coding I:
                        <ul>
                            <li>Conducted office hours and review sessions to teach students (who happened to be my age) topics such as Data Structures and Object-Oriented Programming in the <b><strong>C/C++</strong></b> dialect.</li>
                            <li>Designed test cases and <b><strong>Bash/Python</strong></b> scripts which served the purpose of automatically generating assignments' grades. It functioned by compiling a solution and a student code then running it against a test case and after, outputting the results of the program to a text file. After that, it performs a "diff" command between the two different output files, this way determining whether the student passed such test case or not. Do that for every test case and every student and <i>voilà</i>; now you have graded the assignment of all students.</li>
                            <li>Made Excel/CSV scripts to automate adding/updating students' marks on the website.</li>
                            <li>Developed new features to the course website, which was used to post assignments and general information about the course. </li>
                        </ul>
                        Whereas in terms of management I:
                        <ul>
                            <li>Assigned the contents and scheduled the rooms in which TAs would teach and conduct tutorials, respectively.</li>
                            <li>Coordinated marking scheme for exams and marked them alongside the professor and TAs.</li>
                            <li>Attended meetings with the Professors and TAs with weekly reports of course updates.</li>
                            <li>Managed as an instructor in online platforms such as a Piazza.</li>
                        </ul>
                    </ExperienceCard>
                </div>
            </div>
        </section>
    )
}


export default Experience;