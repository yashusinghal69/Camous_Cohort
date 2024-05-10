import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="onboarding-container">
      <div className="about-section">
        <p className="name">Campus Cohort</p>
        <p className="about">
          A dynamic digital space dedicated to inclusive education, skill
          development, and peer networking. We're here to break down barriers
          and provide students a peer community and connections they need to
          thrive in their academic and professional journeys.
        </p>
        <button type="button" className="btn-home" onClick={handleClick}>
          Let's Go{" "}
        </button>

        <div className={styles.onboarding_container}>
          <div className={styles.about_section}>
            <p className={styles.name}>Campus Cohort</p>
            <p className={styles.about}>
              A dynamic digital space dedicated to inclusive education, skill
              development, and peer networking. We're here to break down
              barriers and provide students a peer community and connections
              they need to thrive in their academic and professional journeys.{" "}
            </p>
            <button
              type="button"
              className={styles.btn_home}
              onClick={handleClick}
            >
              Let's Go{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
