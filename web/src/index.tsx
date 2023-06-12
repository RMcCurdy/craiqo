import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import theme from './theme'

import { PageRoutes } from './routes/PageRoutes'
import { Navbar } from './components/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="h-screen font-craiqo">
          <Navbar />
          <PageRoutes />
        </div>
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
