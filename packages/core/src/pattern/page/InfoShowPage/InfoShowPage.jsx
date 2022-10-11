import { InfoShowTemplate } from '../../template/InfoShowTemplate'
import { defaultProps, propTypes } from './InfoShowPage.prop'

export function InfoShowPage() {
  return <InfoShowTemplate />
}

InfoShowPage.defaultProps = defaultProps

InfoShowPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default InfoShowPage
