import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImportImages from "./ImportImages";
import styles from "../styles/projects.module.css"; // Import the same CSS module

const images = ImportImages(require.context('../../public/images/svg', false, /\.(png|jpe?g|svg)$/));

export default function IndividualProject({ image, heading, description, link1, link2 }) {
  return (
    <div className={styles.project}>
      <img src={image} alt={heading} />
      <div className={styles.projectContent}>
        <h3>{heading}</h3>
        <p>{description}</p>
        <div className={styles.projectLinks}>
          {link1 ? (
            <a href={link1} target="_blank" rel="noopener noreferrer">
              <img src={images['link.svg']} alt="Website link" />
              Live Demo
            </a>
          ) : (
            <a href="#" disabled style={{ pointerEvents: 'none', cursor: 'default' }}>
              <img src={images['link.svg']} alt="Website link" />
              Demo Unavailable
            </a>
          )}
          {link2 ? (
            <a href={link2} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "github"]} />
              Source Code
            </a>
          ) : (
            <a href="#" disabled style={{ pointerEvents: 'none', cursor: 'default' }}>
              <FontAwesomeIcon icon={["fab", "github"]} />
              Code Unavailable
            </a>
          )}
        </div>
      </div>
    </div>
  );
}