import React, { useState } from 'react';
import { TiHomeOutline, TiCodeOutline, TiChartBarOutline } from 'react-icons/ti';
import { FaBlackTie, FaCoffee } from 'react-icons/fa';
import SweetAlert from 'sweetalert2-react';


function Navbar() {
    const [showAlert, setShowAlert] = useState(false);
    const toggleAlert = () => setShowAlert(!showAlert)
    return (
        <React.Fragment>
            <SweetAlert
                show={showAlert}
                type="warning"
                title="Opps..."
                confirmButtonColor='#ffc107'
                text="Sorry, this website is under development and this section is currently not available."
                onConfirm={toggleAlert}
            />
            <div className="navbar-top mt10">
                <div className="justify-center">
                    <a href="#home" title="Home"><div style={{ animationDelay: '1.5s' }} className="icon-wrapper appear"><i className="navbar-icon"><TiHomeOutline /></i></div></a>
                    <a href="#experience" onClick={toggleAlert} title="Work Experience"><div style={{ animationDelay: '1.75s' }} className="icon-wrapper appear"><i className="navbar-icon"><FaBlackTie /></i></div></a>
                    <a href="#projects" onClick={toggleAlert} title="Projects"><div style={{ animationDelay: '2s' }} className="icon-wrapper appear"><i className="navbar-icon"><TiCodeOutline /></i></div></a>
                    <a href="#skills" onClick={toggleAlert} title="Skills"><div style={{ animationDelay: '2.25s' }} className="icon-wrapper appear"><i className="navbar-icon"><TiChartBarOutline /></i></div></a>
                    <a href="#coffee" onClick={toggleAlert} title="Me"><div style={{ animationDelay: '2.5s' }} className="icon-wrapper appear"><i className="navbar-icon"><FaCoffee /></i></div></a>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Navbar;
