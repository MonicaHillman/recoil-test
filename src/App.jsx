
import './App.css'
import Main from './components/Main/Main'
import Cadastro from './components/Cadastro/Cadastro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App