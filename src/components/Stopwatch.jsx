import React from 'react';

import Button from './Button';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      elapsed: 0,
      lastTick: 0,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleStart() {
    this.setState({
      running: true,
      lastTick: Date.now(),
    });
  }

  handlePause() {
    this.setState({ running: false });
  }

  handleStop() {
    this.setState({
      running: false,
      elapsed: 0,
      lastTick: 0,
    });
  }

  tick() {
    if (this.state.running) {
      let now = Date.now();
      let diff = now - this.state.lastTick;

      this.setState({
        elapsed: this.state.elapsed + diff,
        lastTick: now,
      });
    }
  }

  format(milliseconds) {
    let time = new Date(milliseconds);

    return time.toLocaleString('ru-RU', { minute: '2-digit', second: '2-digit' });
  }

  render() {
    let time = this.format(this.state.elapsed);

    return (
      <div className="stopwatch">
        <div className="stopwatch-time">{time}</div>

        <div className="stopwatch-controls">
          {this.state.running ?
            <Button className="icon" icon="pause" onClick={this.handlePause} />
            :
            <Button className="icon" icon="play_arrow" onClick={this.handleStart} />
          }

          <Button className="icon" icon="stop" onClick={this.handleStop} />
        </div>
      </div>
    );
  }
}

export default Stopwatch;
