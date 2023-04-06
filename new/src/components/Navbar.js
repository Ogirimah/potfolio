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
    <header className={styles.heading}>
        <h1>Ameer</h1>
        <div clasName='switch'>
            <label> {theme === 'dark' ? '🌙' : '☀️'} </label>
            <Switch
                onChange={toggleTheme}
                checked={theme === 'light'}
                />
        </div>
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
