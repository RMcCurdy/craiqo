import { lazily } from 'react-lazily'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const { PageNotFound } = lazily(() => import('../pages/PageNotFound'))
const { Landing } = lazily(() => import('../pages/Landing'))
const { Planner } = lazily(() => import('../pages/Planner'))
const { About } = lazily(() => import('../pages/About'))
const { Navbar } = lazily(() => import('../components/Navbar'))
const { Footer } = lazily(() => import('../components/Footer'))

export const PageRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-craiqo">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}
