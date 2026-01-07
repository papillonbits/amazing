import { lazy, Suspense } from 'react'
import { propTypes } from './ListShowPage.prop'

const LazyListShowPage = lazy(() => import('./ListShowPage'))

export function AsyncListShowPage() {
  return (
    <Suspense fallback={null}>
      <LazyListShowPage />
    </Suspense>
  )
}

AsyncListShowPage.propTypes = propTypes
