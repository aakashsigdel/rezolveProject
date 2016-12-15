import reducer, { initialState } from '../../src/reducers/chart'

describe('chart reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle CHANGE_CHART_YEAR', () => {
    expect(
      reducer(initialState, {
        type: 'CHANGE_CHART_YEAR',
        year: 2017
      })
    ).toEqual({year: 2017})
  })
})
