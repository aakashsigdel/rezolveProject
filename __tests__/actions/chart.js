import { changeChartYear } from '../../src/actions/chart'
describe('chart actions', () => {
  it('shoudl create a CHAGE_CHART_YEAR action', () => {
    const year = 2016
    const expectedAction = {
      type: 'CHANGE_CHART_YEAR',
      year
    }

    expect(changeChartYear(year)).toEqual(expectedAction)
  })
})
