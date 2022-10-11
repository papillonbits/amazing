import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetListShowsSort(state, action) {
  const newSort = getSort({ currentSort: state.listShows.sort, newSort: action.payload.newSort })

  return {
    ...state,
    listShows: {
      ...state.listShows,
      showsObjects: sortObjects({ sort: newSort, objects: state.listShows.showsObjects }),
      search: {
        ...state.listShows.search,
        showsObjects: sortObjects({ sort: newSort, objects: state.listShows.search.showsObjects }),
      },
      sort: newSort,
    },
  }
}
