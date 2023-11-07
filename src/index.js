import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#79155B',
    800: '#C23373',
    700: '#F6635C',
    600: '#FFBA86',
  },
}

const theme = extendTheme({ colors })

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);