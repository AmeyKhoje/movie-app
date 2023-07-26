import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from '@mui/styles/ThemeProvider';
import { StyledEngineProvider } from '@mui/material/styles';
import { theme } from './utils/Theme';

const rootNode = document.getElementById('app');

const AppWithProviders = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </BrowserRouter>
);

if (rootNode) {
  createRoot(rootNode).render(<AppWithProviders />);
}
