import './App.css';
import InsertForm from './views/InsertForm.js'
import ShippingList from './views/ShippingList'
import {Home} from './Components/Home.js'
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
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/addBox" element={<InsertForm/>}/>
          <Route path="/listBoxes" element={<ShippingList/>}/>
        </Routes>
        </div>
      </Router>
      </>
  );
}

export default App;
