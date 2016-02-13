import React from 'react';
import bookData from './bookData';

class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    this.setState({ ...this.state, expanded: !this.state.expanded });
  }

  render() {
    let { title, author, text, image, price } = this.props;
    return(
      <div>
        <h1>{ title }</h1>
        <h2>{ author }</h2>
        <code>{ price || 'no price' }</code>
        <p style={{ fontSize: 25 }} onClick={ this.handleClick.bind(this) }>
          { this.state.expanded ? text : `${text.slice(0,140)} ...` }
        </p>
        <img src={ image } />
      </div>
    );
  }
}

Book.defaultProps = {
  price: 50
};

Book.propTypes = {
  title: React.PropTypes.string.required, // all keys are optional by default
  author: React.PropTypes.string,
  price: React.PropTypes.number,
  image: React.PropTypes.string,
  text: React.PropTypes.string //.required
};

export default () => {
  return <Book {...bookData} />
}
