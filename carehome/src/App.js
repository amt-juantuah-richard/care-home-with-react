import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Otherpages from './pages/Otherpages';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>   
          <Route path="/" element={ <Homepage /> }></Route>
          <Route path="/services/*" element={ <Otherpages /> }></Route>
          <Route path="*" element={ <ErrorPage /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
