import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/socials.module.css";

export default function Socials({ ...props }) {
  // This function returns the links to my social media
  //
  // @horizontal: Boolean to specify the orientation of the favicons
  // @space: Specify quantity of spacing between favicons. Expressed as percentage of container

  return (
    <div className={styles.socialsContainer} {...props}>
      <ul className={styles.items}>
        <li><a href="https:www.linkedin.com/in/ogirimah"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
        <li><a href="https:www.github.com/ogirimah"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
        <li><a href={`mailto:${"enquiry@ogirimah.com"}`}><FontAwesomeIcon icon="fa-regular fa-envelope" /></a></li>
        <li><a href="https:www.x.com/ameerogirimah"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
        <li><a href="https:www.facebook.com/ameerogirimah"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
        <li><a href="https:www.instagram.com/ogirimah"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
      </ul>
    </div>
  )
}