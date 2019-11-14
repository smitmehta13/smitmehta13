import React from 'react';
import {TiHomeOutline,TiCodeOutline,TiChartBarOutline} from 'react-icons/ti'
import {FaBlackTie} from 'react-icons/fa'

function Navbar() {
    return (
        <div className="navbar-top">
            <div className="m20 justify-center">
                <i className="navbar-icon"><TiHomeOutline /></i>                
                <i className="navbar-icon"><FaBlackTie /></i>
                <i className="navbar-icon"><TiChartBarOutline /></i>
                <i className="navbar-icon"><TiCodeOutline/></i>
            </div>
        </div>
    )
}


export default Navbar;
