import './App.css'
import Login from './pages/login/login.jsx'
import Signup from './pages/signup/signup.jsx'
import HomePage from './pages/homepage/homepage.jsx' 
import Playlistview from './pages/playlist view/playlistview.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"
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
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App