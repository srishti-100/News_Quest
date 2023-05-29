import React from 'react'
import { Link } from "react-router-dom";


const NavBar = (props) => {
//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         let formData = new FormData(event.target);
//         let searchVal = formData.get('search');
//         props.funcSearch(searchVal);
//     }


    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsQuest</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/business" >Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>


                        </ul>

                    </div>
                    <div className={`form-check form-switch `}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className={`form-check-label text-${(props.mode==='light')?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {(props.mode==='light')?'dark':'light'} mode</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar















// import React from 'react'
// import { Link } from "react-router-dom";


// const NavBar = () => {
//     return (
//         <div className='mb-2'>
//             <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark nav-underline" data-bs-theme="dark">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">NewsQuest</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" aria-current="page" to="/">About</Link>
//                             </li>
                            

//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default NavBar