import React from "react";
import styles from "../styles/MyProfileImage.module.css";
function MyProfileImage() {
  return (
    <div className={styles.my_profile_image_container}>
      <img
        className={styles.my_profile_image}
        src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp"
      ></img>
    </div>
  );
}

export default MyProfileImage;
