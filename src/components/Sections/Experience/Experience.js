import React,{ useEffect } from 'react';
import ExperienceCard from './ExperienceCard'
import CANADIAN_TIRE_LOGO from '../../../assets/images/CanadianTire-logo.png'
import TRAVELERS_LOGO from '../../../assets/images/Travelers-logo.png'
import VUBIQUITY_LOGO from '../../../assets/images/vu-favicon.png'
import JAVA from '../../../assets/images/java.svg'
import HTML_CSS from '../../../assets/images/html_css.svg'
import AWS from '../../../assets/images/aws.svg'
import ANGULARJS from '../../../assets/images/angular-logo.png'
import HIBERNATE from '../../../assets/images/hibernate-logo.svg'
import MYSQL from '../../../assets/images/mysql.svg'
import SPRING from '../../../assets/images/spring.svg'
import REACT from '../../../assets/images/react.svg'
import TOMCAT from '../../../assets/images/tomcat-logo.svg'
import MONGODB from '../../../assets/images/mongodb.svg'
import DOCKER from '../../../assets/images/docker.svg'
import JENKINS from '../../../assets/images/jenkins.png'
import KUBERNETES from '../../../assets/images/kubernetes.svg'
import JSP from '../../../assets/images/jsp-logo.png'
import SPRING_BOOT from '../../../assets/images/spring-boot-logo.png'

function Experience(props) {
    useEffect(() => {
        // Google Analytics code
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-9WQG3VLSRH';
        document.head.appendChild(script1);
    
        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9WQG3VLSRH');
        `;
        document.head.appendChild(script2);
      }, []);

    const TRAVELERS_TECH = [
        { src: JAVA, title: 'Java' },
        { src: SPRING_BOOT, title: 'Spring Boot' },
        { src: AWS, title: 'AWS' },
        { src: MONGODB, title: 'MongoDB' },
        { src: REACT, title: 'React' },
        { src: JENKINS, title: 'Jenkins' },
        { src: KUBERNETES, title: 'Kubernetes' }
    ];
    
    const TRAVELERS_URLS = {
        linkedin: 'https://www.linkedin.com/company/travelers/',
        twitter: 'https://twitter.com/Travelers',
        apple: 'https://apps.apple.com/us/developer/travelers/id376091402',
        youtube: 'https://www.youtube.com/@Travelers',
        instagram: 'https://www.instagram.com/travelersinsurance'
    };
    
    const CANADIAN_TIRE_TECH = [
        { src: JAVA, title: 'Java' },
        { src: SPRING, title: 'Spring' },
        { src: AWS, title: 'AWS' },
        { src: ANGULARJS, title: 'AngularJS' },
        { src: DOCKER, title: 'Docker' },
        { src: HIBERNATE, title: 'Hibernate' }
    ];
    
    const CANADIAN_TIRE_URLS = {
        linkedin: 'https://www.linkedin.com/company/canadian-tire/',
        youtube: 'https://www.youtube.com/user/canadiantirecorp',
        instagram: 'https://www.instagram.com/canadiantire/'
    };
    
    const VUBIQUITY_TECH = [
        { src: JAVA, title: 'Java' },
        { src: SPRING, title: 'Spring' },
        { src: JSP, title: 'JSP' },
        { src: HTML_CSS, title: 'Html and css' },
        { src: MYSQL, title: 'MySQL' },
        { src: TOMCAT, title: 'Tomcat' }
    ];
    
    const VUBIQUITY_URLS = {
        twitter: 'https://twitter.com/Vubiquity',
        apple: 'https://apps.apple.com/us/developer/vubiquity/id123456789',
        instagram: 'https://www.instagram.com/vubiquity',
        facebook: 'https://www.facebook.com/vubiquity'
    }    
    return (
        <section className="experience-section animated">
    <h1 data-aos="fade-down" className="section-title">Experience</h1>
    <div align="center" className="experiences-wrap sections-wrap">
        <div>
            <ExperienceCard
                logo_src={TRAVELERS_LOGO}
                company="Travelers Insurance"
                company_urls={TRAVELERS_URLS}
                prefered_url="https://www.travelers.com/"
                title="Full Stack Developer"
                location="Ontario, Canada"
                start_date="April, 2023"
                end_date="Present"
                tech={TRAVELERS_TECH}
            >
                As a Full Stack Developer, I documented various phases of the software development life cycle, involved in all phases starting from scoping to deployment.
                <br/><br/>
                Proficient in technologies like Core Java (Multithreading, Collections), JSP, Servlets, JMS, JDBC, SOA, XML, XSD, DOM, SAX, XSLT, Web Services, and JSF. Implemented React-based sharing functionality with different application APIs for easy content sharing. 
                <br/><br/>
                Developed React-based pagination with custom page size options. Developed and refactored modular User Interface components using React, allowing for efficient code reuse, easier maintenance, code review, and scalability.
                <br/><br/>
                Implemented Redux architecture to manage state in large-scale React applications, ensuring data consistency and predictability. Created Redux actions and reducers to handle state changes and update the application's UI accordingly.
                <br/><br/>
                Provided service quality node.js Server in the back end to handle requests sent from the front-end jQuery Ajax calls. Integrated Madison Cable Product Management REST API. 
                <br/><br/>
                Developed core front-end components of a fast, scalable, complex desktop-class web application using AngularJS framework. Debugged the application using Firebug to traverse the documents and manipulate the Nodes using DOM and DOM functions.
                <br/><br/>
                Well-versed with core Java concepts like Collections, Multithreading, Generics, Exception Handling, Java Reflection, and Serialization. Developed API for using AWS Lambda to manage the servers and run the code in AWS.
                <br/><br/>
                Implemented various services using Microservices architecture with services working independently and using Spring Boot Microservices to divide the application into submodules. Wrote scripts in JMeter to test the performance of the APIs developed using Apigee for secure and scalable integrations.
                <br/><br/>
                Installed, configured, and integrated automation scripts on Continuous Integration tools (CI/CD) like Jenkins for nightly test suite execution. Created S3 buckets and utilized S3 bucket and Glacier for storage and backup on AWS.
                <br/><br/>
                Analyzed the Node.js server structure in the legacy project, mimicked the REST service using Java JAX-WS API, and did the corresponding configurations. Created Lambdas that trigger REST calls to handle logical validation errors, duplicate and valid values errors, invalid column format errors, email process models in Appian.
                <br/><br/>
                Involved in unit integration, module smoke testing, and automated tests. Participated in Scrum/Agile methodology of software development. Created unit test cases to maintain the quality of the code using JUnit and Mockito.
            </ExperienceCard>
        </div>
        <div>
            <ExperienceCard
                logo_src={CANADIAN_TIRE_LOGO}
                company="Canadian Tire"
                company_urls={CANADIAN_TIRE_URLS}
                prefered_url="https://www.canadiantire.ca/"
                title="Java Developer"
                location="Ontario, Canada"
                start_date="May, 2022"
                end_date="March, 2023"
                tech={CANADIAN_TIRE_TECH}
            >
                Responsible for the design, development, and testing phases of Software Development using Scaled Agile methodology with Test Driven Development (TDD) and Pair Programming.
                <br/><br/>
                Analyzing, designing, developing, and integrating UI components with backend using J2EE technologies such as Servlets, Java Beans, and JSP. Developed UI using HTML5, JavaScript, jQuery, JSP, Ajax, and AngularJS.
                <br/><br/>
                Utilized Spring MVC framework to implement the MVC design pattern. Implemented Spring framework including Spring-AOP, Spring-ORM, and Spring-JDBC modules.
                <br/><br/>
                Utilized JAX-Web Services to interact with other applications using SOAP and WSDL files. Employed SQL databases for data validation and querying from different tables.
                <br/><br/>
                Utilized Struts Tag Libraries, Struts Tiles Framework, JSP, HTML5, AJAX, and CSS in developing the presentation layer. Integrated Spring framework 3.0 as a middle-tier component and integrated it with Hibernate 3.4 for backend development.
                <br/><br/>
                Utilized JVM for running Java applications ensuring high performance and efficient resource management. Utilized AWS Lambda platform to upload data into AWS S3 buckets and trigger other Lambda functions.
                <br/><br/>
                Installed the application on AWS EC2 instances and configured storage on S3 buckets. Developed distributed, transactional, secure, and portable applications based on Java technology using Hibernate technology.
                <br/><br/>
                Implemented Hibernate for persisting data into the database. Developed JSPs using Java Beans objects to generate responses for user interfaces. Developed web services using WSDL and used Struts Validation Framework for dynamic validation of user input forms.
                <br/><br/>
                Performed Unit testing of applications using the JUnit framework. Used Hibernate named queries to call stored procedures. Developed JSPs and Servlets to dynamically generate HTML and CSS to display Business Rules to business stakeholders.
                <br/><br/>
                Implemented Elasticsearch for efficient search and data indexing in applications. Used log4j 1.2 for logging various types of messages to write onto the proprietary log model. Utilized StarTeam version control system for code check-in and checkout. Implemented Jenkins as the continuous integration tool.
            </ExperienceCard>
        </div>
        <div>
            <ExperienceCard
                logo_src={VUBIQUITY_LOGO}
                company="Vubiquity India"
                company_urls={VUBIQUITY_URLS}
                prefered_url="https://www.vubiquity.com/"
                title="Software Developer"
                location="India"
                start_date="March, 2020"
                end_date="April, 2022"
                tech={VUBIQUITY_TECH}
            >
                Documented all phases of the software development lifecycle from scoping to deployment ensuring all modules meet the acceptance criteria.
                <br/><br/>
                Engaged in requirement gathering, technical design, and exploration of new technologies including prototyping, benchmarking, and authoring technical specifications.
                <br/><br/>
                Developed modules like personal profiles, registration, and web services for integration into a unified web application. Prepared comprehensive test cases for system and integration testing.
                <br/><br/>
                Facilitated bug fixing and documented best practices and lessons learned. Integrated applications via SOAP web services and effectively utilized JAR and WAR files. Configured SSL for secure microservices communication.
                <br/><br/>
                Implemented DAOs using Spring JDBC API. Studied and contributed to in-house projects using Struts MVC framework. Designed and developed service layers and web tiers.
                <br/><br/>
                Utilized Node.js for lightweight server-side development employing Ajax, JavaScript/jQuery, and JSON for database connectivity with MongoDB and MySQL. Implemented core Java concepts such as Multithreading and Exception Handling for feature enhancements.
                <br/><br/>
                Developed the entire application using the Spring MVC framework. Extensively applied J2EE design patterns for clean role distribution across application layers. Built SOAP web services in Java using Apache Axis.
                <br/><br/>
                Developed presentation layers and GUI frameworks using JSP, HTML, and JavaScript for client-side validation. Utilized Node.js and backbone.js MVC frameworks for web development. Conducted regression testing using Selenium to maintain quality assurance throughout the development process.
                <br/><br/>
                Integrated Spring API with Hibernate for Oracle database integration.
            </ExperienceCard>
        </div>
    </div>
</section>

    )
}


export default Experience;