import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { appRoutes } from './pages/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          {appRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.element/>}
            />
          ))}
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
