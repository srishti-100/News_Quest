import React from 'react';
import News from './News';
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
// } from "react-router-dom";

const NewsOutline = (props) =>  {
        // const [progress, setProgress] = useState(0);
    return (
        <div>
          <News  key="general" pageSize={6} country="in" category="general" />
          
                   {/* <Route exact path='/' element={<News  key="general" pageSize={6} country="in" category="general" />} />
            //         <News  key="entertainment" pageSize={6} country="in" category="entertainment" />
            //     //     <Route exact path='/business' element={<News  key="business" pageSize={6} country="in" category="business" />} />
            //     //     <Route exact path='/health' element={<News  key="health" pageSize={6} country="in" category="health" />} />
            //     //     <Route exact path='/science' element={<News  key="science" pageSize={6} country="in" category="science" />} />
            //     //     <Route exact path='/sports' element={<News  key="sports" pageSize={6} country="in" category="sports" />} />
            //     //     <Route exact path='/technology' element={<News  key="technology" pageSize={6} country="in" category="technology" />} />

            //     // </Routes>
            // </Router> */}

        </div>
    )
}

export default NewsOutline


















// import React from 'react';
// import News from './News';
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
// } from "react-router-dom";

// const NewsOutline = (props) =>  {
//         // const [progress, setProgress] = useState(0);
//     return (
//         <div>
//             <Router>
//                 <Routes>

//                     <Route exact path='/' element={<News  key="general" pageSize={6} country="in" category="general" />} />
//                     <Route exact path='/entertainment' element={<News  key="entertainment" pageSize={6} country="in" category="entertainment" />} />
//                     <Route exact path='/business' element={<News  key="business" pageSize={6} country="in" category="business" />} />
//                     <Route exact path='/health' element={<News  key="health" pageSize={6} country="in" category="health" />} />
//                     <Route exact path='/science' element={<News  key="science" pageSize={6} country="in" category="science" />} />
//                     <Route exact path='/sports' element={<News  key="sports" pageSize={6} country="in" category="sports" />} />
//                     <Route exact path='/technology' element={<News  key="technology" pageSize={6} country="in" category="technology" />} />

//                 </Routes>
//             </Router>

//         </div>
//     )
// }

// export default NewsOutline