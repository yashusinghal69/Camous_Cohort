import { Route, Routes } from "react-router-dom";
import  Login from "./pages/Login/Login";
import Home from "./pages/home/Home";
import Feed from "./pages/feed/Feed";
import Signup from "./pages/SignUp/Signup";
import SentEmail from "./pages/forgotPassword/Email";
import Reset from "./pages/forgotPassword/reset";
import Dashboard from "./pages/dashboard/Dashboard";
import Discussions from "./pages/discussions/Discussions";
import Communities from "./pages/communities/Communities";
import Events from "./pages/events/Events";
import Profile from "./pages/profile/Profile";
import AllCommunities from "./pages/communities/AllCommunity";
import JoinCommunity from "./pages/communities/JoinCommunities";
 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sentEmail" element={<SentEmail/>} />
        <Route path="/reset/:userId/:token" element={<Reset/>} /> 
        <Route path="/dashboardacads" element={<Dashboard/>} /> 
        <Route path="/discussionsacads" element={<Discussions/>} />
        <Route path="/communities" element={<Communities/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/allcommunities" element={<AllCommunities/>} />
        <Route path="/joincommunity" element={<JoinCommunity/>} />
      </Routes>
    </div>
  );
}

export default App;