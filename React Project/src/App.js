import './App.css';
import CommonFooter from './components/CommonFooter';
import CommonNavbar from './components/CommonNavbar';
import AdhkarPage from './pages/AdhkarPage';
import HijriCalendarPage from './pages/HijriCalendarPage';
import HomePage from './pages/HomePage';
import QuranPage from './pages/QuranPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#bf9759',
      light: '#fff3ea',
      contrastText: '#fff',
    },
    // secondary: {
    //   main: '#b9864d',
    //   contrastText: '#fff',
    // },
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
        <CommonNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quran" element={<QuranPage />} />
          <Route path="/hijri-calendar" element={<HijriCalendarPage />} />
          <Route path="/adhkar" element={<AdhkarPage />} />
          <Route path="/about" element={<h1>Shawky Ebrahim Ahmed</h1>} />
        </Routes>
        <CommonFooter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
