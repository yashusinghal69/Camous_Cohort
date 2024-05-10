import SideBar from "../../components/navbar/navbarFeed/SidebarFeed";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/navbarEvents/NavbarEvents";

export default function Events()  {
  
 
  return (
    <>
    <Navbar/>
      <Box height={35}/>
      <Box sx={{ display: 'flex' }}>
       <SideBar/>
       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Events</h1>

       </Box>
      </Box>
    </>
  );
};

