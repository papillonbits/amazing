export function uiSetListShows(state, action) {
  return {
    ...state,
    listShows: action.payload,
  }
}
