import React from 'react'
import $ from 'jquery'

class TechBar extends React.Component {
    constructor(props) {
        super(props)
        this.inverval_id = null
    }
    animateProgress = (e, level) => {
        clearInterval(this.inverval_id);
        var outbar = $(e.target).closest('.techbar-out')
        var elem = outbar.find('.techbar-in')[0]
        elem.style.height = "0%";
        var height = 0;
        this.inverval_id = setInterval(frame, 11.5);
        function frame() {
            if (height >= level) {
                clearInterval(this.inverval_id);
            } else {
                height++;
                elem.style.height = height + "%";
            }
        }
    }
    render() {
        return (
            <div style={{ height: this.props.skill.type === 'special' ? '72vh' : '30vh' }}>
                <div className="techbar-out">
                    {
                        this.props.skill.type === 'normal' &&
                        <img
                            onClick={e => this.animateProgress(e, this.props.skill.level)}
                            title={this.props.skill.title}
                            id={`skill-tech-icon-${this.props.index}`}
                            className="animate-tech-graph skill-tech-icon"
                            src={this.props.skill.src}
                            alt={`Tech Logo`}
                        />
                    }
                    {
                        this.props.skill.type === 'special' &&
                        <div
                            style={{ display: 'flex', flexDirection: 'row' }}
                            onClick={e => this.animateProgress(e, this.props.skill.level)}
                            id={`skill-tech-icon-${this.props.index}`}
                            title={this.props.skill.title}
                            className="animate-tech-graph skill-tech-special"
                        >
                            <img
                                src={this.props.skill.src1}
                                alt={`Tech Logo`}
                            />
                            <span className="plus-tech-special">+</span>
                            <img
                                src={this.props.skill.src2}
                                alt={`Tech Logo`}
                            />
                        </div>
                    }
                    <div style={{ backgroundColor: this.props.skill.color }} className="techbar-in"></div>
                </div>
            </div>
        )
    }
}

export default TechBar;