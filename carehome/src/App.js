import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Otherpages from './pages/Otherpages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>   
          <Route path="/" element={ <Homepage /> }></Route>
          <Route path="*" element={ <Otherpages /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
