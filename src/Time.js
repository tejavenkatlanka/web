import React from 'react';

class Time extends React.Component {
    constructor(props) {
      super(props);
      this.state = { time: new Date().toLocaleString() };
    }
  
    secound() {
      this.setState(state => ({
        time: new Date().toLocaleString()
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.secound(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Time: {this.state.time}
        </div>
      );
    }
  }
  
  export default Time;