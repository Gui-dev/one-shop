import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/router'

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | one shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
