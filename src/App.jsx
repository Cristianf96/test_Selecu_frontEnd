import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { authLogin, error404, home, books } from './Pages';
import AuthProvider from './Contexts/AuthContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/test_selecu_frontSelecu" element={authLogin} />
            <Route path="/test_selecu_frontSelecu/Home" element={home} />
            <Route path="/test_selecu_frontSelecu/Books" element={books} />
            <Route path="/*" element={error404} />
          </Routes>
        </AuthProvider>
      </BrowserRouter >
    </>
  )
}

export default App
