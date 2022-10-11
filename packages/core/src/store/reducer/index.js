import { combineReducers } from 'redux'
import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_SET_LIST_SHOWS_EDIT,
  UI_SET_LIST_SHOWS_SORT,
  UI_SET_LIST_SHOWS_SEARCH,
  UI_SET_LIST_SHOWS_PAGINATION,
  UI_SET_LIST_SHOWS,
} from '../action/actionTypes'

import { contextSetNavigation } from './context/navigation/set'
import { contextSetProgress } from './context/progress/set'

import { uiSetListShowsEdit } from './ui/listShows/edit'
import { uiSetListShowsSort } from './ui/listShows/sort'
import { uiSetListShowsSearch } from './ui/listShows/search'
import { uiSetListShowsPagination } from './ui/listShows/pagination'
import { uiSetListShows } from './ui/listShows/set'

export const getAppReducer = () =>
  combineReducers({
    // eslint-disable-next-line default-param-last
    context: (state = {}, action) => {
      switch (action.type) {
        case CONTEXT_SET_NAVIGATION:
          return contextSetNavigation(state, action)
        case CONTEXT_SET_PROGRESS:
          return contextSetProgress(state, action)
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    ui: (state = {}, action) => {
      switch (action.type) {
        case UI_SET_LIST_SHOWS_EDIT:
          return uiSetListShowsEdit(state, action)
        case UI_SET_LIST_SHOWS_SORT:
          return uiSetListShowsSort(state, action)
        case UI_SET_LIST_SHOWS_SEARCH:
          return uiSetListShowsSearch(state, action)
        case UI_SET_LIST_SHOWS_PAGINATION:
          return uiSetListShowsPagination(state, action)
        case UI_SET_LIST_SHOWS:
          return uiSetListShows(state, action)
        default:
          return state
      }
    },
  })
