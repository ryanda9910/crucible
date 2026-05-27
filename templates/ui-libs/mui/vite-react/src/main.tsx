import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/tokens.css';
import App from './App';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#D4A574' },
    background: { default: '#0A0A0B', paper: '#141414' },
  },
  typography: { fontFamily: 'inherit' },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
