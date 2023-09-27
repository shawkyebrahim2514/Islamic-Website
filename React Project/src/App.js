import './App.css';
import AdhkarPage from './pages/AdhkarPage';
import HijriCalendarPage from './pages/HijriCalendarPage';
import HomePage from './pages/HomePage';
import QuranPage from './pages/QuranPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quran" element={<QuranPage />} />
        <Route path="/hijri-calendar" element={<HijriCalendarPage />} />
        <Route path="/adhkar" element={<AdhkarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
