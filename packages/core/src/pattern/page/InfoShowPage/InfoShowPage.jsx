import { InfoShowTemplate } from '../../template/InfoShowTemplate'
import { propTypes } from './InfoShowPage.prop'

export function InfoShowPage() {
  return <InfoShowTemplate />
}

InfoShowPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default InfoShowPage
