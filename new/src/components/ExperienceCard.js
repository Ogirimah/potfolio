import React from "react";
import styles from "../styles/workExperience.module.css";

export default function ExperienceCard({ company, position, time, descriptions }) {
    return (
        <div className={styles.experience}>
            <h3>{company}</h3>
            <h4>{position}</h4>
            {time && <p className={styles.time}>{time}</p>}
            <ul>
                {descriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
        </div>
    );
}