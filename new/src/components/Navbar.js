//import React, { useState, useEffect} from "react";
import styles from "../styles/navbar.module.css";
//import appStyles from "../App.css"


export default function Navbar() {

    return (
    <header className={styles.heading}>
        <h1>Ameer</h1>
        <ul className={styles.list}>
            <li>About🔗</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
        </ul>
    </header>
  );
}
