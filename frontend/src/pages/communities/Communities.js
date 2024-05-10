import SideBar from "../../components/navbar/navbarFeed/SidebarFeed";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/navbarCommunities/NavbarCommunities";
import Options from "../../components/options/Options";
import { useNavigate } from 'react-router-dom';
import MyCommunity from "../../components/cards/communityCard/CommunityCard";

export default function Communities()  {
    const navigate = useNavigate();

 
    return (
        <>
          <Navbar/>
          <Box height={60}/>
          <Box sx={{ display: 'flex' }}>
            <SideBar/>
            <Box sx={{ position:'absolute' , marginLeft: '78rem' , marginTop:'2rem'}}> 
              <Options />
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <MyCommunity />
              <h2 onClick={()=>navigate('/dashboardacads')}>Acads Community</h2>
            </Box>
          </Box>
        </>
      );
    };