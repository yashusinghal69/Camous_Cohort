import SideBar from "../../components/navbar/navbarFeed/SidebarFeed";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/navbarProfile/NavbarProfile";

export default function Profile()  {
  
 
  return (
    <>
    <Navbar/>
      <Box height={35}/>
      <Box sx={{ display: 'flex' }}>
       <SideBar/>
       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Profile</h1>

       </Box>
      </Box>
    </>
  );
};