import { MemoryRouter } from 'react-router-dom'
import { withTests } from '@storybook/addon-jest'
import { NotFoundTemplate } from '../NotFoundTemplate'
import results from '../../../../../../../.jest-test-results.json'

const props = {
  location: {
    pathname: 'fantastic-path-name',
  },
}

export default {
  title: 'Amazing/Template/NotFoundTemplate',
  component: NotFoundTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['NotFoundTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <MemoryRouter>
      <NotFoundTemplate {...props} />
    </MemoryRouter>
  )
}
