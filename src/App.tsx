import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes/router'

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="oneshop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | one shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
