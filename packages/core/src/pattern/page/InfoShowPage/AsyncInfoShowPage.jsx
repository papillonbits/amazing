import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './InfoShowPage.prop'

const LazyInfoShowPage = lazy(() => import('./InfoShowPage'))

export function AsyncInfoShowPage() {
  return (
    <Suspense fallback={null}>
      <LazyInfoShowPage />
    </Suspense>
  )
}

AsyncInfoShowPage.defaultProps = defaultProps

AsyncInfoShowPage.propTypes = propTypes
