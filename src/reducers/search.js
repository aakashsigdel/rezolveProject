const initialState = {
  searchText: ''
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_CHANGE_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }

  return state
}

export default search
