// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count-style">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button onClick={this.onIncrement} className="button" type="button">
          click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
