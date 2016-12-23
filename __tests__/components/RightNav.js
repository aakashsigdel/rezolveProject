import React from 'react'
import { RecentSearch, LeftNav } from '../../src/components/LeftNav'

import renderer from 'react-test-renderer'

describe('<LeftNav /> component', () => {
  it('should render <LeftNav /> correctly', () => {
    const recentSearches = ['sun', 'moon', 'earth']
    const tree = renderer.create(
      <LeftNav recentSearches={recentSearches} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render <RecentSearch /> correctly', () => {
    const component = renderer.create(
      <RecentSearch searchText={'hello'} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
