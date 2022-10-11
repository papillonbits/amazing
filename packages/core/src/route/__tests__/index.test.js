/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireListShowPage = () => {
  const listShowPagePath = '../../pattern/page/ListShowPage'
  jest.mock(listShowPagePath, () => 'ListShowPage')
  return require(listShowPagePath)
}

const mockRequireInfoShowPage = () => {
  const infoShowPagePath = '../../pattern/page/InfoShowPage'
  jest.mock(infoShowPagePath, () => 'InfoShowPage')
  return require(infoShowPagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => 'NotFoundPage')
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => ({
    appRootPath: 'fantastic-app-root-path',
    listShowPagePath: 'fantastic-list-show-page-path',
    infoShowPagePath: 'fantastic-info-show-page-path',
  }))
  return require(pathPath)
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
