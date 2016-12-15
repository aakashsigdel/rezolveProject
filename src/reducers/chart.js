export const initialState = {
  year: 2016
}

const chart = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CHART_YEAR':
      return {
        year: action.year
      }
  }

  return state
}

export default chart
