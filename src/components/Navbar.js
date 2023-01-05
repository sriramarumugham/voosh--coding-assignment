import React from "react";
import styles from '../styles/Navbar.module.css'
function Navbar() {
  return (
    <div class={styles.navbar_container}>
      <div>
        <img
          src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp"
          className={styles.voosh_logo}
        />
      </div>
    </div>
  );
}

export default Navbar;
