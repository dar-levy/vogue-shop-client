import './App.css'
import {Container, createTheme, ThemeProvider} from "@mui/material";
import Catalog from "./components/catalog/Catalog.tsx";
import {useEffect, useState} from "react";
import Header from "./components/Header.tsx";

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


    return (
      <ThemeProvider theme={theme}>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Catalog />
      </ThemeProvider>
  )
}

export default App
