import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { paginate } from '@papillonbits/library/pagination'
import { sortDefault } from '@papillonbits/library/sort'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, messageType, pageContent } from '../../../library/constant'
import { alertTextListShows } from '../../../library/constant/alertText/listShows'

export function useListShowState() {
  const navigate = useNavigate()

  const {
    contextSetNavigationAction,
    uiSetListShowsEditAction,
    uiSetListShowsSortAction,
    uiSetListShowsSearchAction,
    uiSetListShowsPaginationAction,
    contextSetProgressRegularThunk,
  } = useBindActionCreators()

  const navigation = useSelector(({ context }) => context.navigation)
  const progress = useSelector(({ context }) => context.progress)

  const {
    showsObjects,
    pagination: { pageSize, pageNumber, currentPage },
    sort,
    search,
  } = useSelector(({ ui }) => ui.listShows)

  const paginatedRandomShowsObjects = paginate({
    array: search.showsObjects || showsObjects,
    pageSize,
    pageNumber,
  })

  const paginatedRandomShowsObjectsNamesValues = paginatedRandomShowsObjects.map((showsObject) =>
    (({
      id,
      isSelected,
      url,
      name,
      type,
      language,
      genres,
      runtime,
      averageRuntime,
      premiered,
      ended,
      officialSite,
      schedule,
      rating,
      network,
      weight,
      webChannel,
      dvdCountry,
      externals,
      image,
      summary,
      updated,
      _links,
      ...rest
    }) => ({
      names: Object.keys({
        id,
        name,
        genres,
        rating,
        network,
        ...rest,
      }),
      values: Object.values({
        id,
        name,
        genres,
        rating,
        network,
        ...rest,
      }),
    }))(showsObject),
  )

  /* istanbul ignore next */
  function searchGenresOnClick(newGenres) {
    uiSetListShowsSearchAction({ genres: newGenres.items, rating: search.rating, name: search.name })
  }

  /* istanbul ignore next */
  function searchRatingOnClick(newRating) {
    uiSetListShowsSearchAction({ genres: search.genres, rating: newRating.items, name: search.name })
  }

  /* istanbul ignore next */
  function searchNameOnChange(event) {
    uiSetListShowsSearchAction({
      genres: search.genres,
      rating: search.rating,
      name: event.target.value,
    })
  }

  /* istanbul ignore next */
  function searchNameOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetListShowsSearchAction({
        genres: search.genres,
        rating: search.rating,
        name: event.target.value,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListShowsSearchAction({
        genres: search.genres,
        rating: search.rating,
        name: null,
      })
      return
    }

    uiSetListShowsSearchAction({
      genres: search.genres,
      rating: search.rating,
      name: search.name,
    })
  }

  /* istanbul ignore next */
  function searchNameOnFocus() {
    uiSetListShowsSearchAction({
      genres: search.genres,
      rating: search.rating,
      name: search.name,
    })
  }

  /* istanbul ignore next */
  function searchNameOnBlur() {}

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetListShowsPaginationAction({ paginationAction })
    contextSetProgressRegularThunk({ message: { text: alertTextListShows.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function showsObjectsFlexGridOnClick(newSort) {
    uiSetListShowsSortAction({ newSort })
  }

  /* istanbul ignore next */
  function showsObjectsFlexGridOnDoubleClick(objectIndex) {
    const paginatedIndex = pageSize * currentPage.currentIndex + objectIndex

    uiSetListShowsEditAction({ index: paginatedIndex })

    const newNavigation = {
      ...navigation,
      items: [
        { ...navigation.items[0], isSelected: false },
        { ...navigation.items[1], isSelected: true },
      ],
    }
    contextSetNavigationAction(newNavigation)
    navigate(process.env.BASE_URL ? `${'..'}${process.env.BASE_URL}${'/info'}` : '../info', { replace: true })
  }

  return {
    alertTextListShows,
    pageContent,
    progress,
    currentPage,
    sort: sort || sortDefault,
    search,
    paginatedRandomShowsObjectsNamesValues,
    searchGenresOnClick,
    searchRatingOnClick,
    searchNameOnChange,
    searchNameOnKeyUp,
    searchNameOnFocus,
    searchNameOnBlur,
    paginationOnClick,
    showsObjectsFlexGridOnClick,
    showsObjectsFlexGridOnDoubleClick,
  }
}
