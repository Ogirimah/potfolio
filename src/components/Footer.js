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
            <li>📱 Phone: <a href={`tel:${"+44 7379 328098"}`}>{"+44 7379 328098"}</a></li>
            <li>📧 Email: <a href={`mailto:${"enquiry@ogirimah.com"}`}>{"enquiry@ogirimah.com"}</a></li>
          </ul>
        </div>
        <Socials />
      </div>
    </footer>
  );
}