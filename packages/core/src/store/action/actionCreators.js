import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_SET_LIST_SHOWS_EDIT,
  UI_SET_LIST_SHOWS_SORT,
  UI_SET_LIST_SHOWS_SEARCH,
  UI_SET_LIST_SHOWS_PAGINATION,
  UI_SET_LIST_SHOWS,
} from './actionTypes'

export const contextSetNavigationAction = (payload) => ({ type: CONTEXT_SET_NAVIGATION, payload })
export const contextSetProgressAction = (payload) => ({ type: CONTEXT_SET_PROGRESS, payload })
export const uiSetListShowsEditAction = (payload) => ({ type: UI_SET_LIST_SHOWS_EDIT, payload })
export const uiSetListShowsSortAction = (payload) => ({ type: UI_SET_LIST_SHOWS_SORT, payload })
export const uiSetListShowsSearchAction = (payload) => ({ type: UI_SET_LIST_SHOWS_SEARCH, payload })
export const uiSetListShowsPaginationAction = (payload) => ({ type: UI_SET_LIST_SHOWS_PAGINATION, payload })
export const uiSetListShowsAction = (payload) => ({ type: UI_SET_LIST_SHOWS, payload })
