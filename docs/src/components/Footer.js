import React from "react";
import Socials from "./Socials";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container} id='contact'>
      <h3>Contacts</h3>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <ul>
            <li>📱 +44 7379 328098</li>
            <li>📧 ameerogirimah@gmail.com</li>
          </ul>
        </div>
        <Socials />
      </div>
    </footer>
  );
}