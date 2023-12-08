// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minute: 0,
    seconds: 0,
    isTimerRunning: false,
  }

  tick = () => {
    const {minute, seconds, isTimerRunning} = this.state
    if (seconds === 59) {
      this.setState(prevVal => ({
        minute: prevVal.minute + 1,
        seconds: 0,
      }))
    } else {
      this.setState(prevVal => ({
        seconds: prevVal.seconds + 1,
      }))
    }
  }

  onStop = () => {
    this.setState({isTimerRunning: false})
    clearInterval(this.timerID)
  }

  onReset = () => {
    clearInterval(this.timerID)
    this.setState({
      minute: 0,
      seconds: 0,
      isTimerRunning: false,
    })
  }

  onStart = () => {
    this.setState({isTimerRunning: true})
    this.timerID = setInterval(this.tick, 1000)
  }

  render() {
    const {minute, seconds, isTimerRunning} = this.state
    const minText = minute < 10 ? '0' + minute.toString() : minute
    const secText = seconds < 10 ? '0' + seconds.toString() : seconds

    return (
      <div className="the-cont">
        <h1 className="title">Stopwatch</h1>

        <div className="card">
          <div className="heading">
            <img
              className="img"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <h1 className="tag">Timer</h1>
          </div>

          <h1 className="time">
            {minText}:{secText}
          </h1>

          <div className="btn-container">
            <button className="start-btn" type="button" onClick={this.onStart}>
              Start
            </button>
            <button className="stop-btn" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button className="reset-btn" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
