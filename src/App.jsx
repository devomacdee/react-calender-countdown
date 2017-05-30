import React, { Component } from 'react'
import Clock from './Clock'
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }
  changeDeadline () {
    this.setState({ deadline: this.state.newDeadline })
  }
  render () {
    return (
      <div className="app">
        <div>
          <div className="app-title">
            Countdown to { this.state.deadline }
          </div>
          <Clock
            deadline={ this.state.deadline }/>
        </div>
        <Form inline>
          <FormControl placeholder='new date'
                       onChange={ event =>
                         this.setState({ newDeadline: event.target.value })}
                       className="deadline-input">
          </FormControl>
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
    </div>
    )
  }
}

export default App
