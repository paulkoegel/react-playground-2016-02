import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return <div>
    <nav>
      <Link to={`/01`}>01-simple</Link> {' '}
      <Link to={`/02`}>02-expandable</Link> {' '}
      <Link to={`/03`}>03-list</Link> {' '}
      <Link to={`/04`}>04-select</Link> {' '}
      <Link to={`/05`}>05-add-book</Link> {' '}
    </nav>
      { this.props.children }
    </div>
  }
})
