import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,extendTheme, theme  } from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50", // Set your desired background color here
      },
    },
  },
});
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ChakraProvider theme={{ ...theme, ...customTheme }}>
  <App />
  </ChakraProvider>
  </BrowserRouter>
  
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
