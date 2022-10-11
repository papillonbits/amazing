import { AsyncListShowPage, ListShowPage } from '../pattern/page/ListShowPage'
import { AsyncInfoShowPage, InfoShowPage } from '../pattern/page/InfoShowPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath, listShowPagePath, infoShowPagePath } from './path'

export const appRootRoute = {
  path: appRootPath,
}

export const listShowPageRoute = {
  path: listShowPagePath,
  clientComponent: AsyncListShowPage,
  serverComponent: ListShowPage,
}

export const infoShowPageRoute = {
  path: infoShowPagePath,
  clientComponent: AsyncInfoShowPage,
  serverComponent: InfoShowPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
