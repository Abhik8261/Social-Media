
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './component/Header/Header';
import Login from './component/Login/Login';

function App() {
  return (
    
      <>
      <Router>
     <Header/>
     <Routes>
      <Route path='/' element={<Login/>}/>
     </Routes>
      </Router>
      
      </>
   
  );
}

export default App;
