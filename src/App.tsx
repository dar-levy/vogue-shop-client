import './App.css'
import {Container, createTheme, ThemeProvider} from "@mui/material";
import Catalog from "./components/catalog/Catalog.tsx";
import {useEffect, useState} from "react";
import Header from "./components/Header.tsx";
import {ToastContainer} from "react-toastify";
import {Navigate, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound.tsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
    })

    function handleThemeChange() {
    setDarkMode(!darkMode);
    }

    useEffect(() => {
        document.body.style.backgroundColor = theme.palette.background.default;
    }, [theme.palette.background.default]);


    return (<>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <Container>
            <Routes>
              {/*<Route path="/register" element={<RegisterForm />} />*/}
              {/*<Route path="/login" element={<LoginForm />} />*/}
              {/*<Route path="/logout" element={<Logout />} />*/}
              {/*<Route*/}
              {/*    path="/profiles/:id"*/}
              {/*    element={*/}
              {/*      <ProtectedRoute path="/profiles/:id" component={ProfileForm} />*/}
              {/*    }*/}
              {/*/>*/}
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/" element={<Navigate to="/catalog" />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
          </Container>
        </ThemeProvider>
        </>
  )
}

export default App
