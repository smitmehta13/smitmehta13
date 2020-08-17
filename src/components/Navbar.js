import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { MdAccessibility } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import { FaBlackTie } from 'react-icons/fa';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Fab from '@material-ui/core/Fab'
import $ from 'jquery';

const ID_MAPPING = ['home', 'projects', 'experience', 'me']

class Navbar extends React.Component {
    static is_active = true
    constructor(props) {
        super(props)
        this.timeouts = []
    }

    componentDidMount = () => {
        $(window).scroll(this.onScroll)
        $(`.${ID_MAPPING[0]}-section`).css('animation-duration', '1.7s')
        $(`.${ID_MAPPING[0]}-section`).addClass('fadeIn')
        this.timeouts.push(setTimeout(() => {
            $(`.${ID_MAPPING[0]}-section`).css('animation-duration', '.65s')
            $(`.${ID_MAPPING[this.props.currentTab]}-section`).removeClass('fadeIn')
            let navbar = $('#navicons-wrap')
            let selected_section_icon = navbar.children()[0]
            $(selected_section_icon).find('div.icon-wrapper').addClass('active-navicon')
        }, 2800))

    }

    componentWillUnmount = () => {
        $(window).off('scroll', this.onScroll)
        this.timeouts.forEach(timeout => clearTimeout(timeout))
    }

    onScroll = () => {
        if (this.props.currentTab > 0) {
            if ($(window).scrollTop() >= 40) {
                if (Navbar.is_active) {
                    this.disableNavbar()
                }
            } else {
                if (!Navbar.is_active) {
                    this.restoreNavbar()
                }
            }
        }
    }

    disableNavbar = () => {
        $('#navicons-wrap').removeClass('fadeInDown')
        $('#navicons-wrap').addClass('fadeOutUp')
        $('#navicons-wrap').css('visibility', 'hidden')
        $('#scroll-top-navbar').removeClass('hidden')
        $('#scroll-top-navbar').removeClass('fadeOutUp')
        $('#scroll-top-navbar').addClass('fadeInDown')
        Navbar.is_active = false
    }

    restoreNavbar = () => {
        $('#scroll-top-navbar').removeClass('fadeInDown')
        $('#scroll-top-navbar').addClass('fadeOutUp')
        $('#navicons-wrap').css('visibility', 'visible')
        $('#navicons-wrap').removeClass('fadeOutUp')
        $('#navicons-wrap').addClass('fadeInDown')
        Navbar.is_active = true
    }

    scrollTopAndRestoreNavbar = () => {
        $('html, body').animate({
            scrollTop: 0
        }, 700, () => {
            this.restoreNavbar()
        })
    }

    gotoTab = event => {
        if (Navbar.is_active) {
            let elem = event.target;
            while (elem && elem.tagName !== 'A') elem = elem.parentNode;
            const new_tab_index = $(elem).index()
            if (new_tab_index !== this.props.currentTab) {
                $(`.${ID_MAPPING[this.props.currentTab]}-section`).removeClass('fadeInDown')
                $(`.${ID_MAPPING[this.props.currentTab]}-section`).addClass('fadeOutDown')
                this.timeouts.push(setTimeout(() => {
                    let navbar = $('#navicons-wrap')
                    let previously_selected_icon = navbar.children()[this.props.currentTab]
                    $(previously_selected_icon).find('div.icon-wrapper').removeClass('active-navicon')
                    $(elem).find('div.icon-wrapper').addClass('active-navicon')
                    $('body').css('background-position', `${new_tab_index * 25}%`)
                    this.props.gotoTab(new_tab_index)
                    $(`.${ID_MAPPING[new_tab_index]}-section`).addClass('fadeInDown')
                }, 200))
            }
        }
    }

    render() {
        return (
            <div className="navbar-top">
                <div id="navicons-wrap" className="justify-center animated">
                    <a href="#home" title="Home" onClick={this.gotoTab}>
                        <div style={{ animationDelay: '1.5s' }} className="icon-wrapper appear">
                            <i className="navbar-icon">
                                <TiHomeOutline />
                            </i>
                            <b className="navicon-name">Home</b>
                        </div>
                    </a>
                    <a href="#projects" onClick={this.gotoTab} title="Projects">
                        <div style={{ animationDelay: '1.75s' }} className="icon-wrapper appear">
                            <i className="navbar-icon">
                                <IoIosRocket />
                            </i>
                            <b className="navicon-name">Projects</b>
                        </div>
                    </a>
                    <a href="#experience" onClick={this.gotoTab} title="Work Experience">
                        <div style={{ animationDelay: '2s' }} className="icon-wrapper appear">
                            <i className="navbar-icon">
                                <FaBlackTie />
                            </i>
                            <b className="navicon-name">Work</b>
                        </div>
                    </a>
                    <a href="#me" onClick={this.gotoTab} title="Me">
                        <div style={{ animationDelay: '2.25s' }} className="icon-wrapper appear">
                            <i className="navbar-icon">
                                <MdAccessibility />
                            </i>
                            <b className="navicon-name">Me</b>
                        </div>
                    </a>
                </div>
                <div id="scroll-top-navbar" className="animated hidden">
                    <Fab className="scroll-top-navbar-button" onClick={this.scrollTopAndRestoreNavbar} size="medium">
                        <ExpandLessIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}


export default Navbar;
