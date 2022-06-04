import './css/app.css';
import NavBar from './Components/NavBar/NavBar'
import AddBox from './views/AddBox'
import ListBoxes from './views/ListBoxes'
import PageNotExists from './Components/PageNotExists/PageNotExists'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
   
        <NavBar  className="navbar"/>
        <Routes>
          <Route path="/addBox" element={<AddBox/>}/>
          <Route path="/listBoxes" element={<ListBoxes/>}/>
          <Route path="*" element={<PageNotExists/>} />
        </Routes>
        
      </Router>
      </>
  );
}

export default App;
