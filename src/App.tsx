import './App.css';
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Catalog from "./components/catalog/Catalog.tsx";
import { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound.tsx';
import RegisterForm from "./components/RegisterForm.tsx";
import LogoutForm from "./components/LogoutForm.tsx";
import LoginForm from './components/LoginForm.tsx';
import Cookies from 'js-cookie';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    const sessionCookie = Cookies.get('sessionId'); // Assuming the session cookie is named 'sessionId'
    if (sessionCookie) {
      setIsAuthenticated(true);
    }
  }, [theme.palette.background.default]);

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
      <>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <Container>
            <Routes>
              {isAuthenticated ? (
                  <>
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/logout" element={<LogoutForm />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/" element={<Navigate to="/catalog" />} />
                    <Route path="*" element={<Navigate to="/not-found" />} />
                  </>
              ) : (
                  <>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                  </>
              )}
              <Route path="*" element={<Navigate to={isAuthenticated ? "/catalog" : "/login"} />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </>
  );
}

export default App;
