import React from 'react'
import { RightNav } from '../../src/components/RightNav'

import renderer from 'react-test-renderer'

it('should render <RightNav /> correctly', () => {
  const recentSearches = ['sun', 'moon', 'earth']
  const tree = renderer.create(
    <RightNav recentSearches={recentSearches} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
