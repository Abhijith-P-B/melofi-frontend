import './App.css'
import Login from './pages/login/login.jsx'
import Signup from './pages/signup/signup.jsx'
import HomePage from './pages/homepage/homepage.jsx' 
import Playlistview from './pages/playlist view/playlistview.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Songpage from './pages/Songpage/songpage.jsx'
import Search from './pages/search page/search.jsx'
import Profile from './pages/Profile/profile.jsx'
import Artistview from './pages/playlist view/artistview.jsx'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Homepage" element={<HomePage/>}/>
      <Route path="/Playlist/:id" element={<Playlistview/>}/>
      <Route path="/Song/:id" element={<Songpage/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Artist/:id" element={<Artistview/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App