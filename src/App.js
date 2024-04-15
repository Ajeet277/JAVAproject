// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainPage from './components/MainPage/MainPage';
// import LoginPage from './components/LoginPage/LoginPage';
// import RegisterPage from './components/RegisterPage/RegisterPage';
// import LMSPage from './components/LMSPage/LMSPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/lms" element={<LMSPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { BrowserRouter as  Link } from 'react-router-dom';
// import MainPage from './components/MainPage/MainPage';
// import LMSPage from './components/LMSPage/LMSPage';
// import LoginPage from './components/LoginPage/LoginPage';
// import Footer from './components/Footer/Footer'; 
// import Category from './components/Category/Category';
// import RegisterPage from './components/RegisterPage/RegisterPage'; 



// const App = () => {
//   return (
//       <>
//       <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/lms" element={<LMSPage />} />
//         <Route path="/category" element={<Category />} />
//       </Routes>
    
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">NGO Education Portal</Navbar.Brand>
//             <Nav className="me-auto">
//               <Link to="/login" className="nav-link">Login</Link>
//               <Link to="/register" className="nav-link">Register</Link>
//               <Link to="/category" className="nav-link">Category</Link>
//             </Nav>
//           </Container>
//         </Navbar>

//         {/* Define routes */}
       
//         {}
//         <Footer />
//       </Router>
//       </>
//   );
// };

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LMSPage from './components/LMSPage/LMSPage';
import LoginPage from './components/LoginPage/LoginPage';
import Footer from './components/Footer/Footer'; 
import Category from './components/Category/Category';
import RegisterPage from './components/RegisterPage/RegisterPage'; 
import Home from './components/MainPage/Home';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const App = () => {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/home" className="navbar-brand">NGO Education Portal</Link>
            <Nav className="me-auto">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
              <Link to="/category" className="nav-link">Category</Link>
              <Link to="/courses" className="nav-link">Courses</Link>
            </Nav>
          </Container>
        </Navbar>
        
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/lms" element={<LMSPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/home"  element={<Home/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
