import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      second: props.second || 0,
      minute: props.minute || 0,
      hour: props.hour || 0,
      isTimerRunning : false
    };

    this.timerId = null;
  }

  componentDidMount() {
    this.stopTimer();
   
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startTimer = () => {
    if(!this.state.isTimerRunning) {
        this.timerId = setInterval(() => {
            this.setState((state) => {
              let { second, minute, hour, isTimerRunning } = state;
              
              if(second > 0) {
                  console.log(second);
                  second--;
                 } else if(minute > 0 || hour > 0){
                  second = 59;
                  if(minute > 0){
                      minute--;
                  } else if(hour > 0) {
                      minute = 59;
                      hour--;
                  }
                 } else {
                  clearInterval(this.setInterval)
                 }
             
      
              return { second, minute, hour };
            });
          }, 1000);
    
          this.setState({ isTimerRunning: true });
    }
  }

  stopTimer = () => {
    if(this.state.isTimerRunning){
        clearInterval(this.timerId)
        this.setState({isTimerRunning: false})
    }
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({
        second: this.props.second || 0,
        minute: this.props.minute || 0,
        hour: this.props.hour || 0,
        isTimerRunning : false
    })
  }

  

  toTimeString = (v) => (v < 10 ? '0' + v : v);

  render() {
    const { hour, minute, second } = this.state;

    return (
      <div className='timer'>
        <div className='timer-box'>
          <h1 className='text-center'>
            {this.toTimeString(hour)}:{this.toTimeString(minute)}:{this.toTimeString(second)}
          </h1>
          <div className='btn-box'>
            <button className='start btn btn-warning' onClick={this.startTimer} disabled = {this.state.isTimerRunning}>Start</button>
            <button className='stop btn btn-danger' onClick={this.stopTimer} disabled={!this.state.isTimerRunning}>
              <span>00</span>
            </button>
            <button className='btn btn-dark' onClick={this.resetTimer} disabled={this.state.isTimerRunning}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
