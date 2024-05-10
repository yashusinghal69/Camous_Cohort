import React from "react";
import styles from "./Discussioncard.module.css"; 


const DiscussionCard = ({ topic }) => {
  return (
    <div className={styles.card}>
      <h3>{topic.title}</h3>
    </div>
  );
};

export default DiscussionCard;
