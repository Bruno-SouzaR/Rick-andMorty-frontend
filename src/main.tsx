import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { GlobalStyle } from './theme/globalStyles'


createRoot(document.getElementById('root')!).render(
  <>
  <GlobalStyle />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  </>
)