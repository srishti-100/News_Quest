import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
BrowserRouter as Router,
Route,
Routes,
} from "react-router-dom";

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_KEY
state={
  progress:0   

}

  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
render() {
return (

  <Router>
    <NavBar/> 
    <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
      <Routes>

<Route exact path='/' element= {<News setProgress={this.setProgress} apikey={this.apikey}   key="general" pageSize={6} country="in" category="general"/>}/>
<Route exact path='/entertainment' element= {<News setProgress={this.setProgress} apikey={this.apikey}   key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
<Route exact path='/business' element= {<News setProgress={this.setProgress} apikey={this.apikey}   key="business" pageSize={6} country="in" category="business"/>}/>
<Route exact path='/health' element= {<News setProgress={this.setProgress} apikey={this.apikey}   key="health" pageSize={6} country="in" category="health"/>}/>
<Route exact path='/science' element= {<News setProgress={this.setProgress} apikey={this.apikey}   key="science" pageSize={6} country="in" category="science"/>}/>
<Route exact path='/sports' element= {<News setProgress={this.setProgress} apikey={this.apikey}   key="sports" pageSize={6} country="in" category="sports"/>}/>
<Route exact path='/technology' element= {<News setProgress={this.setProgress} apikey={this.apikey}   key="technology" pageSize={6} country="in" category="technology"/>}/>

</Routes>
</Router>


);
}
}







// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './Components/NavBar';
// import News from './Components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// // import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <Routes>
//           <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey}   key="general" pageSize={6} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey}   key="business" pageSize={6} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey}   key="entertainment" pageSize={6} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apikey}   key="general" pageSize={6} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey}   key="health" pageSize={6} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey}   key="science" pageSize={6} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apikey}   key="sports" pageSize={6} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apikey}   key="technology" pageSize={6} country="in" category="technology"/></Route> 
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }
