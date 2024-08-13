import React from 'react'
import MeIntro from './MeIntro'
import MeVolunteer from './MeVolunteer'
import MeHobbies from './MeHobbies'

function Me() {
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
