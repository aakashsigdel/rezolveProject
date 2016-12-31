export const initialState = {
  searchText: '',
  recentSearches: []
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_CHANGE_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    case 'SEARCH_WILL_SEARCH': {
      const recentSearches = state.recentSearches.length > 10
        ? [action.searchText, ...state.recentSearches.slice(0, 10)]
        : [action.searchText, ...state.recentSearches]
      return {
        ...state,
        recentSearches
      }
    }
  }

  return state
}

export default search
