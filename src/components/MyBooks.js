import React from 'react'
import { connect } from 'react-redux'

//FIXME delete this use data from store
import { books } from '../containers'

import './MyBooks.scss'

const titleFormat = title => title.length > 22 ? title.slice(0, 19) + '...' : title

const Loader = () =>
  <div className="loader">
    <img src={'../../images/loading.gif'} className="loader-image" />
  </div>

const Book = props =>
  <div className="book-container">
    <img src={props.cover_image} className="book-thumbnail book-thumbnail-loading" />
    <div className="book-detail-container">
      <div className="book-title-container">
        <div className="book-title">{titleFormat(props.title)}</div>
        <img src="../../images/dots.png" className="book-title-dots" />
      </div>
      <div className="book-author">{props.author_name ? props.author_name : 'Not Found'}</div>
    </div>
  </div>

  const MyBooks = props => {
    return props.isLoading
      ? <Loader />
      : <div className="books-container">
          {props.books.map(book => <Book key={book.key}  {...book} />)}
        </div>
  }

const mapStateToProps = state => ({...state.books})

export default connect(mapStateToProps)(MyBooks)
