import React from 'react';
import Tweet from '../tweet/tweet.js';

export default class App extends React.Component {
  constructor(props, context) {
    console.log(props)
    super(props, context);

    this.state = {
      alert: null
    };
  }

  changeAlert(newAlert) {
    this.setState({
      alert: newAlert
    });
  }

  renderAlert() {
    if(this.state.alert) {
      return <div className="well">{this.state.alert}</div>
    }
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <Tweet changeAlert={this.changeAlert.bind(this)}/>
      </div>
    )
  }
}
