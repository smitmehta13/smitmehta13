import React from 'react'
import Paper from '@material-ui/core/Paper'

function ExperienceCard(props) {
    return (
        <div className="p20">
            <Paper className="experience-card">
                <div className="experience-card-left">
                    <div className="experience-logo">
                        <img alt="Company Logo" src={props.logo_src} />
                    </div>
                    <div className="company-details">
                        <div>
                            <span className="company-name">{props.company}</span>
                        </div>
                        <div>
                            <span>{props.location}</span>
                        </div>
                    </div>
                    <div className="mt20 mb20">
                        <h5 className="tech-title">Technologies:</h5>
                        <div className="company-tech">
                            {props.tech && props.tech.map((tech, i) => {
                                return (
                                    <span>
                                        <img
                                            key={i}
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
                    <a title="Visit website" href={props.company_url}>
                        <img alt="Company Logo" className="experience-logo-badge" src={props.badge_src} />
                    </a>
                    <div>
                        <span className="intern-date">{props.start_date}&nbsp;-&nbsp;{props.end_date}</span>
                    </div>
                    <div>
                        <h1 className="experience-title">{props.title}</h1>
                    </div>
                    <div className="experience-body">
                        {props.children}
                    </div>
                </div>
            </Paper>
        </div >
    )
}

export default ExperienceCard