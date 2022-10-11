const rootPath = '/'
const listShowPath = '/list'
const infoShowPath = '/info'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
export const listShowPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${listShowPath}` : listShowPath
export const infoShowPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${infoShowPath}` : infoShowPath

export const startPagePath = listShowPagePath
