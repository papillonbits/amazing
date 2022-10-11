import { bindActionCreators } from 'redux'
import * as actionCreators from '../../action/actionCreators'
import { appState } from '../../../state/default'
import { getShowsData, getShows } from './index'
import { timeout, messageType } from '../../../library/constant'
import { alertTextApp } from '../../../library/constant/alertText/app'
import { alertTextListShows } from '../../../library/constant/alertText/listShows'

export const setAppCompleteStateThunk = () => async (dispatch) => {
  const { contextSetNavigationAction, contextSetProgressAction, uiSetListShowsAction } = bindActionCreators(actionCreators, dispatch)

  contextSetProgressAction({
    message: {
      text: alertTextListShows.action.set.progress,
      type: messageType.info,
    },
    isLoading: true,
  })

  const getShowsResponseData = await getShowsData({ dispatch })

  uiSetListShowsAction(getShows({ shows: getShowsResponseData }))

  contextSetNavigationAction(appState.context.navigation)

  contextSetProgressAction({
    message: {
      text: alertTextListShows.action.set.success,
      type: messageType.success,
    },
    isLoading: false,
  })

  setTimeout(() => {
    contextSetProgressAction({
      message: {
        text: alertTextApp.ready,
        type: messageType.success,
      },
      isLoading: false,
    })
  }, timeout.fetch)
}
