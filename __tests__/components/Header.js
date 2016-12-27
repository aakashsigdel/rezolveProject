import React from 'react'
import { Header } from '../../src/components/Header'

import renderer from 'react-test-renderer'

it('should render <Header /> correctly', () => {
  const tree = renderer.create(
    <Header search={{searchText: 'hello'}} mybooks={{books: []}}/>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
