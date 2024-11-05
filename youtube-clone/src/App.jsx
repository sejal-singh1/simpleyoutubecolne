import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
