import { Suspense, lazy } from 'react';
import './App.css';
import CommonFooter from './components/CommonFooter';
import CommonNavbar from './components/CommonNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import SpinnerLoading from './components/SpinnerLoading';
import NotFound from './components/NotFound';

const AdhkarPage = lazy(() => import('./pages/AdhkarPage'));
const HijriCalendarPage = lazy(() => import('./pages/HijriCalendarPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const QuranPage = lazy(() => import('./pages/QuranPage'));
const HijriCalendarByDatePage = lazy(() => import('./pages/HijriCalendarByDatePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#bf9759',
      light: '#fff3ea',
      contrastText: '#fff',
    },
    quranPlayer: {
      main: '#444',
      light: '#e5e5e5',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{
          '*::selection': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
          }
        }}>
          <CommonNavbar />
          <Suspense fallback={<SpinnerLoading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quran" element={<QuranPage />} />
              <Route path="/hijri-calendar" element={<HijriCalendarPage />} />
              <Route path="/hijri-calendar/:date" element={<HijriCalendarByDatePage />} />
              <Route path="/adhkar" element={<AdhkarPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CommonFooter />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
