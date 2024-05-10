import React from "react";

import styles from "./communityCard.module.css";
export default function CommunityCard({ key ,count,community ,isSelected,onClick}) {

    if (!community) {
        return null; 
    }

    const colors = ['#9FDBED', '#A2E3BC', '#EE9999',"#B2A5EA" ,'#E5BDEB']
    const cardColor = colors[count % colors.length];

  return (
    <div className={`${styles.card} ${isSelected ? styles.selected : styles.hovercard}`} style={{ backgroundColor: cardColor }} onClick={ onClick} >
    <h3 className={styles.card__title}>{community.name}</h3>
    <p className={styles.card__content}></p>
    <div className={styles.card__date}>{community.member} Member</div>
    <button className={styles.card__arrow} >Join</button>
  </div>
  );
}