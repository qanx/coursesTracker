
import './App.css';
import AdminInfo from './components/Admin/AdminInfo';
import GetAllCourses from './components/GetAllCourses';
import NewCourses from './components/Admin/NewCourses';
import Sidebar from './components/Admin/Sidebar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoginPage from './components/LoginPage';
import Topbar from './components/Topbar';
import UserInfo from './components/UserInfo';
import AdminMainPage from './pages/AdminMainPage';
import BrowsesCoursesPage from './pages/BrowsesCoursesPage';
import HomePage from './pages/HomePage';
import UserCoursesPage from './pages/UserCoursesPage';
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './Context/Context';
function App() {

  const {user}=useContext(AuthContext)
  return (
    
    <div className="App">

        <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/courses" element={<BrowsesCoursesPage/>} />
        <Route path="/userpage"  element={ user ? <UserCoursesPage/>:  <HomePage />}   />
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="/admin" element={user?.isAdmin? <AdminMainPage/> : <HomePage /> } />
      </Routes>
      
      {/* <AdminMainPage/> */}
      {/* <BrowsesCoursesPage/> */}
      {/* <UserCoursesPage/> */}
      {/* <HomePage /> */}
      {/* <LoginPage/> */}
      {/* <Sidebar/> */}
      {/* <AdminInfo/>
      <GetAllUsers/> */}

      {/* <GetAllCourses/> */}
      {/* <NewCourses/> */}
      {/* <Topbar/> 
     <UserInfo/>
     <Table/> */}

      {/* <Footer/> */}
      {/* <Carousel/>
     <Hero/> */}

    </div>
  );
}

export default App;
