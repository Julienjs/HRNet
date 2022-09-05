import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './router/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <ThemeProvider>
          <App />
        </ThemeProvider>
        <Footer />
      </PersistGate>
    </Provider>
  </BrowserRouter >
);

reportWebVitals();
