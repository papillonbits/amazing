/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireListShowPage = () => {
  jest.mock('../../pattern/page/ListShowPage', () => 'ListShowPage')
  return require('../../pattern/page/ListShowPage')
}

const mockRequireInfoShowPage = () => {
  jest.mock('../../pattern/page/InfoShowPage', () => 'InfoShowPage')
  return require('../../pattern/page/InfoShowPage')
}

const mockRequireNotFoundPage = () => {
  jest.mock('../../pattern/page/NotFoundPage', () => 'NotFoundPage')
  return require('../../pattern/page/NotFoundPage')
}

const mockRequirePath = () => {
  jest.mock('../path', () => ({
    appRootPath: 'fantastic-app-root-path',
    listShowPagePath: 'fantastic-list-show-page-path',
    infoShowPagePath: 'fantastic-info-show-page-path',
  }))
  return require('../path')
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => require('../index')

  describe('appRootRoute', () => {
    const expectedAppRootRoute = {
      path: path.appRootPath,
    }

    test('must return app root route object', () => {
      const { appRootRoute } = requireIndex()
      expect(appRootRoute).toEqual(expectedAppRootRoute)
    })
  })

  describe('listShowPageRoute', () => {
    const listShowPage = mockRequireListShowPage()

    const expectedListShowPageRoute = {
      path: path.listShowPagePath,
      clientComponent: listShowPage.AsyncListShowPage,
      serverComponent: listShowPage.ListShowPage,
    }

    test('must return list show page route object', () => {
      const { listShowPageRoute } = requireIndex()
      expect(listShowPageRoute).toEqual(expectedListShowPageRoute)
    })
  })

  describe('infoShowPageRoute', () => {
    const infoShowPage = mockRequireInfoShowPage()

    const expectedInfoShowPageRoute = {
      path: path.infoShowPagePath,
      clientComponent: infoShowPage.AsyncInfoShowPage,
      serverComponent: infoShowPage.InfoShowPage,
    }

    test('must return info show page route object', () => {
      const { infoShowPageRoute } = requireIndex()
      expect(infoShowPageRoute).toEqual(expectedInfoShowPageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
