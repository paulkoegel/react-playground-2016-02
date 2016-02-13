import React from 'react';
import bookListData from './data/bookList';


class BookForm extends React.Component {
}

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
          Put in cart
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
  text: React.PropTypes.string.isRequired
};


class BookList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTitle: null,
      showForm: false,
      books: props.books
    };
  }

  addToCart(title) {
    console.log('addToCart:', this, title);
    this.setState({
      ...this.state,
      selectedTitle: title
    });
  }

  addBook() {
    console.log('addBook');
    this.setState({
      ... this.state,
      books: [ { title: 'edit me', text: 'some description'}, ...this.state.books ]
    });
    console.log('end addBook');
  }

  render() {
    return(
      <div>
        <h1>Book List</h1>
        <h2>
          Cart Item: { ' ' }
          <i>
            { this.state.selectedTitle || '- empty -' }
          </i>
        </h2>
        
        <button className='addBook' onClick={ this.addBook.bind(this) }>
          Add Book
        </button>

        <ul className='bookGrid'>
          { this.state.books.map((book, index) => {
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
  return <BookList books={ bookListData } />
}
