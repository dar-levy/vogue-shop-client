import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useStoreContext} from "./context/StoreContext.tsx";
import Loading from './components/Loading.tsx';
import AppRoutes from "./router/Routes.tsx";
import { getBasket } from './services/basketService.ts';

function App() {
  const { setBasket, isAuthenticated } = useStoreContext();
  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';  // Default to false if not found
  });

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
    const fetchBasket = async () => {
        try {
          const { data } = await getBasket()
          setBasket(data)
          setLoading(false)
        } catch (err) {
          setLoading(false)
        }
    }
    
    fetchBasket();
  }, []);

  function handleThemeChange() {
    setDarkMode(prevMode => {
      localStorage.setItem('darkMode', String(!prevMode));  // Save the mode to localStorage
      return !prevMode;
    });
  }

  if (loading) return <Loading message='Initializing app...' />

  return (
      <>
        <ThemeProvider theme={theme}>
          <ToastContainer autoClose={2000} theme='colored' />
          <CssBaseline />
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} isAuthenticated={isAuthenticated} />
          <Container>
            <AppRoutes />
          </Container>
        </ThemeProvider>
      </>
  );
}

export default App;
