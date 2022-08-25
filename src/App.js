import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mission from './components/views/Mission/Mission';
import Rockets from './components/views/Rocket/Rockets';
import Nav from './components/views/Nav/Nav';
import Profile from './components/views/Profile/Profile';

const App = () => (
  <div className="container">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Mission />} />
        <Route path="myprofile" element={<Profile />} />
      </Routes>
    </Router>
  </div>
);

export default App;