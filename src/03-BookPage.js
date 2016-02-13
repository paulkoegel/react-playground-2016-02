import React from 'react';
import booksData from './data/books';


class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  wrapperStyles = {
    fontFamily: 'sans-serif',
    maxWidth: 900,
    backgroundColor: '#eee',
    outline: '1px solid black',
    padding: 10,
    marginBottom: 20
  }

  imageStyles = {
    height: 150,
    width: 110,
    float: 'left',
    marginRight: 20
  }

  h1Style = {
    fontSize: 20
  }

  handleClick() {
    this.setState({ ...this.state, expanded: !this.state.expanded });
  }

  render() {
    let { title, author, text, image, price } = this.props;
    return(
      <div style={ this.wrapperStyles }>
        <img src={ image } style= { this.imageStyles } />
        <h1 style={ this.h1Style }>{ title }</h1>
        <h2>{ author }</h2>
        <code>{ price || 'no price' }</code>
        <p onClick={ this.handleClick.bind(this) }>
          { this.state.expanded ? text : `${text.slice(0,140)} ...` }
        </p>
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


class Books extends React.Component {
  render() {
    return(
      <div>
        <h1>Book List</h1>
        <ul style={{ listStyleType: 'none' }}>
          { this.props.books.map((book) => {
            return <li>
              <Book {...book} />
            </li>
          }) }
        </ul>
      </div>
    );
  }
}


export default () => {
  return <Books books={ booksData } />
}
