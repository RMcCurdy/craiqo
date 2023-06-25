import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import theme from './theme'

import { PageRoutes } from './routes/PageRoutes'
import { Fallback } from './components/Fallback'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Suspense fallback={<Fallback />}>
        <PageRoutes />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
