import { ColorModeScript } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import theme from './theme'

import { PageRoutes } from './routes/PageRoutes'
import { Navbar } from './components/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <PageRoutes />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)
