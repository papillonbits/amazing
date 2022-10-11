export function uiSetListShowsEdit(state, action) {
  return {
    ...state,
    listShows: {
      ...state.listShows,
      edit: { ...action.payload },
    },
  }
}
