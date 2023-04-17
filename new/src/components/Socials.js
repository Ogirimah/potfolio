import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/socials.module.css";

export default function Socials({ horizontal, space }) {
    // This function returns the links to my social media
    //
    // @horizontal: Boolean to specify the orientation of the favicons
    // @space: Specify quantity of spacing between favicons. Expressed as percentage of container

    return (
        <div>
          <ul className={ styles.items }>
            <li><FontAwesomeIcon icon="fa-brands fa-linkedin" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-github" /></li>
            <li><FontAwesomeIcon icon="fa-regular fa-envelope" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-codepen" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li>
            <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
          </ul>
        </div>
    )
}