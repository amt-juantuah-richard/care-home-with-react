import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Otherpages from './pages/Otherpages';
import ErrorPage from './pages/ErrorPage';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import image from './assets/hart.avif';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>   
          <Route path="/" element={ <Homepage /> }></Route>
          <Route path="/services/*" element={ <Otherpages /> }></Route>
          <Route path="/services" element={ <ErrorPage /> }></Route>
          <Route path="*" element={ <ErrorPage /> }></Route>
        </Routes>
      </Router>
      <FloatingWhatsApp 
        phoneNumber='+233270674921'
        accountName='Jo2Jos Service'
        allowClickAway
        allowEsc
        notification
        notificationSound
        chatboxHeight={320}
        avatar={image}
        statusMessage='Typically replies within 30 minutes.'
        chatMessage={`Hello there! \nWelcome to Jo2Jos 🤗\nHow can we help you?`}
        placeholder='Type a message to Jo2Jos'
      />
      
    </div>
  );
}

export default App;
