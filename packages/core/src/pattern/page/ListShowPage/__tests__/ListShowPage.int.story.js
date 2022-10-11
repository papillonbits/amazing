import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncListShowPage } from '../AsyncListShowPage'
import { ListShowPage } from '../ListShowPage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Amazing/Page/ListShowPage',
  component: ListShowPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['ListShowPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <AsyncListShowPage />
      </BrowserRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <ListShowPage />
      </BrowserRouter>
    </Provider>
  )
}
