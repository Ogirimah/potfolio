import { useContext } from "react";
import styles from "../styles/navbar.module.css";
import { ThemeContext } from "../App.js"
import { useState } from "react";

export default function Navbar() {
    const { theme } = useContext(ThemeContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={styles.container}>
            <header className={styles.heading}>
                <h1>
                    <a href='https://ogirimah.com'>Ameer</a>
                </h1>

                <ul className={styles.list}>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#techStack'>Tech Stack</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#workExperience'>Experience</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>

                <div onClick={toggleMenu} className={styles.mobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


            </header>
            <ul className={styles.menuList + (isMenuOpen ? ` ${styles.active}` : '')}>
                <li><a href='#about'>About</a></li>
                <li><a href='#techStack'>Tech Stack</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#workExperience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    );
}