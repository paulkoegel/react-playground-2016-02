import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return <div>
    <nav>
      <Link to={`/01`}>01</Link> {' '}
      <Link to={`/02`}>02</Link> {' '}
      <Link to={`/03`}>03</Link> {' '}
    </nav>
      { this.props.children }
    </div>
  }
})
