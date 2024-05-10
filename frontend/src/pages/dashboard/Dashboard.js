import SideBar from "../../components/navbar/navbarAcads/SidebarAcads";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/navbarAcads/NavbarAcads";
import OptionsAcads from "../../components/options/OptionsAcads";
import { useNavigate} from 'react-router-dom';
import styles from './Dashboard.module.css';
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";



function DashboardAcads(props) {
  const [inputValue, setInputValue] = useState({
    Course: "",
    Instructor: "",
  });
  const { Course, Instructor } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:9001/dashboardacads",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        props.addPanel(inputValue);      
        
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      Course: "",
      Instructor: "",
    });
    props.toggle();
  };

  return (
      <div className={styles.popup}>
          <div className={styles.popup_inner}>
                  <h2>Create Panel</h2>
                  <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="course">Course Name</label>
                    <input
                      type="course"
                      name="course"
                      value={Course}
                      placeholder="Enter your Course"
                      onChange={handleOnChange}

                    />
                  </div>
                  <div>
                    <label htmlFor="instructor">Instructor Name</label>
                    <input
                      type="instructor"
                      name="instructor"
                      value={Instructor}
                      placeholder="Enter your Instructor"
                      onChange={handleOnChange}

                    />
                  </div>
                  <button type="submit">Create</button>
              </form>
              <button onClick={props.toggle}>Close</button>
          </div>
      </div>
  )
}





export default function Acads()  {
    const [seen, setSeen] = useState(false)
    const [panels, setPanels] = useState([]);

 

    function togglePop () {
      setSeen(!seen);
    };
    const addPanel = (panel) => {
      const newPanels = [...panels, panel];
      setPanels(newPanels);
    }

    return (
        <>
          <Navbar/>
          <Box height={60}/>
          <Box sx={{ display: 'flex' }}>
            <SideBar/>
            <Box sx={{ position:'absolute' , marginLeft: '78rem' , marginTop:'2rem'}}> 
              <OptionsAcads />
            </Box>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3  }}>
                      <div>
                        <div className={styles.cardsContainer}>
                        {panels.map((panel, index) => (
                          <div key={index} className={styles.cards}>
                            <h3>{panel.Course}</h3>
                            <p>{panel.Instructor}</p>
                          </div>
                        ))}
                        </div>
                        <button onClick={togglePop} className={styles.create}>Create</button>

                        {seen ? <DashboardAcads toggle={togglePop} addPanel={addPanel} /> : null}
                    </div>                   
            </Box>
            <ToastContainer />
          </Box>
        </>
      );
    };

