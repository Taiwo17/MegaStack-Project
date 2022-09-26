import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path='/' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
