
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={[<HomePage />]} />
          <Route path='/:id' element={[<Message />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
