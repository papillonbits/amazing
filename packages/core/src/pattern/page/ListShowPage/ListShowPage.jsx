import { ListShowTemplate } from '../../template/ListShowTemplate'
import { propTypes } from './ListShowPage.prop'

export function ListShowPage() {
  return <ListShowTemplate />
}

ListShowPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ListShowPage
