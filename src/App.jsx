import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import SignupPage from "./pages/Register"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginForm from "./pages/Login";
import ProfilePage from "./pages/Profile";
import JobPostForm from "./pages/PostJob";
import Jobs from "./pages/Jobs";
import EmployeesPage from "./pages/FindWorkers";
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/get-work-done" element={<EmployeesPage/>} />
     <Route path="/sign-up" element={<SignupPage/>} />
     <Route path="/login" element={<LoginForm/>} />
     <Route path="/profile" element={<ProfilePage/>} />
     <Route path="/post-job" element={<JobPostForm/>} />
     <Route path="/jobs-all" element={<Jobs/>} />

     </Routes>
     <Footer/>

    </BrowserRouter>
     


     
    </>
  )
}

export default App
