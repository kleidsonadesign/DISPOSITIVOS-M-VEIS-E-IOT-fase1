import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login/Login'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import HomeTabs from './Home/HomeTabs'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="home" element={<HomeTabs/>}></Route>
        <Route path="forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="*" element={<Navigate to='/'/>}></Route>
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
