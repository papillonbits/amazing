import { getCurrentIndex } from '@papillonbits/library/array'
import { paginationActionTypes, setNewIndexItemsOnMove } from '@papillonbits/library/pagination'

export function uiSetListShowsPagination(state, action) {
  let newIndexItemsOnBackwards
  let newIndexItemsOnBackwardsCurrentIndex
  let newIndexItemsOnForward
  let newIndexItemsOnForwardCurrentIndex

  switch (action.payload.paginationAction) {
    case paginationActionTypes.onBackwards:
      newIndexItemsOnBackwards = setNewIndexItemsOnMove({
        onBackwards: true,
        currentPage: state.listShows.pagination.currentPage,
      })
      newIndexItemsOnBackwardsCurrentIndex = getCurrentIndex(newIndexItemsOnBackwards)

      return {
        ...state,
        listShows: {
          ...state.listShows,
          pagination: {
            ...state.listShows.pagination,
            pageNumber: newIndexItemsOnBackwardsCurrentIndex + 1,
            currentPage: {
              indexItems: newIndexItemsOnBackwards,
              currentIndex: newIndexItemsOnBackwardsCurrentIndex,
              canMoveBackwards: newIndexItemsOnBackwardsCurrentIndex > 0,
              canMoveForward: newIndexItemsOnBackwardsCurrentIndex < newIndexItemsOnBackwards.length - 1,
            },
          },
        },
      }
    case paginationActionTypes.onForward:
      newIndexItemsOnForward = setNewIndexItemsOnMove({
        onForward: true,
        currentPage: state.listShows.pagination.currentPage,
      })
      newIndexItemsOnForwardCurrentIndex = getCurrentIndex(newIndexItemsOnForward)

      return {
        ...state,
        listShows: {
          ...state.listShows,
          pagination: {
            ...state.listShows.pagination,
            pageNumber: newIndexItemsOnForwardCurrentIndex + 1,
            currentPage: {
              indexItems: newIndexItemsOnForward,
              currentIndex: newIndexItemsOnForwardCurrentIndex,
              canMoveBackwards: newIndexItemsOnForwardCurrentIndex > 0,
              canMoveForward: newIndexItemsOnForwardCurrentIndex < newIndexItemsOnForward.length - 1,
            },
          },
        },
      }
    default:
      throw new Error()
  }
}
