import { async, regular } from './ListShowPage.int.story'

describe('<ListShowPage />', () => {
  describe('Render', () => {
    test('must match async()', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
