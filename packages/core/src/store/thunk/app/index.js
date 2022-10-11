import { bindActionCreators } from 'redux'
import { getCurrentIndex, getIndexItems, getRange, getItemsDefaultSelected } from '@papillonbits/library/array'
import { sortDefault, sortObjects } from '@papillonbits/library/sort'
import { messageType, pageSize, pageNumber } from '../../../library/constant'
import { showGenres, showGenresDefault } from '../../../library/constant/showGenres'
import { showRatings, showRatingsDefault } from '../../../library/constant/showRatings'
import * as actionCreators from '../../action/actionCreators'
import showsStaticData from './showsStaticData.json'

export async function getShowsData({ dispatch }) {
  const { contextSetProgressAction } = bindActionCreators(actionCreators, dispatch)

  contextSetProgressAction({
    message: {
      text: 'Collecting shows...',
      type: messageType.info,
    },
    isLoading: true,
  })

  let showsResponse
  let showsResponseData

  try {
    showsResponse = await window.fetch('https://api.tvmaze.com/shows')
    showsResponseData = await showsResponse.json()
  } catch (err) {
    return showsStaticData
  } finally {
    contextSetProgressAction({
      message: {
        text: showsResponseData?.length !== 0 ? 'Successfully collected shows!' : 'There are no shows yet!',
        type: showsResponseData?.length !== 0 ? messageType.success : messageType.warning,
      },
      isLoading: false,
    })
  }

  if (showsResponseData?.length === 0) {
    return showsStaticData
  }

  return showsResponseData
}

export function getShows({ shows }) {
  const showsObjects = sortObjects({
    sort: sortDefault,
    objects: shows,
  })

  const items = getRange({
    range: Math.ceil(showsObjects.length / pageSize.shows),
  }).map((_, index) => ({
    isCurrent: index === pageNumber - 1,
  }))

  const currentPage = {
    indexItems: getIndexItems(items),
    currentIndex: getCurrentIndex(getIndexItems(items)),
    canMoveBackwards: getCurrentIndex(getIndexItems(items)) > 0,
    canMoveForward: getCurrentIndex(getIndexItems(items)) < getIndexItems(items).length - 1,
  }

  return {
    pagination: {
      pageSize: pageSize.shows,
      pageNumber,
      currentPage,
    },
    showsObjects: showsObjects.map((showsObject) => ({
      ...showsObject,
      genres: showsObject.genres.toString().replaceAll(',', ' | '),
      rating: showsObject.rating.average,
      network: showsObject?.network?.name,
    })),
    search: {
      genres: getItemsDefaultSelected({ defaultItems: showGenresDefault, items: showGenres }),
      rating: getItemsDefaultSelected({ defaultItems: showRatingsDefault, items: showRatings }),
      showsObjects: null,
    },
    sort: sortDefault,
    edit: {},
  }
}
