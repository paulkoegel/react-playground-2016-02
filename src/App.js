import React from 'react'
import { Link } from 'react-router';

export default class extends React.Component {
  render() {
    return <div className='mainWrapper'>
    <nav>
      <Link to={'/01'} activeClassName='active'>01-simple</Link>
      <Link to={'/02'} activeClassName='active'>02-expandable</Link>
      <Link to={'/03'} activeClassName='active'>03-list</Link>
      <Link to={'/04'} activeClassName='active'>04-select</Link>
      <Link to={'/05'} activeClassName='active'>05-add-book</Link>
      <Link to={'/99'} activeClassName='active'>99-es6-7</Link>
      <a href='https://github.com/paulkogel/react-playground-2016-02/'>Github</a>
    </nav>
      { this.props.children }
    </div>
  }
}
