import React from 'react'
import { lazily } from 'react-lazily'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const { PageNotFound } = lazily(() => import('../pages/PageNotFound'))
const { Landing } = lazily(() => import('../pages/Landing'))

export const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
