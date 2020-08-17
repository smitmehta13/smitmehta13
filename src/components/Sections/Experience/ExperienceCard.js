import React from 'react'
import Paper from '@material-ui/core/Paper'
import { FaLinkedinIn, FaApple, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'
import ExpandButton from '../../ExpandButton'
import $ from 'jquery'

function ExperienceCard(props) {
    const iconMap = {
        'linkedin': <FaLinkedinIn />,
        'instagram': <FaInstagram size={33}/>,
        'twitter': <FaTwitter />,
        'facebook': <FaFacebookF />,
        'apple': <FaApple style={{position: 'relative', bottom: '1.2px', right: '.3px'}} size={30}/>
    }
    return (
        <div className="p20">
            <Paper className="experience-paper position-relative">
                <div className="experience-company-urls">
                    {
                        props.company_urls && Object.keys(props.company_urls).map((url_type, i) => {
                            return (
                                <a rel="noopener noreferrer" target="_blank" key={i} title={`Visit ${url_type}`} href={props.company_urls[url_type]}>
                                    <div className={`experience-${url_type}-badge`}>
                                        {iconMap[url_type]}
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="experience-card responsive-experience-card">
                    <div className="experience-card-left">
                        <div className="experience-logo">
                            <img alt="Company Logo" src={props.logo_src} />
                        </div>
                        <div className="company-details">
                            <div>
                                <a rel="noopener noreferrer" target="_blank" className="link" href={`${props.prefered_url}`}><span>@{props.company}</span></a>
                            </div>
                            <div>
                                <span>{props.location}</span>
                            </div>
                        </div>
                        <div className="mt20 mb20">
                            <h5 className="tech-title"><span role="img" aria-label="pc">💻</span> {"Tech & Tools"} <span role="img" aria-label="tools">🔧</span></h5>
                            <div className="company-tech">
                                {props.tech && props.tech.map((tech, i) => {
                                    return (
                                        <span key={i}>
                                            <img
                                                title={tech.title}
                                                className="company-tech-icon"
                                                src={tech.src}
                                                alt={`Tech ${i + 1}`}
                                            />
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="experience-card-right">
                        <div>
                            <span className="intern-date">{props.start_date}&nbsp;-&nbsp;{props.end_date}</span>
                        </div>
                        <div>
                            <h1 className="experience-title">{props.title}</h1>
                        </div>
                        <div className="experience-body responsive-experience-body">
                            {props.children}
                        </div>
                        <div className="experience-body-preview-shadow"/>
                        <div className="experience-read-more-button">
                            <ExpandButton expandText={"Read More"} shrinkText={"Read Less"} 
                                onClick={(e, isExpanded) => {
                                    const experience = $(e.target).closest('.experience-card')
                                    experience.find('.experience-body-preview-shadow').css('display', !isExpanded ? 'none' : 'initial')
                                    experience.find('.company-tech').css('flex-direction', !isExpanded ? 'column' : 'row')
                                    experience.toggleClass('responsive-experience-card')
                                    experience.find('.experience-body').toggleClass('responsive-experience-body')
                                    $('html, body').animate({
                                        scrollTop: experience.offset().top
                                    }, 500);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Paper>
        </div >
    )
}

export default ExperienceCard