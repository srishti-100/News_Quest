// import React, { useState } from 'react'
// import NavBar from './Components/NavBar';
// import LoadingBar from 'react-top-loading-bar';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import News from './Components/News';
// // import Scroll from './Components/Scroll';

// export default function App() {
//   const [progress, setProgress] = useState(50);
//   const [mode, setMode] = useState("light")

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = "#7691ab";

//     }
//     else {
//       setMode('light');
//       document.body.style.backgroundColor = "white";

//     }
//   }


//   return (
//     <>
//       <BrowserRouter>
      
//       <NavBar mode={mode} toggleMode={toggleMode}/>
//       <LoadingBar
//           color='#f11946'
//           height={3}
//           progress={progress}
//         />

//       <div className="row">
//         <div className="col-2 mt-2">
//           <h1 className="mt-2 mx-3" style={{color: (mode==='light')?'#212529':'white'}}>category</h1>

//           <div className="list-group">
//             {/* <Link to="/" className="list-group-item list-group-item-action">A simple default list group item</Link> */}

//             <Link to="/business" className={`list-group-item list-group-item-action list-group-item-${(mode==='light')?'dark':'light'}`}>business</Link>
//             <Link to="/entertainment" className={`list-group-item list-group-item-action list-group-item-${(mode==='light')?'dark':'light'}`}>entertainment</Link>
//             <Link to="/health" className={`list-group-item list-group-item-action list-group-item-${(mode==='light')?'dark':'light'}`}>health</Link>
//             <Link to="/science" className={`list-group-item list-group-item-action list-group-item-${(mode==='light')?'dark':'light'}`}>science</Link>
//             <Link to="/sports" className={`list-group-item list-group-item-action list-group-item-${(mode==='light')?'dark':'light'}`}>sports</Link>
//             <Link to="/technology" className={`list-group-item list-group-item-action list-group-item-${(mode==='light')?'dark':'light'}`}>technology</Link>

//           </div>
//         </div>
//         <div className="col-10" id= 'newsComp' style={{borderLeft:'1px solid', borderColor:(mode==='light')?'black':'white'}}>
//         <Routes>
//         <Route exact path='/' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode}  key="general" pageSize={6} country="in" category="general" />} />
//            <Route exact path='/entertainment' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
//           <Route exact path='/business' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="business" pageSize={6} country="in" category="business" />} />
//            <Route exact path='/health' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="health" pageSize={6} country="in" category="health" />} />
//            <Route exact path='/science' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="science" pageSize={6} country="in" category="science" />} />
//            <Route exact path='/sports' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="sports" pageSize={6} country="in" category="sports" />} />
//            <Route exact path='/technology' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="technology" pageSize={6} country="in" category="technology" />} />
//            </Routes>
//          </div>

        
//       </div>
      
//       </BrowserRouter>

//     </>
//   )
// }






























import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
// import SearchBox from './Components/SearchBox'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



const App = () => {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";

    }
  }

  // const [searchText, setSearchText] = useState("");

  // const searchFuncParent=(word)=>{
  //   setSearchText(word)
  // }
  
  return (
    <>
      <Router>
        <NavBar mode = {mode} toggleMode={toggleMode}/>

        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        {/* <SearchBox/> */}
        <Routes>

          <Route exact path='/' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="general" pageSize={6} country="in" category="general" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="business" pageSize={6} country="in" category="business" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="health" pageSize={6} country="in" category="health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="science" pageSize={6} country="in" category="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} mode={mode} toggleMode={toggleMode} key="technology" pageSize={6} country="in" category="technology" />} />

        </Routes>
      </Router>
    </>

  );

}

export default App