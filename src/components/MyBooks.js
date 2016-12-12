import React from 'react'

require('./MyBooks.scss')

const tempTitleFormat = title => title.length > 22 ? title.slice(0, 19) + '...' : title

const Loader = () =>
  <div className="loader">
    <img src={'../../images/loading.gif'} className="loader-image" />
  </div>

const Book = props =>
  <div className="book-container">
    <img src={props.thumbnail_url} className="book-thumbnail book-thumbnail-loading" />
    <div className="book-detail-container">
      <div className="book-title-container">
        <div className="book-title">{tempTitleFormat(props.title)}</div>
        <img src="../../images/dots.png" className="book-title-dots" />
      </div>
      <div className="book-author">{props.author}</div>
    </div>
  </div>

  const MyBooks = props =>
    props.isLoading
      ? <Loader />
      : <div className="books-container">
          {props.books.map(book => <Book key={book.ISBN}  {...book} />)}
        </div>

export default MyBooks
