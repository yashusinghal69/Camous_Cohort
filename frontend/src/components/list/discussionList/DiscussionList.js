import React from "react";
import DiscussionCard from "../../cards/discussionscards/Discussioncard";
import styles from "./DiscussionList.module.css";
import { NavLink } from "react-router-dom";

const DiscussionList = ({ discussions }) => {
  return (
    <div className={styles.discussionList}>
      {discussions.map((topic) => (
        <DiscussionCard key={topic.id} topic={topic} />
        
      ))}

      {/* Placeholder card for adding new topics */}
      <div className={styles.add}>
        <h3><NavLink to="/createPanel" style={{ color: 'inherit', textDecoration: 'none' }} > + </NavLink></h3>
      </div>
        
    </div>
  );
};

export default DiscussionList;
