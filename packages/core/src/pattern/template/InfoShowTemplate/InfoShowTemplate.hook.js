import { useSelector } from 'react-redux'
import { pageContent } from '../../../library/constant'

export function useInfoShowState() {
  const progress = useSelector(({ context }) => context.progress)

  const { showsObjects, search, edit } = useSelector(({ ui }) => ui.listShows)

  const editedShowObject = search?.showsObjects?.[edit.index] ?? showsObjects[edit.index]

  return {
    pageContent,
    progress,
    editedShowObject,
  }
}
