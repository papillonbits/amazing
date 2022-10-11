import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncInfoShowPage } from '../AsyncInfoShowPage'
import { InfoShowPage } from '../InfoShowPage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Amazing/Page/InfoShowPage',
  component: InfoShowPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['InfoShowPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <AsyncInfoShowPage />
      </BrowserRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <InfoShowPage />
      </BrowserRouter>
    </Provider>
  )
}
