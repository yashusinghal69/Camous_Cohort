import SideBar from "../../components/navbar/navbarFeed/SidebarFeed";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/navbarFeed/NavbarFeed";

const Feed = () => {
  
 
  return (
    <>
      <Box height={35}/>

      <Navbar/>
      <Box sx={{ display: 'flex' }}>
       <SideBar/>
       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

       </Box>
      </Box>
    </>
  );
};

export default Feed;