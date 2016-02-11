import React from 'react'

class Book extends React.Component {
  state = {
    isValid: true
  }

  saveBook = ::this.saveBook
  saveBook() {
    this.props.saveBook(this.props.id, this.refs.title.value)
  }

  editBook = ::this.editBook
  editBook() {
    this.props.editBook(this.props.id)
  }

  onChange = ::this.onChange
  onChange({target: {value}}) {
    this.setState({
      isValid: value.length <= 20
    })
  }

  render() {
    if (this.props.editing) {
      return <div>
        <input ref='title' onChange={this.onChange} defaultValue={this.props.title} type="text" />
        {this.state.isValid && <button onClick={this.saveBook}>Save</button>}
      </div>
    } else {
      return <div>
        {this.props.title}
        <button onClick={this.editBook}>Edit</button>
      </div>
    }
  }
}


export default class App extends React.Component {
  state = {
    books: {
      '1': { title: 'Goedel Bach Escher', editing: false },
      '2': { title: 'My little pony', editing: false }
    }
  }

  editBook = ::this.editBook
  editBook(id) {
    console.log('[editBook]', id);
    let books = {
      ...this.state.books,
      [id]: {
        ...this.state.books[id],
        editing: true
      }
    }
    this.setState({books})
  }

  saveBook = ::this.saveBook
  saveBook(id, title) {
    console.log('[saveBook]', id, title);
    let books = {
      ...this.state.books,
      [id]: {
        ...this.state.books[id],
        title,
        editing: false
      }
    }
    this.setState({books})
  }

  addBook = ::this.addBook
  addBook() {
    let lastId = Object.keys(this.state.books).length + 1
    let books = {
      ...this.state.books,
      [lastId]: {
        title: '',
        editing: true
      }
    }
    this.setState({books})
  }

  render() {
    return <div>
      <button onClick={this.addBook}>Add book</button>
      {Object.keys(this.state.books).map(bookId => {
        let book = this.state.books[bookId]
        return (
          <Book
            {...book}
            id={bookId}
            editBook={this.editBook}
            saveBook={this.saveBook}
          />
        )
      })}
    </div>
  }
}
