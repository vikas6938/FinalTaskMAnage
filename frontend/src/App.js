import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEvent from './components/Events/CreateEvent';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Header from './components/Header';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
        <Route path="/" element={<Home />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
