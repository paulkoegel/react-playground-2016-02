import React from 'react';
import bookListData from './data/bookList';


class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  changeTitle({ target: { value } }) {
    return;
    // this.setState({
    //   isValid: value <= 50
    // });
  }

  changeAuthor({ target: { value } }) {
    return;
  }

  enterEditMode() {
    this.setState({ editing: true });
  }

  saveBook() {
    this.props.saveBook(this.props.id, this.refs.title.value, this.refs.author.value)
    //this.setState({ editing: false });
  }

  render() {
    let { id, title, author, text, image, price } = this.props;
    return(
      // multiple classes: className={ [ (this.props.selected ? 'selected' : null), (this.state.fadeOut ? 'fadeOut' : null) ].join(' ') }
      <div>
        <img src={ image } />
        
        <button onClick={ () => { this.props.addToCart(id) } }>
          Put in cart
        </button>

        <h4><i>{ price || 'no price' }€</i></h4>
        <p onClick={ this.handleClick.bind(this) }>
          { this.state.expanded ? text : `${text.slice(0,140)} ...` }
        </p>
        <div className='close' onClick={ () => this.props.handleRemove(this.props) }>
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
      showForm: false,
      books: props.books
    };
  }

  addToCart(id) {
    console.log('addToCart:', this, id);
    this.setState({
      selectedId: id
    });
  }

  addBook() {
    this.setState({
      books: [ { title: 'edit me', text: 'some description'}, ...this.state.books ]
    });
  }

  removeBook(book) {
    console.log('removeBook');
    this.setState({
      ...this.state,
      books: this.state.books.filter(b => b.title !== book.title)
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
    return(
      <div>
        <h1>Book List</h1>
        <h2>
          Cart Item: { ' ' }
          <i>
            { this.state.selectedId || '- empty -' }
          </i>
        </h2>
        
        <button className='addBook' onClick={ this.addBook.bind(this) }>
          Add Book
        </button>

        <ul className='bookGrid'>
          { Object.keys(this.state.books).map((bookId, index) => {
              let book = this.state.books[bookId];
              return(
                <li key={ index } className={ this.state.selectedId === bookId ? 'selected' : null }>
                  <Book { ...book }
                    id={ bookId }
                    addToCart={ this.addToCart.bind(this) }
                    handleRemove={ this.removeBook.bind(this) }
                    saveBook={ this.saveBook(this) }
                  />
                </li>);
            })
          }
        </ul>
      </div>
    );
  }
}


export default () => {
  return <BookList books={ bookListData } />
}
