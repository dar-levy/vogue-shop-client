import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {StoreProvider} from "./context/StoreContext.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StoreProvider>
          <Router>
              <App />
          </ Router>
      </StoreProvider>
  </StrictMode>,
)
