import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ListShowPage.prop'

const LazyListShowPage = lazy(() => import('./ListShowPage'))

export function AsyncListShowPage() {
  return (
    <Suspense fallback={null}>
      <LazyListShowPage />
    </Suspense>
  )
}

AsyncListShowPage.defaultProps = defaultProps

AsyncListShowPage.propTypes = propTypes
