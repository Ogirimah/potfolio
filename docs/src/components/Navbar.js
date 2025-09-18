import { useContext } from "react";
import styles from "../styles/navbar.module.css";
import { ThemeContext } from "../App.js"
import Switch from "react-switch";

export default function Navbar() {
    const { theme, toggleTheme, toggleTicTacToe, showTicTacToe } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <header className={styles.heading}>
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

                <button onClick={toggleTicTacToe} className={styles.gameButton}>
                    {showTicTacToe ? 'Hide Game' : 'Play Game'}
                </button>

                <ul className={styles.list}>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#techStack'>Tech Stack</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#workExperience'>Experience</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>

                <div className={styles.mobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        </div>
    );
}