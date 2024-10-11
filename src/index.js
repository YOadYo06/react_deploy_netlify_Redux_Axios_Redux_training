import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import App from './App.js'
import './index.css'
import store from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
)
