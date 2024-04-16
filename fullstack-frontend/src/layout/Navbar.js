import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Full Stack App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users"></a>
            </li>
          </ul>
          <Link className="btn btn-outline-light" type="button" to='adduser'>Add User</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

















// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>

//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">Full Stack App</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <button className='btn btn-outline-light'>Add User</button>
            
//           </div>
//         </nav>


//     </div>
//   )
// }

// export default Navbar