import React from 'react'
import BookChartNav from '../../src/components/BookChartNav'

import renderer from 'react-test-renderer'

it('should render <BookChartNav /> correctly', () => {
  const tree = renderer.create(
    <BookChartNav />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
