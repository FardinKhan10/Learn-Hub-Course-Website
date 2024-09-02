
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import AllCourses from './component/AllCourses';
import AddCourses from './component/AddCourses';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';




function App() {

  const notify = () => toast("Wow so easy !");

return (
  <div>
    <Router>
    <ToastContainer/>
        <Header/>
        <Routes><Route path='/' Component={Home} exact/></Routes>
        <Routes><Route path='/add-course' Component={AddCourses} exact/></Routes>
        <Routes><Route path='/view-courses' Component={AllCourses} exact/></Routes>
        <Routes><Route path='/about' Component={AboutUs} exact/></Routes>
        <Routes><Route path='/contact' Component={ContactUs} exact/></Routes>
        {/* <Routes><Route path='*' Component={AddCourses} exact/></Routes> */}
    </Router>
    <Footer/>
  </div>
);
}

export default App;
