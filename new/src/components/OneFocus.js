import React from "react";
import styles from "../styles/oneFocus.module.css";

export default function OneFocus({ image, description, link }) {
    // This takes in an image, description, and link and returns a div with the image and description
    //
    // @image: The image to be displayed
    // @description: The description of the activity
    // @link: The link to the activity
    return (
        <div className={ styles.component }>
            <img src={image} alt="Current Focus" />
            <p>{description}</p>
            <a href={link}>Learn More</a>
        </div>
    );
}