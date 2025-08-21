import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './pages/inicial.jsx'
import Login from './pages/login.jsx'
import Registro from './pages/registro.jsx'
import Verificacao from './pages/verificacao.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<App />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/registro' element = {<Registro />} />
      <Route path = '/verificacao' element = {<Verificacao />} />
    </Routes>
  </BrowserRouter>,
)
