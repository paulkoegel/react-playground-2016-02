import React from 'react';
import bookListData from './data/bookList';
import _ from 'lodash';


class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      expanded: false
    };
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  enterEditMode() {
    console.log('enterEditMode');
    this.setState({ editing: true });
  }

  saveBook() {
    this.setState({ editing: false });
    this.props.saveBook(this.props.id, this.refs.title.value, this.refs.author.value);
  }

  renderTitleAndAuthor() {
    if(this.state.editing) {
      return <div>
        <input ref='title' defaultValue={ this.props.title } type='text' /> {/* !!! what happens with `value=`? */ }
        <input ref='author' defaultValue={ this.props.author } type='text' />
        <button onClick={ this.saveBook.bind(this) }>Save</button>
      </div>

    } else {
      return <div>
        <h1 onClick={ this.enterEditMode.bind(this) }>{ this.props.title }</h1>
        <h2 onClick={ this.enterEditMode.bind(this) }>{ this.props.author }</h2>
      </div>
    }
  }

  render() {
    let { id, title, author, text, image, price } = this.props;
    console.log('editing?', this.state.editing);
    return(
      <div>
        <img src={ image || 'http://placekitten.com/150/110' } />
        { this.renderTitleAndAuthor.bind(this)() }
        

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
  text: React.PropTypes.string.isRequired
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

  addBook() {
    console.log(this.state, this.state.books.length + 1);
    this.setState({ // !!! need to repeat this.state.books - automerge doesn't work for nested structures
      books: {
        ...this.state.books,
        [Object.keys(this.state.books).length + 1]: {
          title: 'edit me',
          author: 'John Doe',
          text: 'some description'
        }
      }
    });
  }

  removeBook(bookId) {
    this.setState({
      books: _.omit(this.state.books, bookId)
    });
  }

  saveBook(id, title, author) {
    let books = {
      ...this.state.books,
      [id]: { // !!!
        ...this.state.books[id],
        title,
        author
      }
    };

    this.setState({ books }) //object literal shorthand
  }

  render() {
    const selectedBook = this.state.books[this.state.selectedId];
    const sortedBookIDs = _.sortBy(Object.keys(this.state.books).map(bookId => parseInt(bookId, 10)), el => el).reverse();

    return(
      <div>
        <h1>Book List</h1>
        <h2>
          Cart Item: { ' ' }
          <i>
            { (selectedBook && selectedBook.title) || '- empty -' }
          </i>
        </h2>

        <button className='addBook' onClick={ this.addBook.bind(this) }>
          Add Book
        </button>

        <ul className='bookGrid'>
          { sortedBookIDs.map((bookId, index) => {
              let book = this.state.books[bookId];
              return <li key={ index } className={ this.state.selectedId === bookId ? 'selected' : null }>
                <Book { ...book }
                  id={ bookId }
                  addToCart={ this.addToCart.bind(this) }
                  handleRemove={ this.removeBook.bind(this) }
                  saveBook={ this.saveBook.bind(this) }
                />
              </li>
            }) 
          }
        </ul>
      </div>
    );
  }
}

// TODO:
// validate that titles aren't longer than 50 characters


export default () => {
  return <BookList books={ bookListData } />
}
