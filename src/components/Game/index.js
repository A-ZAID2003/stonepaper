import {Component} from 'react'

import './index.css'

class Game extends Component {
  state = {
    score: 0,
  }

  onClickRock = () => {}

  onClickScissors = () => {}

  onClickPaper = () => {}

  onClickRules = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
        alt="rules"
      />
    </div>
  )

  scoreview = () => {
    const {score} = this.state

    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <div>
          <p>Score</p>
          <p>{score}</p>
        </div>
      </div>
    )
  }

  renderGameView = () => {
    const {choicesList} = this.props
    const {id, imageUrl} = choicesList

    return (
      <>
        <div>
          <button
            data-testid="rockButton"
            type="button"
            onClick={this.onClickRock}
          >
            <img aria-label="button-image" src={imageUrl} alt={id} />
          </button>
          <button
            data-testid="scissorsButton"
            type="button"
            onClick={this.onClickScissors}
          >
            <img aria-label="button-image" src={imageUrl} alt={id} />
          </button>
        </div>
        <div>
          <button
            data-testid="paperButton"
            type="button"
            onClick={this.onClickPaper}
          >
            <img aria-label="button-image" src={imageUrl} alt={id} />
          </button>
        </div>
      </>
    )
  }

  render() {
    const {score} = this.state

    return (
      <div>
        <div>
          <h1>Rock Paper Scissors</h1>
          <div>
            <p>Score</p>
            <p>{score}</p>
          </div>
        </div>
        {this.renderGameView()}
        <button onClick={this.onClickRules} type="button">
          <p>Rules</p>
        </button>
      </div>
    )
  }
}

export default Game
