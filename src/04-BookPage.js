import React from 'react';
import booksData from './data/books';


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
      <div className={ this.props.selected ? 'selected' : null }>
        <img src={ image } />
        <h1>{ title }</h1>
        <h2>{ author }</h2>

        <button onClick={ () => { this.props.addToCart(title) } }>
          Add to Cart
        </button>

        <h4><i>{ price || 'no price' }€</i></h4>
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
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string,
  price: React.PropTypes.number,
  image: React.PropTypes.string,
  text: React.PropTypes.string
};


class BookList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTitle: null
    };
  }

  addToCart(title) {
    console.log('addToCart:', this, title);
    this.setState({
      ...this.state,
      selectedTitle: title
    });
  }

  render() {
    return(
      <div>
        <h1>Book List</h1>
        <h2>
          Selected: { ' ' }
          <i>
            { this.state.selectedTitle || 'none' }
          </i>
        </h2>
        <ul className='bookGrid'>
          { this.props.books.map((book, index) => {
            return <li key={ index } className={ this.state.selectedTitle === book.title ? 'selected' : null }>
              <Book { ...book } addToCart={ this.addToCart.bind(this) } />
            </li>
          }) }
        </ul>
      </div>
    );
  }
}


export default () => {
  return <BookList books={ booksData } />
}
