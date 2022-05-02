import './css/app.css';
import NavBar from './Components/NavBar'
import InsertForm from './views/InsertForm.js'
import ShippingList from './views/ShippingList'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect} from 'react'
function App() {
  useEffect(() => {
    console.log('App')
  }, [])
  return (
    <>
    <Router>
    <div className="App">
        <NavBar  className="navbar"/>
        <Routes>
          <Route path="/addBox" element={<InsertForm/>}/>
          <Route path="/listBoxes" element={<ShippingList/>}/>
        </Routes>
        </div>
      </Router>
      </>
  );
}

export default App;
