import { showGenresDefault } from '../../../../../library/constant/showGenres'
import { showRatingsDefault } from '../../../../../library/constant/showRatings'

export function getListShowsObjectsByGenres({ objects, genres }) {
  if (!genres) {
    return objects
  }

  const selectedObjectGenresText = genres.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectGenresText === showGenresDefault[0].name) {
    return objects
  }

  let objectsByGenres = []

  objectsByGenres = [
    ...objectsByGenres,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => filterObject.genres.includes(selectedObjectGenresText)),
  ]

  return objectsByGenres?.filter((item, position) => objectsByGenres.indexOf(item) === position)
}

export function getListShowsObjectsByRating({ objects, rating }) {
  if (!rating) {
    return objects
  }

  const selectedObjectRatingText = rating.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectRatingText === showRatingsDefault[0].name) {
    return objects
  }

  let objectsByRating = []

  objectsByRating = [
    ...objectsByRating,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => filterObject.rating >= selectedObjectRatingText.replace('+', '')),
  ]

  return objectsByRating?.filter((item, position) => objectsByRating.indexOf(item) === position)
}

export function getListShowsObjectsByName({ objects, name }) {
  if (!name) {
    return objects
  }

  let objectsByName = []

  objectsByName = [...objectsByName, ...objects.filter((filterObject) => filterObject.name.toLowerCase().includes(name.toLowerCase()))]

  return objectsByName.filter((item, position) => objectsByName.indexOf(item) === position)
}

export function getListShowsSearch({ search, newSearchShowsObjects }) {
  let newSearch

  newSearch = {
    genres: search?.genres,
    rating: search?.rating,
    name: search?.name,
    showsObjects: !search
      ? null
      : getListShowsObjectsByGenres({
          objects: newSearchShowsObjects,
          genres: search?.genres,
        }),
  }

  newSearch = {
    genres: search?.genres,
    rating: search?.rating,
    name: search?.name,
    showsObjects: !search
      ? newSearch?.showsObjects
      : getListShowsObjectsByRating({
          objects: newSearch?.showsObjects || newSearchShowsObjects,
          rating: search?.rating,
        }),
  }

  newSearch = {
    genres: search?.genres,
    rating: search?.rating,
    name: search?.name,
    showsObjects: !search
      ? newSearch?.showsObjects
      : getListShowsObjectsByName({
          objects: newSearch?.showsObjects || newSearchShowsObjects,
          name: search?.name,
        }),
  }

  return newSearch
}
