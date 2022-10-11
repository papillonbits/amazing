import { async, regular } from './InfoShowPage.int.story'

describe('<InfoShowPage />', () => {
  describe('Render', () => {
    test('must match async()', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
