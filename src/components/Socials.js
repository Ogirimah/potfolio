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
        <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon="fa-regular fa-envelope" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-codepen" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
      </ul>
    </div>
  )
}