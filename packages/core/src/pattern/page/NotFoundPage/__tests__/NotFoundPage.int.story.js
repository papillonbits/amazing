import { MemoryRouter } from 'react-router-dom'
import { withTests } from '@storybook/addon-jest'
import { AsyncNotFoundPage } from '../AsyncNotFoundPage'
import { NotFoundPage } from '../NotFoundPage'
import results from '../../../../../../../.jest-test-results.json'

const location = {
  pathname: 'fantastic-path-name',
}

export default {
  title: 'Amazing/Page/NotFoundPage',
  component: NotFoundPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['NotFoundPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <MemoryRouter>
      <AsyncNotFoundPage location={location} />
    </MemoryRouter>
  )
}

export function regular() {
  return (
    <MemoryRouter>
      <NotFoundPage location={location} />
    </MemoryRouter>
  )
}
