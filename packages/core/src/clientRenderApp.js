/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { primer } from '@papillonbits/components'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonbits/library/a11y'
import { startPagePath } from './route/path'
import { appRootRoute, listShowPageRoute, infoShowPageRoute, notFoundPageRoute } from './route'
import { clientAppStore } from './store/client'

/* istanbul ignore next */
export function App() {
  const { ErrorBoundary } = primer

  return (
    <ErrorBoundary>
      <Provider store={clientAppStore}>
        <BrowserRouter>
          <Routes>
            <Route path={appRootRoute.path} element={<Navigate to={startPagePath} />} />
            <Route path={listShowPageRoute.path} element={listShowPageRoute.clientComponent()} />
            <Route path={infoShowPageRoute.path} element={infoShowPageRoute.clientComponent()} />
            <Route path="*" element={notFoundPageRoute.clientComponent()} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.createRoot(document.getElementById('app')).render(<App />)

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
