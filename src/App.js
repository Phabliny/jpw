import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Body from './Body'
import Login from './components/Login'
import Termo from './components/Termo'

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Body/>}></Route>
          <Route path="/termo" element={<Termo/>}></Route>
          <Route path="/admin" element={<Login submitted={submitted} setSubmitted={setSubmitted}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;