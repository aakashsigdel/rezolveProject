import React from 'react'
import { RecentSearch, RightNav } from '../../src/components/RightNav'

import renderer from 'react-test-renderer'

describe('<RightNav /> component', () => {
  it('should render <RightNav /> correctly', () => {
    const recentSearches = ['sun', 'moon', 'earth']
    const tree = renderer.create(
      <RightNav recentSearches={recentSearches} />
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
