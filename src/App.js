// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmptyStates from './pages/emptyStates';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />

        <Route path='*' element={<EmptyStates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
