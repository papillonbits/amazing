import { sortObjects } from '@papillonbits/library/sort'
import { getPagination } from '@papillonbits/library/pagination'
import { getListShowsObjectsByGenres, getListShowsObjectsByRating, getListShowsObjectsByName } from '../get'

export function getListShowsSearch({ state, action }) {
  let newSearch

  newSearch = {
    genres: action.payload?.genres ?? state.listShows.search?.genres,
    rating: action.payload?.rating ?? state.listShows.search?.rating,
    name: action.payload?.name ?? state.listShows.search?.name,
    showsObjects:
      !action.payload.genres && !state.listShows.search
        ? null
        : getListShowsObjectsByGenres({
            objects: state.listShows.showsObjects,
            genres: action.payload?.genres,
          }),
  }

  newSearch = {
    genres: action.payload?.genres ?? state.listShows.search?.genres,
    rating: action.payload?.rating ?? state.listShows.search?.rating,
    name: action.payload?.name ?? state.listShows.search?.name,
    showsObjects:
      !action.payload.rating && !state.listShows.search
        ? newSearch.showsObjects || state.listShows.showsObjects
        : getListShowsObjectsByRating({
            objects: newSearch.showsObjects || state.listShows.showsObjects,
            rating: action.payload?.rating,
          }),
  }

  newSearch = {
    genres: action.payload?.genres ?? state.listShows.search?.genres,
    rating: action.payload?.rating ?? state.listShows.search?.rating,
    name: action.payload?.name ?? state.listShows.search?.name,
    showsObjects:
      !action.payload.name && !state.listShows.search
        ? newSearch.showsObjects || state.listShows.showsObjects
        : getListShowsObjectsByName({
            objects: newSearch.showsObjects || state.listShows.showsObjects,
            name: action.payload?.name,
          }),
  }

  return newSearch
}

export function uiSetListShowsSearch(state, action) {
  const newSearch = getListShowsSearch({ state, action })

  const newPagination = getPagination({
    searchObjects: newSearch.showsObjects,
    regularObjects: state.listShows.showsObjects,
    pagination: state.listShows.pagination,
  })

  return {
    ...state,
    listShows: {
      ...state.listShows,
      showsObjects: sortObjects({ sort: state.listShows.sort, objects: state.listShows.showsObjects }),
      pagination: newPagination,
      search: {
        ...newSearch,
        showsObjects: sortObjects({ sort: state.listShows.sort, objects: newSearch.showsObjects }),
      },
    },
  }
}
