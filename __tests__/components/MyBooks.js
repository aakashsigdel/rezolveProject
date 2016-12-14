import React from 'react'
import { MyBooks } from '../../src/components/MyBooks'

import renderer from 'react-test-renderer'

const books = {books: [
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

it('should render <MyBooks /> correctly', () => {
  const tree = renderer.create(
    <MyBooks books={books} params={{searchText: "hello"}} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
