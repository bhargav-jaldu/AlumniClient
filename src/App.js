
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Message from './components/Message/Message';
import Nav from './components/NavBar/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={[<Nav />, <HomePage />]} />
          <Route path='/:id' element={[<Nav />,<Message />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
