import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Catalog from "./components/catalog/Catalog.tsx";
import { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound.tsx';
import RegisterForm from "./components/RegisterForm.tsx";
import LogoutForm from "./components/LogoutForm.tsx";
import LoginForm from './components/LoginForm.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Basket from './components/basket/Basket.tsx';
import ProductDetails from "./components/catalog/ProductDetails.tsx";
import agent from "./services/agent.ts";
import {useStoreContext} from "./context/StoreContext.tsx";
import Loading from './components/Loading.tsx';
import Checkout from "./components/Checkout.tsx";
import ThankYou from "./components/ThankYou.tsx";
import Reviews from "./components/Reviews.tsx";
import {NewArrivals} from "./components/NewArrivals.tsx";
import ActivityHistory from "./components/ActivityHistory.tsx";

function App() {
  const { setBasket, isAdmin, isAuthenticated } = useStoreContext();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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
    setBasket(agent.Basket.get())
    setLoading(false)
    if (isAuthenticated) {
      // agent.Basket.get()
      //     .then(basket => setBasket(basket))
      //     .catch(error => console.log(error))
      //     .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [theme.palette.background.default]);

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <Loading message='Initiasing app...' />

  return (
      <>
        <ThemeProvider theme={theme}>
          <ToastContainer autoClose={2000} theme='colored' />
          <CssBaseline />
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} isAuthenticated={isAuthenticated} />
          <Container>
            <Routes>
              {isAuthenticated ? (
                  <>
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<ProductDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/new-arrivals" element={<NewArrivals />} />
                    {isAdmin && <Route path="/activity-history" element={<ActivityHistory/>}/>}
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/thank-you/:id" element={<ThankYou />} />
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
