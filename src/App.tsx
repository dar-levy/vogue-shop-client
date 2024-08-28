import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import agent from "./services/agent.ts";
import {useStoreContext} from "./context/StoreContext.tsx";
import Loading from './components/Loading.tsx';
import AppRoutes from "./router/Routes.tsx";
import * as basket from "./services/basketService.ts"
import logger from "./services/logService.ts"

function App() {
  const { setBasket, isAuthenticated } = useStoreContext();
  const [loading, setLoading] = useState(true);

  // Check localStorage for dark mode preference on mount
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
    setBasket(agent.Basket.get());
    setLoading(false);
    // try {
    //   const { data } = await basket.get()
    //   setBasket(data)
    //   setLoading(false)
    // } catch (err) {
    //   logger.log(err)
    //   setLoading(false)
    // }
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
