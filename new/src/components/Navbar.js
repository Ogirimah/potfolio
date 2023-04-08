//import React, { useState, useEffect} from "react";
import { useContext } from "react";
import styles from "../styles/navbar.module.css";
import { ThemeContext } from "../App.js"
import Switch from "react-switch";


export default function Navbar() {
    const {
        theme,
        toggleTheme 
    } = useContext(ThemeContext);
    return (
    <div className={styles.container} id={theme}>
    <header className={styles.heading} id={theme}>
        <h1>
        <a href='https://ogirimah.com'>Ameer</a>
        </h1>
        <div className={styles.switch}>
            <label> {theme === 'dark' ? '🌙' : '☀️'}
            <Switch
                onChange={toggleTheme}
                checked={theme === 'light'}
                height={20}
                width={40}
                onColor={'#fdffd5'}
                offColor={'#494f55'}
                onHandleColor={'#494f55'}
                offHandleColor={'#fdffd5'}
                />
                </label>
        </div>
        <ul className={styles.list}>
            <li><a href='#about'>About🔗</a></li>
            <li><a href='#techStack'>Tech Stack</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#workExperience'>Experience</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </header>
    </div>
  );
}
