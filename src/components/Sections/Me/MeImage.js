import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'

function MeImage(props) {
    const hiddenTitleOpener = useRef();
    const hiddenTitle = useRef();
    const [isHidden, setIsHidden] = useState(true)

    const getRandomTimer = () => {
        let randomTimer = Math.floor(10000 * Math.random())
        return randomTimer <= 5000 ? 5000 : randomTimer
    }

    useEffect(() => {
        if (typeof props.children !== 'undefined') {
            const messageDisplayerInterval = setInterval(timerWillRun, getRandomTimer())
            return () => clearInterval(messageDisplayerInterval)
        }
        return () => null
    })

    const timerWillRun = () => {
        if (isHidden) showHiddenTitle()
        else hideTitle()
    }

    const showHiddenTitle = () => {
        $(hiddenTitleOpener.current).removeClass('fadeIn')
        $(hiddenTitleOpener.current).addClass('fadeOut')
        $(hiddenTitleOpener.current).css('z-index', 0)
        $(hiddenTitle.current).removeClass('hidden')
        $(hiddenTitle.current).removeClass('fadeOut')
        $(hiddenTitle.current).addClass('fadeIn')
        $(hiddenTitle.current).css('z-index', 1)
        setIsHidden(false)
    }

    const hideTitle = () => {
        $(hiddenTitle.current).removeClass('fadeIn')
        $(hiddenTitle.current).addClass('fadeOut')
        $(hiddenTitle.current).css('z-index', 0)
        $(hiddenTitleOpener.current).removeClass('fadeOut')
        $(hiddenTitleOpener.current).addClass('fadeIn')
        $(hiddenTitleOpener.current).css('z-index', 1)
        setIsHidden(true)
    }

    return (
        <div className="me-section-img">
            {
                typeof props.children !== 'undefined' &&
                <React.Fragment>
                    <div ref={hiddenTitleOpener} onClick={showHiddenTitle} title="Click me!" className="animated me-img-title"><i><ArrowDropUp /></i></div>
                    <div ref={hiddenTitle} onClick={hideTitle} className="animated me-img-title-hidden hidden">
                        <span>
                            <i><ArrowDropDown /></i>&nbsp;{props.children}
                        </span>
                    </div>
                </React.Fragment>
            }
            <img alt={props.alt} src={props.src} />
        </div>
    )
}

export default MeImage;