import React from 'react'
import MyBooks from '../../src/components/MyBooks'
import { books } from '../../src/containers'

import renderer from 'react-test-renderer'

it('should render <MyBooks /> correctly', () => {
  const tree = renderer.create(
    <MyBooks books={books} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
