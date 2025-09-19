import { version } from '../lerna.json'
import { setStorybookManagerSetup } from '@papillonbits/setup/storybook/managerSetup'

setStorybookManagerSetup({
  panelPosition: 'right',
  theme: {
    base: 'light',
    brandTitle: `Amazing v${version}`,
    brandUrl: 'https://github.com/papillonbits/amazing',
    brandImage: 'https://avatars2.githubusercontent.com/u/81188645',
  },
})
