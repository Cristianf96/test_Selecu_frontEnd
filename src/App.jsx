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
            <Route path="/test_Selecu_frontEnd" element={authLogin} />
            <Route path="/test_Selecu_frontEnd/Home" element={home} />
            <Route path="/test_Selecu_frontEnd/Books" element={books} />
            <Route path="/*" element={error404} />
          </Routes>
        </AuthProvider>
      </BrowserRouter >
    </>
  )
}

export default App
