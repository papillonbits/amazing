import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { InfoShowTemplate } from '../index'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Amazing/Template/InfoShowTemplate',
  component: InfoShowTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['InfoShowTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <InfoShowTemplate />
      </MemoryRouter>
    </Provider>
  )
}
