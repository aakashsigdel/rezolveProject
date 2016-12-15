import React from 'react'
import { Book, EmptyResult, Loader, MyBooks, titleFormat } from '../../src/components/MyBooks'

import renderer from 'react-test-renderer'

export const books = {books: [
  {
    key: 111,
    author: 'John Doe',
    title: 'I am here',
    thumbnail_url: 'https://covers.openlibrary.org/b/id/295577-M.jpg'
  },
  {
    key: 112,
    author: 'Klio Author Sir',
    title: 'Phones will be always be gone',
    thumbnail_url: 'https://covers.openlibrary.org/b/id/295577-M.jpg'
  },
  {
    key: 113,
    author: 'Olivia Dolo',
    title: 'There will be water in the water',
    thumbnail_url: 'https://covers.openlibrary.org/b/id/295577-M.jpg'
  }
]}

describe('<MyBooks /> component', () => {
  it('should render <MyBooks /> correctly', () => {
    const tree = renderer.create(
      <MyBooks books={books} params={{searchText: "hello"}} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render <Book /> correctly', () => {
    const tree = renderer.create(
      <Book book={books.books[0]} searchText={'hello'} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render <Loader /> correctly', () => {
    const tree = renderer.create(<Loader />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render <EmptyResult /> correctly', () => {
    const tree = renderer.create(<EmptyResult />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should format title correctly', () => {
    const title = 'this is a long string with more than 22 chars'
    const expectedTitle = title.slice(0, 19) + '...'

    expect(titleFormat(title)).toEqual(expectedTitle)
  })
})
