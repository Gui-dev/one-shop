import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { queryClient } from '@/lib/react-query'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes/router'

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="oneshop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | one shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
