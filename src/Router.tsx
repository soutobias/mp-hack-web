import { Route, Routes } from 'react-router-dom'
import { DefaulLayout } from './layouts/DefaultLayout/index'
import { Home } from './pages/Home'
import { ExternalHtml } from './pages/Dashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaulLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ExternalHtml />} />
      </Route>
    </Routes>
  )
}
