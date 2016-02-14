import React from 'react';
import bookListData from './data/bookList';
import _ from 'lodash';


class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    let { id, title, author, text, image, price } = this.props;
    return(
      <div>
        <img src={ image } />
        <h1>{ title }</h1>
        <h2>{ author }</h2>

        <button onClick={ () => { this.props.addToCart(id) } }>
          Put in cart
        </button>

        <h4><i>{ price || 'no price' }€</i></h4>
        <p onClick={ this.handleClick.bind(this) }>
          { this.state.expanded ? text : `${text.slice(0,140)} ...` }
        </p>
        <div className='close' onClick={ () => this.props.handleRemove(id) }>
           x
        </div>
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
      selectedId: null,
      books: props.books // !!!
    };
  }

  addToCart(id) {
    this.setState({
      selectedId: id
    });
  }

  removeBook(bookId) {
    console.log('removeBook', bookId, this, this.state);
    console.log(this.state.books)
    console.log(_.omit(this.state.books, bookId));

    this.setState({
      books: _.omit(this.state.books, bookId)
    });
  }


  render() {
    let selectedBook = this.state.books[this.state.selectedId];
    return(
      <div>
        <h1>Book List</h1>
        <h2>
          Cart Item: { ' ' }
          <i>
            { (selectedBook && selectedBook.title) || '- empty -' }
          </i>
        </h2>
        <ul className='bookGrid'>
          { Object.keys(this.props.books).map((bookId, index) => {
            let book = this.props.books[bookId];
            return <li key={ index } className={ this.state.selectedId === bookId ? 'selected' : null }>
              <Book { ...book }
                id={ bookId }
                addToCart={ this.addToCart.bind(this) }
                handleRemove={ this.removeBook.bind(this) }
              />
            </li>
          }) }
        </ul>
      </div>
    );
  }
}


export default () => {
  return <BookList books={ bookListData } />
}
