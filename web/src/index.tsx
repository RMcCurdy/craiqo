import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import theme from './theme'

import { PageRoutes } from './routes/PageRoutes'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col min-h-screen font-craiqo">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            <PageRoutes />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
