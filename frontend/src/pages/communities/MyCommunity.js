import React from "react";
import CommunityCard from "../../components/cards/communityCard/CommunityCard";
import styles from "./Communities.module.css";

export default function Mycommunity() {
  const communities = [
    { id: 1, name: "WEB DEVELOPMENT", image: "/images/swim.jpg" },
    { id: 2, name: "BLOCK CHAIN", image: "/images/cricket.jpg" },
    { id: 3, name: "ML", image: "/images/ml.jpg" },
  ];

  return (
    <div className={styles.community_page}>
      <h1>My Community</h1>
      <div className={styles.community_grid}>
        {communities.map((community) => (
           <CommunityCard  key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
}