import React from 'react'
import MeIntro from './MeIntro'
import MeVolunteer from './MeVolunteer'
import MeHobbies from './MeHobbies'

function Me() {
    return (
        <section className="me-section animated">
            <h1 data-aos="fade-down" className="section-title">About Me</h1>
            <div className="pt30 sections-wrap">
                <div className="me-wrap">
                    <section id="me-intro" data-aos="fade-down">
                        <MeIntro />
                    </section>
                    <section id="me-hobbies" data-aos="fade-right">
                        <MeHobbies />
                    </section>
                    <section id="me-volunteer" data-aos="fade-right">
                        <MeVolunteer />
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Me;
