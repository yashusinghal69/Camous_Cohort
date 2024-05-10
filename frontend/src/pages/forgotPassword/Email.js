import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../assets/images/home/logoCC.png";


export default function SentEmail() {
  <img src={logo} alt="logo" className="logo" />

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const { email } = inputValue;

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

    const handleSuccess = (data) => {
      const { success, message } = data;
      if (success) {
        toast.success(message, {
          position: "bottom-left",
        });
    
        // Redirect to /reset
        navigate("/reset");
      } else {
        handleError(message);
      }
    };
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:9001/password-reset",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      handleSuccess(data);

    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}
