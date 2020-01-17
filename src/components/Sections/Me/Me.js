import React from 'react'
import MeIntro from './MeIntro'
import MeOrigins from './MeOrigins'
import MeHS from './MeHS'
import MeAdulting from './MeAdulting'
import MeWindup from './MeWindup'


function Me() {
    return (
        <section className="me-section animated">
            <h1 data-aos="fade-down" className="section-title">About Me</h1>
            <div className="pt30 pb30 sections-wrap">
                <div className="me-wrap">
                    <section id="me-intro" data-aos="fade-down">
                        <MeIntro />
                    </section>
                    <section id="me-origins" data-aos="fade-left">
                        <MeOrigins />
                    </section>
                    <section id="me-hs" data-aos="fade-right">
                        <MeHS />
                    </section>
                    <section id="me-adulting" data-aos="fade-right">
                        <MeAdulting />
                    </section>
                    <section id="me-windup" data-aos-mirror="false" data-aos="fade-up">
                        <MeWindup />
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Me;
