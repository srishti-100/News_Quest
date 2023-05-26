import './App.css';
import React, {useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



const App = () => {
  const [progress, setProgress] = useState(0)

  // setProgress=(progress)=>{
  //   this.setState({progress:progress});
  // }

  return (

    <Router>
      <NavBar />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Routes>

        <Route exact path='/' element={<News setProgress={setProgress}  key="general" pageSize={6} country="in" category="general" />} />
        <Route exact path='/entertainment' element={<News setProgress={setProgress}  key="entertainment" pageSize={6} country="in" category="entertainment" />} />
        <Route exact path='/business' element={<News setProgress={setProgress}  key="business" pageSize={6} country="in" category="business" />} />
        <Route exact path='/health' element={<News setProgress={setProgress}  key="health" pageSize={6} country="in" category="health" />} />
        <Route exact path='/science' element={<News setProgress={setProgress}  key="science" pageSize={6} country="in" category="science" />} />
        <Route exact path='/sports' element={<News setProgress={setProgress}  key="sports" pageSize={6} country="in" category="sports" />} />
        <Route exact path='/technology' element={<News setProgress={setProgress}  key="technology" pageSize={6} country="in" category="technology" />} />

      </Routes>
    </Router>


  );

}

export default App
