import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './InfoShowTemplate.prop'
import { useInfoShowState } from './InfoShowTemplate.hook'
import styles from './InfoShowTemplate.scss'

export function InfoShowTemplate() {
  const {
    Alert: { Alert },
    Form: {
      Input: { Input, inputState },
    },
    Label,
  } = primer

  const {
    container,
    alert,
    content,
    contentDisplay,
    contentDisplayEdit,
    contentDisplayEditField,
    contentDisplayEditFieldLabel,
    contentDisplayEditFieldInput,
  } = styles

  const {
    pageContent: {
      infoShow: { subheadHeadingLeft, subheadHeadingRight },
    },
    progress,
    editedShowObject,
  } = useInfoShowState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      <div className={content}>
        <div className={contentDisplay}>
          <div className={contentDisplayEdit}>
            <div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Name" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={editedShowObject?.name || ''}
                  ariaAttr={{ label: 'Type in a name' }}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Genres" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={editedShowObject?.genres || ''}
                  ariaAttr={{ label: 'Type in genres' }}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Rating" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={editedShowObject?.rating || ''}
                  ariaAttr={{ label: 'Type in rating' }}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
            <div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Network" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={editedShowObject?.network || ''}
                  ariaAttr={{ label: 'Type in network' }}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Status" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={editedShowObject?.status || ''}
                  ariaAttr={{ label: 'Type in status' }}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

InfoShowTemplate.defaultProps = defaultProps

InfoShowTemplate.propTypes = propTypes
