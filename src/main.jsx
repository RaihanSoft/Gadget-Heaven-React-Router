import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { Helmet } from 'react-helmet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gadgets-Home</title>
      <link rel="canonical" href="../src/assets/favicon-16x16.png" />
    </Helmet>
  </StrictMode>,
)
                                                                                                                                                                                                