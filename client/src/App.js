import './css/app.css';
import NavBar from './Components/NavBar'
import AddBox from './views/AddBox'
import ListBoxes from './views/ListBoxes'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <div className="App">
        <NavBar  className="navbar"/>
        <Routes>
          <Route path="/addBox" element={<AddBox/>}/>
          <Route path="/listBoxes" element={<ListBoxes/>}/>
        </Routes>
        </div>
      </Router>
      </>
  );
}

export default App;
