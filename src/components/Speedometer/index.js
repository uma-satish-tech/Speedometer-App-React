import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="mainHome">
        <div className="home">
          <div>
            <h1>SPEEDOMETER</h1>
            <img
              className="imgUnits"
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="speedometer"
            />
            <h3>Speed is {speed}mph</h3>
            <p>Min Limit is 0mph, Max Limit is 200mph</p>
            <button
              className="accBtn"
              onClick={this.onAccelerate}
              type="submit"
            >
              Accelerate
            </button>
            <button className="breakBtn" onClick={this.onBrake} type="submit">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
