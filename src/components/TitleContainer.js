import React from "react";
import { Link } from "react-scroll";

import styles from "../styles/TitleContainer.module.css";

function TitleContainer() {
  return (
    <div className={styles.page1_title_container}>
      <div className={styles.title}>
        Consolidate your restaurants' insights in one place. Unlock growth.
      </div>
      <div className={styles.subtitle}>
        Your one stop solution to view mission-critical data and insights from
        all your locations in one place.
      </div>
      <div className={styles.button_arrow_container}>
        <div class="button_container_style">
          <Link
            activeClass="active"
            to="page2"
            spy={true}
            smooth={true}
            offset={100}
            duration={750}
            className={styles.text_button}
          >
            Book Demo Now
          </Link>
        </div>
        <div className={styles.arrow_img_container}>
          <img
            src="https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp"
            class="arrow_img"
          />
        </div>
      </div>
    </div>
  );
}

export default TitleContainer;
