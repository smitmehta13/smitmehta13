import React from 'react'
import ProjectCard from './ProjectCard'
import HTN_ICON from '../../../assets/images/hack_the_north.jpeg'
import SENSES from '../../../assets/images/senses.png'
import DELTAHACKS_ICON from '../../../assets/images/delta_hacks.png'
import BWELL from '../../../assets/images/bwell.png'
import PLANET_JOB_ICON from '../../../assets/images/planet_job_icon.png'
import PLANET_JOB from '../../../assets/images/planet_job.png'
import HTML_DETECTIVE_ICON from '../../../assets/images/html_detective_icon.png'
import HTML_DETECTIVE from '../../../assets/images/html_detective.png'
import PSYCARE_ICON from '../../../assets/images/psycare_icon.png'
import PSYCARE from '../../../assets/images/psycare.png'
import TINDER_ICON from '../../../assets/images/tinder_icon.svg'
import TINDER from '../../../assets/images/tinder.png'
import JAVASCRIPT from '../../../assets/images/javascript.svg'
import HTML from '../../../assets/images/html.svg'
import CSS from '../../../assets/images/css.svg'
import JQUERY from '../../../assets/images/jquery.svg'
import LUCASNOGUEIRA_ICON from '../../../assets/images/lucasnogueira_icon.png'
import LUCASNOGUEIRA from '../../../assets/images/lucasnogueira.png'
import CHESS_ICON from '../../../assets/images/chess_icon.png'
import CHESS from '../../../assets/images/chess.png'
import AWS from '../../../assets/images/aws.svg'
import NODE from '../../../assets/images/node.svg'
import SOCKETIO from '../../../assets/images/socket-io.svg'
import DOCKER from '../../../assets/images/docker.svg'
import LOOPBACK from '../../../assets/images/loopback.png'
import WEBRTC from '../../../assets/images/webrtc.svg'
import FLASK from '../../../assets/images/flask.svg'
import PYTHON from '../../../assets/images/python.svg'
import MATPLOTLIB from '../../../assets/images/matplotlib.svg'
import REACT from '../../../assets/images/react.svg'
import GOOGLE_CLOUD from '../../../assets/images/google_cloud.svg'
import PYGAME from '../../../assets/images/pygame.png'
import BOOTSTRAP from '../../../assets/images/bootstrap.svg'
import NWHACKS_ICON from '../../../assets/images/nwhacks.png'
import WENOTE from '../../../assets/images/wenote.png'
import MONGODB from '../../../assets/images/mongodb.svg'
import REDIS from '../../../assets/images/redis.svg'
import TREEGEN from '../../../assets/images/tree_gen.png'
import TREEGEN_ICON from '../../../assets/images/treeicon.png'
import LITEBOARD_ICON from '../../../assets/images/liteboard_icon.png'
import LITEBOARD from '../../../assets/images/liteboard.png'

function Projects(props) {
    const PROJECTS = [
        {
            icon: LITEBOARD_ICON,
            title: 'Liteboard',
            subtitle: 'Open Source Project',
            main_image: LITEBOARD,
            description: `
                <a class="link" href="https://liteboard.io"><b>Liteboard</b></a> is a browser-based platform made to support real-like lecture experiences. <br/>
                <br/>
                It allows anyone to quickly setup a lecturing room with webcam, audio and <b>state-of-the-art drawing tools</b>. It is focused on simplicity; no user authentication or downloads required, <b>just create a lecture, share the link, done</b>. It's really that simple. <br/>
                <br/>
                Liteboard is powered by <b>WebRTC</b> and uses the Janus implementation of a Selective Forwarding Unit (SFU) to support multiple participants in a single room while <b>ensuring low and stable latency</b>.
                The application, the janus gateway server and the redis database are all <b>deployed as docker containers</b> to both staging and production environments in AWS and GCP, respectively. This decision was taken in order to shrink our costs and as a strategy to scale vertically.
                <br/> <br/>
                We use <b>redis</b> as our database since it's really convenient and common practice to use it along Socket.IO due to scalability reasons and because redis provides data structures that are natural to work with <b>Socket.IO rooms</b>.
                </br></br>
                Liteboard use Paper.js to provide modern drawing tools that smooths your drawing for the best user experience.
                <br/><br/>
                Click the link button below and start lecturing!
            `,
            short_description: 'A decentralized browser-based lecturing platform with WebRTC',
            links: {
                github: 'https://github.com/jeverd/lecture-experience',
                website: 'https://liteboard.io'
            },
            tech: [
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: REDIS, title: 'Redis' },
                { src: DOCKER, title: 'Docker'},
                { src: WEBRTC, title: 'WebRTC' },
                { src: HTML, title: 'HTML' },
                { src: SOCKETIO, title: 'Socket.IO'},
                { src: GOOGLE_CLOUD, title: 'GCP' },
                { src: NODE, title: 'Node' },
                { src: AWS, title: 'AWS'},
                { src: CSS, title: 'CSS' },
            ],
        },
        {
            icon: TREEGEN_ICON,
            title: 'Expression Trees',
            subtitle: 'Side Project',
            main_image: TREEGEN,
            description: `
                <a class="link" href="https://lnogueir.github.io/expression-tree-gen/"><b>Expression Trees</b></a> was created because of the fact that building an <b>expression tree</b> of an arithmetic expression is something quite useful and it is one of the steps a compilers must take to generate machine code. <br/> <br/>
                With that in mind, and inspired on my lectures on the tree data structure I decided to create a web app that simulates the creation of such a tree given an expression. <br/><br/>
                <b>What I learned:</b> <br/>
                That stacks are REALLY useful. <br/>
                That drawing trees is actually harder than constructing them 🤣. The fact that the "twigs" might get tanggled up made my simulation problem a lot more complicated. <br/> <br/>
                I also learned several different algorithms including the <b>Knuth's algorithm</b> to help me do the layout of such trees and make sure they would not collide as I drew it. <br/>
                <b>Shunting-yard algorithm</b> was also used to parse an arithmethic expression efficiently from its <b>infix</b> form into its <b>postfix</b> form. <br/>
                From those, I managed to create my own algorithm (Lucas' algorithm ???) to convert the postfix expression into an actual tree data structure. <br/>
                I also finally learned about HTML5 canvas and how to make animations on it. <br/>
                Besides that, I finally used geometry in my life. I had to do some cool calculations with the edges of the nodes to make it look right.
            `,
            short_description: 'An app that generates a binary tree of an arithmetic expression',
            links: {
                github: 'https://github.com/lnogueir/expression-tree-gen',
                website: 'https://lnogueir.github.io/expression-tree-gen/'
            },
            tech: [
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: HTML, title: 'HTML' },
                { src: CSS, title: 'CSS' },
            ],
        },
        {
            icon: DELTAHACKS_ICON,
            title: 'bWell',
            subtitle: 'DeltaHacks 2020',
            main_image: BWELL,
            description: `
                <b>bWell</b> assists those who suffer from diabetes track their blood sugar levels. <br/> <br/>
                <b>How does it do that? </b> <br/>
                By the concept of a "meals" (aka what the user is about to eat). <br/>
                Users can add "meals" in three different ways: submitting a photo of the meal, recording an audio of what the meal is, or simple querying a meal with text. <br/><br/>
                Once a meal has been created, we collect the "glycemic load" and "glycemic index" (terms used in medical literature referring to a coefficient of how much such a meal would spike sugar levels on ones blood-stream) and adds it to the user's dashboard. <br/><br/>
                <b>What I did:</b> <br/>
                I played a key role on my team. I was responsible for the frontend application as a whole except for the UI which was done by a teammate. <br/>
                I programmed the camera and the audio recording system for meal creation purposes. Transformed the collected data into base64 and sent it to appropriate APIs (Clarifai Food Detection AI for image and Google Speech-To-Text for audio).
                With the decoded response from the APIs we could create a JSON with food details and portion sizes. <br/>
                With that information we could query Edaman API to get nutrition information about such meal and after that, with the nutrition info, my friend could dynamically scrape the glycemic index from a university website.
                After all this proccess we would add the computed results to the user's dashboard distinguishing if that meal would be good, medium or bad in terms of how it affects their sugar levels.
                <br/> <br/>
                <b>Difficulties:</b> <br/>
                Setting up the audio recording was the toughest thing for me, it was difficult because it was an asynchronous event and the documentation to perform that on react-native wasn't enough. <br/>
                And since we only had 24 hours, it was quite stressing.
                Another issue was the fact that Clarifai api only accepted an image via a URL. Therefore we needed to send the photo taken to AWS S3, upload it there, retrieve a URL of the image and then send it to Clarifai, which made our meal creation through image quite slow, which turned judges down :/<br/><br/>
                But other than that, everything was great and it was an amazing learning experience.
            `,
            short_description: 'A meal based app that assists who suffers from diabetes',
            links: {
                github: 'https://github.com/lnogueir/DeltaHacks2020',
                devpost: 'https://devpost.com/software/bwell',
                youtube: 'https://www.youtube.com/watch?v=Ypn5Iie0KZw'
            },
            tech: [
                { src: REACT, title: 'React Native' },
                { src: NODE, title: 'Node' },
                { src: GOOGLE_CLOUD, title: 'Google Cloud Platform' },
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: AWS, title: 'AWS' },
            ]
        },
        {
            icon: HTN_ICON,
            title: 'Senses',
            subtitle: 'Hack The North 2019',
            main_image: SENSES,
            description: `
                <b>Senses</b> is a mobile app that was developed in under 24 hours at HTN. <br/> <br/>
                <b>What I developed?</b> <br/>
                Frontend UI, file transfering system between frontend to backend, and backend server that handles transfered data. <br/><br/>
                <b>In order to?</b> <br/>
                Create an interactive app that'd help people learn a new language. <br/><br/>
                It works as following:<br/>
                &nbsp;&nbsp;<b>1.</b>&nbsp;User selects a language <br/>
                &nbsp;&nbsp;<b>2.</b>&nbsp;Takes a photo of an object <br/>
                &nbsp;&nbsp;<b>3.</b>&nbsp;Receives audio feedback on what the object is in the selected language  
                <br/><br/>
                <b>Challenges:</b><br/>
                The biggest challenge we faced was the transfer of audio data from server to the phone. Since newer versions of iOS were complaning about the transfer of such data via HTTP and not HTTPS. It took us very long, but we found a work around by setting Flask SSL certificate configurations to 'adhoc' and finally run it under HTTPS, fixing the issue. <br/>
                Setting up the camera on our app was a little bit challenging too since it was my first time doing it on a React-Native app. However, expo-camera documentation made it easier than react-camera and this way we were able to set it up successfully on our app.
            `,
            short_description: 'An app that lets you learn a new language by taking photos',
            links: {
                youtube: 'https://www.youtube.com/watch?v=sIyQeOB-pRg&feature=youtu.be&t=64',
                devpost: 'https://devpost.com/software/senses-ps5gwm',
                github: 'https://github.com/lnogueir/HackTheNorth2019',
            },
            tech: [
                { src: PYTHON, title: 'Python' },
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: FLASK, title: 'Flask' },
                { src: REACT, title: 'React Native' },
                { src: GOOGLE_CLOUD, title: 'Google Cloud' },
            ]
        },
        {
            icon: HTML_DETECTIVE_ICON,
            title: 'HTML Detective',
            subtitle: 'Side Project',
            main_image: HTML_DETECTIVE,
            description: `
                <b>HTML Detective</b> is a compilation of all assigned first year CS projects. <br/> <br/>
                <b>What I developed? </b> <br/>
                A ranking algorithm, frontend UI, database tables, email service. <br/> <br/>
                <b>In order to?</b> <br/>
                Create a mobile app with user authentication that given user tags, it runs an algorithm that determines which tags are most likely related to that website. <br/> <br/>
                It outputs the results as a graph with the top 5 tags and lets the user save desired results and share the result's graph and/or corresponding excel, via email, to contacts.
            `,
            short_description: 'An app that figures out what a website is about',
            links: {
                youtube: 'https://www.youtube.com/watch?v=oHgSRt8g4Jg&feature=youtu.be&t=21',
                github: 'https://github.com/lnogueir/frontendJobs',
            },
            tech: [
                { src: REACT, title: 'React Native' },
                { src: FLASK, title: 'Flask' },
                { src: PYTHON, title: 'Python' },
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: MATPLOTLIB, title: 'Matplotlib' },
            ]
        },
        {
            icon: PSYCARE_ICON,
            title: 'PsyCare',
            subtitle: 'Organization',
            main_image: PSYCARE,
            description: `
                <b>PsyCare</b> is an organization co-founded by me and two other partners. With a couple hundred subscribed users, it aims to help patients schedule appointments with legitimate therapists. <br/> <br/>
                <b>What I developed?</b> <br/>
                The <a class="link" href="https://psycare.ca">psycare.ca</a> website frontend was done by me. Besides that, I also implemented our emailing service server which can be found <a class="link" href="https://github.com/lnogueir/psyfy-emailer">here</a>, which served the purpose of communication between the application and our subscribed therapists. <br/><br/>
                <b>Challenges:</b> <br/>
                One of the hardest features to implement was our "Request Account" system. In order to create a reliable platform, we could not simply allow any user to create an account. <br/>
                Instead, we implemented a feature for users to request accounts, where they upload documents and useful information about their certification to the website, which sends a notification to us, the admins, about the user's request. The notification contains links generated by us, which based on the user info, we can accept or deny the request automatically. <br/> <br/>
                Another tough feature to implement was the creation of an interactive calendar which was needed in order to store therapist's available hours. <br/>
                This was tough for a couple reason, we had to store multiple blocks of time in a way such that would enable back and frontend to efficiently retrieve the data, implement a user friendly way for users to select the available times and concatenate adjacent time blocks.
            `,
            short_description: 'A web app that maps patients to therapists',
            links: {
                github: 'https://github.com/lnogueir/psyfy-frontend',
                website: 'https://psycare.ca'
            },
            tech: [
                { src: PYTHON, title: 'Python' },
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: FLASK, title: 'Flask' },
                { src: REACT, title: 'React Native' },
                { src: NODE, title: 'Node' },
                { src: HTML, title: 'HTML' },
                { src: CSS, title: 'CSS' },
                { src: JQUERY, title: 'jQuery' },
                { src: AWS, title: 'Amazon Web Services' },
                { src: BOOTSTRAP, title: 'Bootstrap' }
            ]
        },
        {
            icon: NWHACKS_ICON,
            title: 'weNote',
            subtitle: 'nwHacks 2020',
            main_image: WENOTE,
            description: `
                <b>weNote</b> is a web application which aims to help students merge their notes, similarly to how version control providers merge our code. <br/> <br/>
                The goal was not to have ONE master branch, instead each user would have their own master branch locally, and they would always merge the notes from the main repository (course) and choose which notes they would like to have for them. That way everybody would have their own version customized version of notes.<br/> <br/>
                Our team divided the work as following: <a class="link" href=https://github.com/michaelfromyeg>Michael</a> was responsible for the algorithm to generate common topics from submitted note files and merge them, me and <a class="link" href="https://github.com/n-young">Nick</a> were responsible for creation of front and backend together. <br/> <br/>
                We were able to deliver several parts of this project separately, such as uploading files of multiple extensions then turning them into a string, creation of all endpoints and mongoDB collections and frontend UI. <br/> <br/>
                Unfortunately, we were not able to deliver our whole idea under the 24 hours spam of the event. However, great friendships were formed and we learned our lesson: DO NOT MAKE APPs BASED ON USER AUTHENTICATION IN A HACKATHON 🤣. Jokes apart, I learned more about Git due to our fast passed development into same repository and mongoDB since our backend was developed using this technology.
            `,
            short_description: 'A web app that provides version control on class notes',
            links: {
                github: 'https://github.com/lnogueir/https://github.com/lnogueir/nwHacks2020',
                devpost: 'https://devpost.com/software/wenote'
            },
            tech: [
                { src: REACT, title: 'React' },
                { src: MONGODB, title: 'MongoDB' },
                { src: NODE, title: 'Node' },
            ]
        },
        {
            icon: PLANET_JOB_ICON,
            title: 'Planet Jobs',
            subtitle: 'Group Project',
            main_image: PLANET_JOB,
            description: `
                <b>Planet Job</b> is a mobile app developed with the intent to help high schoolers find entry level job opportunities. <br/><br/>
                <b>What I developed?</b><br/>
                • Mobile application frontend which includes over 7 different screens and features such as user authentication, notification system, bookmarks and filtering.<br/>
                • Web crawler to collect job postings from websites such as <a class="link" href="https:/indeed.com">indeed</a> and using scikit learn, filtered the postings based on machine learning model which judged which were considered entry level jobs and which weren't.
                <br/><br/>
                <b>In order to?</b><br/>
                Create a user-friendly mobile app that is focused towards students. As high schoolers, we noticed wasting a lot of time filtering out the jobs that were actually entry level. Planet Jobs solves this issue by only collecting entry level jobs and volunteering positions. It allows the user to select tags related to what they would like to work with and notify them about new postings based on that and user's location.
            `,
            short_description: 'A mobile app focused on helping students find a job',
            links: {
                youtube: 'https://www.youtube.com/watch?v=oHgSRt8g4Jg&feature=youtu.be&t=21',
                github: 'https://github.com/lnogueir/frontendJobs',
            },
            tech: [
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: NODE, title: 'Node' },
                { src: REACT, title: 'React Native' },
                { src: LOOPBACK, title: 'Loopback' },
                { src: PYTHON, title: 'Python' }
            ]
        },
        {
            icon: TINDER_ICON,
            title: 'Tinder Bot',
            subtitle: 'Side Project',
            main_image: TINDER,
            description: `
                <b>Tinder bot</b> is a funny bot that optimizes your time and efficiency on tinder. <br/> <br/>
                Made as a standalone python application and possible to be developed thanks to the, REST based, <a href="https://github.com/fbessez/Tinder">Tinder api</a>, it runs on an EC2 instance and it is self sufficient.<br/><br/>
                It automatically authenticates the user every 24 hours, since after this time the user session expires and swipes right until max amount of swipes/time is reached. It sleeps until its time to swipe again. <br/><br/>Once it finds a match, it will send messages automatically and if the match replies accordingly the bot will notify the user via email with all the match's bio information and let user decide to either proceed with the match, or unmatch in case the bio isn’t interesting.
            `,
            short_description: "A funny bot that will find tinder dates for you",
            links: {
                github: 'https://github.com/lnogueir/my_tinder_bot',
            },
            tech: [
                { src: PYTHON, title: 'Python' },
                { src: AWS, title: 'Amazon Web Services' }
            ]
        },
        {
            icon: CHESS_ICON,
            title: 'Chess',
            subtitle: 'Side Project',
            main_image: CHESS,
            description: `
                This is the implementation of the classic game of <b>Chess</b>. <br/><br/>
                This was the first project I did in which I was proud of when I completed. Chess has always been a hobby for me and creating a GUI for the game had been a goal of mine since the beginning of my programming journey.<br/>
                Through this project I learned how to use pygame which is a quite nice 2D gaming library and by the Object Oriented nature of the game of Chess, I was able to develop better understanding of OOP. <br/> <br/>
                <b>Challenge</b><br/>
                The toughest feature to implement was the check/checkmate system as it required me to simulate a player move (this was the only way I found to do this) and account for all the possible cases in which the King would be under attack.
            `,
            short_description: "A GUI implementation of the classic game of Chess",
            links: {
                github: 'https://github.com/lnogueir/chess',
                youtube: 'https://www.youtube.com/watch?v=U1M_gilj91A'
            },
            tech: [
                { src: PYTHON, title: 'Python' },
                { src: PYGAME, title: 'Pygame' },
            ]
        },
        {
            icon: LUCASNOGUEIRA_ICON,
            title: 'lucasnogueira',
            subtitle: 'Personal Website',
            main_image: LUCASNOGUEIRA,
            description: `
            <b>lucasnogueira</b> is my personal website and portifolio, where I am aim to share my accomplishments and life story as through section. <br/> <br/>
            The website is pretty self explanatory on its purpose but I wanted to give it some space in this section because of the recursive nature of talking about something inside the such thing. <br/> 
            <b style="font-size: 19px;padding-top:7.5px;">Try finding the easter egg!</b>
            `,
            short_description: "My personal website and home on the internet",
            links: {
                github: 'https://github.com/lnogueir/lucasnogueira',
                website: 'https://lnogueir.me'
            },
            tech: [
                { src: JAVASCRIPT, title: 'JavaScript' },
                { src: REACT, title: 'React' },
                { src: HTML, title: 'HTML' },
                { src: CSS, title: 'CSS' },
                { src: JQUERY, title: 'jQuery' },
            ]
        },
    ]

    const getRandomAnimation = () => {
        const CARD_ANIMATIONS = [
            'fade-right',
            'fade-left',
            'flip-left',
            'flip-right',
            'fade-up',
            'fade-down',
            'flip-up',
            'flip-down',
            'zoom-in',
            'zoom-out'
        ]
        const random_index = Math.floor(Math.random() * CARD_ANIMATIONS.length)
        return CARD_ANIMATIONS[random_index]
    }

    return (
        <section className="projects-section animated">
            <h1 data-aos="fade-down" className="section-title">Projects</h1>
            <div className="sections-wrap projects-wrap">
                {PROJECTS.map((project, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div data-aos={getRandomAnimation()}>
                                <ProjectCard
                                    key={i}
                                    project={project}
                                />
                            </div>
                            {
                                i % 3 === 1 && PROJECTS.length - i === 1 &&
                                <div className="project" />
                            }
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    )
}


export default Projects;