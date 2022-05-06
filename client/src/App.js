import './css/app.css';
import NavBar from './Components/NavBar'
import AddBox from './views/AddBox'
import ListBoxes from './views/ListBoxes'
import PageNotExists from './views/PageNotExists'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
   
        <NavBar  className="navbar" testId="navbar"/>
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
