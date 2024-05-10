import SideBar from "../../components/navbar/navbarAcads/SidebarAcads";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/navbarAcads/NavbarAcads";
import OptionsAcads from "../../components/options/OptionsAcads";
import { useNavigate} from 'react-router-dom';
import styles from './Discussions.module.css';
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";



function Panel(props) {
  const [inputValue, setInputValue] = useState({
    topic: "",
    description: "",
  });
  const { topic, description } = inputValue;

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
        "http://localhost:9001/panel",
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
      topic: "",
      description: "",
    });
    props.toggle();
  };

  return (
      <div className={styles.popup}>
          <div className={styles.popup_inner}>
                  <h2>Create Panel</h2>
                  <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="topic">topic</label>
                    <input
                      type="topic"
                      name="topic"
                      value={topic}
                      placeholder="Enter your topic"
                      onChange={handleOnChange}

                    />
                  </div>
                  <div>
                    <label htmlFor="description">description</label>
                    <input
                      type="description"
                      name="description"
                      value={description}
                      placeholder="Enter your description"
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
                            <h3>{panel.topic}</h3>
                            <p>{panel.description}</p>
                          </div>
                        ))}
                        </div>
                        <button onClick={togglePop} className={styles.create}>Create</button>

                        {seen ? <Panel toggle={togglePop} addPanel={addPanel} /> : null}
                    </div>                   
            </Box>
            <ToastContainer />
          </Box>
        </>
      );
    };

