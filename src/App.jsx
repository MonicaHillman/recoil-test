
import './App.css'
import Main from './pages/Main/Main'
import Cadastro from './pages/Cadastro/Cadastro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditarContato from './pages/EditarContato/EditarContato'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="/editar/:id" element={<EditarContato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App