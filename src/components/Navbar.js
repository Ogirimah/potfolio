// Navbar.js
import { useContext, useState } from "react";
import styles from "../styles/navbar.module.css";
import { ThemeContext } from "../App.js"

export default function Navbar() {
    const { theme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.container}>
            <header className={styles.heading}>
                <h1>
                    <a href='https://ogirimah.com' onClick={closeMenu}>Ameer</a>
                </h1>

                <ul className={`${styles.list} ${isMenuOpen ? styles.active : ''}`}>
                    <li><a href='#about' onClick={closeMenu}>About</a></li>
                    <li><a href='#techStack' onClick={closeMenu}>Tech Stack</a></li>
                    <li><a href='#projects' onClick={closeMenu}>Projects</a></li>
                    <li><a href='#workExperience' onClick={closeMenu}>Experience</a></li>
                    <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
                </ul>

                <div
                    className={styles.mobileMenu}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={isMenuOpen ? styles.open : ''}></span>
                    <span className={isMenuOpen ? styles.open : ''}></span>
                    <span className={isMenuOpen ? styles.open : ''}></span>
                </div>
            </header>
        </div>
    );
}