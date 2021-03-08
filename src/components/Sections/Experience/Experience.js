import React from 'react'
import ExperienceCard from './ExperienceCard'
import THEWEATHERNETWORK_LOGO from '../../../assets/images/the-weather-network-logo.svg'
import AGF_LOGO from '../../../assets/images/agf-logo.svg'
import UW_LOGO from '../../../assets/images/uw_logo.jpg'
import JAVA from '../../../assets/images/java.svg'
import JAVASCRIPT from '../../../assets/images/javascript.svg'
import HTML_CSS from '../../../assets/images/html_css.svg'
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
import GIT from '../../../assets/images/git.svg'


function Experience(props) {
    const PELMOREX_TECH = [
        { src: GO, title: 'Golang' },
        { src: KUBERNETES, title: 'Kubernetes' },
        { src: MONGODB, title: 'MongoDB' },
        { src: DOCKER, title: 'Docker' },
        { src: JENKINS, title: 'Jenkins'},
        { src: TYPESCRIPT, title: 'Typescript' },
        { src: AWS, title: 'AWS' },
        { src: GIT, title: 'Git' },
    ]
    const PELMOREX_URLS = {
        twitter: 'https://twitter.com/weathernetwork',
        apple: 'https://apps.apple.com/ca/app/the-weather-network/id473299958',
        instagram: 'https://www.instagram.com/weathernetwork',
        facebook: 'https://www.facebook.com/theweathernetworkCAN',
    }

    const AGF_TECH = [
        { src: JAVA, title: 'Java' },
        { src: JAVASCRIPT, title: 'JavaScript' },
        { src: HTML_CSS, title: 'HTML/CSS' },
        { src: REACT, title: 'React' },
        { src: SPRING, title: 'Java Spring' },
        { src: AWS, title: 'AWS' },
        { src: GIT, title: 'Git' },
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
                        company="TWN"
                        company_urls={PELMOREX_URLS}
                        prefered_url="https://www.theweathernetwork.com/"
                        title="Software Developer in Test, Infrastructure"
                        location="Oakville, Canada"
                        start_date="May, 2020"
                        end_date="August, 2020"
                        tech={PELMOREX_TECH}
                    >
                        The Weather Network is the <strong>#1</strong> weather company in Canada with <strong>4.2M</strong> unique downloads on apps and <strong>113M</strong> average monthly page views across all platforms.
                        <br/> <br/>
                        During my 4 month internship there, I was part of an <strong>agile</strong> team responsible for the forecast engine of the company's services. <br/>
                        With the <strong>Go</strong> programming language, my team and I worked on deprecating <strong>monolithic C++</strong> legacy systems used to process <a rel="noopener noreferrer" target="_blank" className="link" href="https://en.wikipedia.org/wiki/Digital_elevation_model">DEM</a> and <a rel="noopener noreferrer" target="_blank" className="link" href="https://en.wikipedia.org/wiki/GRIB">GRIB</a> files originated from <a className="link" rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Geographic_information_system">GIS</a> teams.
                        <br/>
                        Following <strong>microservices</strong> architecture, I developed <strong>loosely coupled</strong> packages and modules to <strong>concurrently</strong> process those weather files and serve the frontend applications efficiently.
                        <br/><br/>
                        Using <strong>AWS</strong>, I created <strong>Lambda</strong> function triggers to handle files arriving in <strong>S3 buckets</strong> and readers for <strong>SQS</strong> queue messages that would feed the <a className="link" rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/European_Centre_for_Medium-Range_Weather_Forecasts">ECMWF</a> and <a className="link" rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Global_Forecast_System">GFS</a> processor services. 
                        I engineered database driver libraries to provide a common interface for both <strong>relational and non-relation</strong> database connections and performed <strong>geospatial queries in MongoDB</strong> for the best performance available when querying any type of weather data for any location of the world.
                        <br/><br/>
                        Besides software development, much of my work was focused on <strong>infrastructure automation</strong>. I used <strong>Jenkins, Docker, and Kubernetes</strong> to <strong>standardize the CI/CD</strong> approach on the company for the <strong>Go and Typescript</strong> platforms by engineering a configurable centralized <strong>pipeline</strong> and applied <strong>Blue-Green</strong> deployment strategy to suppress downtime. <br/>
                        I was also involved in migrating an existing on-premise JFrog Artifactory to the cloud which <strong>facilitated management and reduced cost</strong> of artifacts such as <strong>npm libraries</strong> and snapshot <strong>docker images</strong>.
                        <br/>
                    </ExperienceCard>
                </div>
                <div>
                    <ExperienceCard
                        logo_src={AGF_LOGO}
                        company="AGF"
                        company_urls={AGF_URLS}
                        prefered_url="https://www.agf.com"
                        title="Junior Web Developer"
                        location="Toronto, Canada"
                        start_date="September, 2019"
                        end_date="December, 2019"
                        tech={AGF_TECH}
                    >
                        With its main headquarter located in downtown Toronto, AGF is a company that provides software to facilitate the management of investments and assets for its clients. As a member of the IT Development Services, I played a key role in several projects under AGF.com's repository and I was able to experience the whole <b><strong>development life cycle</strong></b> of the project; from the prototyping phase to production deployment.
                        <br /><br />
                        Much of my work was done on the inbox page of the application. I worked on improving the previous prototype of the webpage by making it responsive, adding animations with <strong>Javascript and jQuery</strong>, and implementing it in the codebase using <strong>JSPs</strong> and dynamically generated data fetched from <strong>Java</strong> backend and <strong>SQL databases</strong>.
                        <br/>
                        As the project progressed, I had to create <strong>backend endpoints</strong> to handle message submission requests and perform communication between the web page and database. I implemented a <b><strong>file scanning service</strong></b> to ensure the security of BLOB uploads by forwarding them to a <strong>container</strong> running an <a rel="noopener noreferrer" target="_blank" className="link" href="https://en.wikipedia.org/wiki/Internet_Content_Adaptation_Protocol#:~:text=The%20Internet%20Content%20Adaptation%20Protocol,which%20new%20features%20are%20implemented."><b><strong>ICAP server</strong></b></a> with McAffe antivirus software. Although HTTP-like, the mentioned protocol lacks reliable documentation and <a rel="noopener noreferrer" target="_blank" className="link" href="https://github.com/Baekalfen/ICAP-avscan">this repo</a> was essential to my success completing this task.
                        <br/><br/>
                        Besides the mentioned project, another essential contribution I made was to migrate off a complex table of investments, currencies, government ratios, and dates from <b><strong>JSPs to ReactJs</strong></b> components. To perform that, I had to update endpoints which used to return server built <strong>HTML</strong> to return <strong>JSON</strong> data that would be handled in the react application.
                        <br /><br />
                        Other than the above, on a daily basis, I worked closely with developers and designers to create beautiful, responsive, and dynamic components on other parts of the website!
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
                        location="Waterloo, Canada"
                        start_date="January, 2019"
                        end_date="April, 2019"
                        tech={UW_TECH}
                    >
                        The University Of Waterloo is ranked 20th in the world in Computer Science, according to <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.usnews.com/education/best-global-universities/computer-science?page=2">U.S. News</a>, and its Software Engineering program is the most competitive undergraduate program in Canada. <br /> <br />
                        As a teaching assistant at UW's Computer Science department, I taught and coordinated <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.student.cs.uwaterloo.ca/~cs138/">CS138</a>, a 1st-year level Software Engineering course, and guaranteed its success with over <b><strong>90%</strong></b> of class approval at the end. <br /><br />
                        In order to promote the course's success, I had to perform both management and coding tasks.
                        <br /> <br/>
                        I Conducted office hours and review sessions to teach students (who happened to be my age) the core computer science topics of <strong>Data Structures and Object-Oriented Programming</strong> in <b><strong>C/C++</strong></b> and essential concepts such as <strong>pointers and trees</strong>. <br/>
                        In order to automate assignment marking, I designed test cases and developed <b><strong>Bash/Python</strong></b> scripts that would compile student's source code, run it against the test case and check for valid solutions by performing a diff check between the canonical solution and the student submission.
                        <br/> <br/>
                        Besides that, I maintained the course website, improved its layout and styling by introducing Bootstrap, and created Excel/CSV scripts to automatically update students' marks there.
                    </ExperienceCard>
                </div>
            </div>
        </section>
    )
}


export default Experience;