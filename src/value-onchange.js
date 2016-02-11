import React from 'react';

export default class App extends React.Component {

  // constructor() {
  //   this.state = {}
  // }

  state = {} // https://github.com/jeffmo/es-class-fields-and-static-properties

  changeHandler = ::this.changeHandler // ES7 function bind syntax (http://blog.jeremyfairbank.com/javascript/javascript-es7-function-bind-syntax)
  changeHandler({ target: { name, value }}) {
    this.setState({
      [name]: value // ES7 feature
    });
  }

  render() {
    return <div>
      <input name='firstName' value={ this.state.firstName } onChange={ this.changeHandler } />
      <input name='lastName'  value={ this.state.lastName } onChange={ this.changeHandler } />
    </div>
  }
}
