import React from 'react'
import Game from '../../../assets/js/background_game/game'

class BackgroundGame extends React.Component {
    constructor(props) {
        super(props)
        this.game = undefined
    }
    componentDidMount = () => {
        this.game = new Game()
        this.game.run()
    }

    render() {
        return (
            <div id="game-page">
                <canvas width="750" height="450" id="game-canvas"></canvas>
            </div>
        )
    }
}

export default BackgroundGame;