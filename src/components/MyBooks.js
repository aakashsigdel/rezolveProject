import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/books'

import './MyBooks.scss'

const titleFormat = title => title.length > 22 ? title.slice(0, 19) + '...' : title

const Loader = () =>
  <div className="loader">
    <img src={'../../images/loading.gif'} className="loader-image" />
  </div>

const EmptyResult = () =>
  <div className="books-container">
    <div className="book-not-found">
      0 books here! Search for a book from the search bar
    </div>
  </div>

    const handleBookClick = props => {
      return props.searchText ? props.dispatch(addBook(props.book)) : null
    }
const Book = props => {
  const bookContainerClass = props.searchText
    ? "book-container book-container-overlay"
    : "book-container"
  return (
    <div className={bookContainerClass} onClick={() => handleBookClick(props)}>
      <img src={props.book.cover_image} className="book-thumbnail book-thumbnail-loading" />
      <div className="book-detail-container">
        <div className="book-title-container">
          <div className="book-title">{titleFormat(props.book.title)}</div>
          <img src="../../images/dots.png" className="book-title-dots" />
        </div>
        <div className="book-author">{props.book.author_name ? props.book.author_name : 'Not Found'}</div>
      </div>
    </div>
  )
}

const MyBooks = props => {
  const books = props.params.searchText ? props.books : props.mybooks
  console.log(books, props.params, 'cup')
  if (books.isLoading) {
    return <Loader />
  }
  else {
    if (books.books.length === 0) {
      return <EmptyResult />
    } else {
      return(
        <div className="books-container">
          {books.books.map(book => <Book key={book.key}  book={book} searchText={props.params.searchText} dispatch={props.dispatch} />)}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(MyBooks)
