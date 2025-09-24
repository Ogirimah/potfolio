import React from "react";
import ImportImages from "./ImportImages";
import OneFocus from "./OneFocus";
import styles from "../styles/currentFocus.module.css";

const images = ImportImages(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));
export default function CurrentFocus() {
    // This function will return an image and a description of my current focus
    //
    // @image: The image to be displayed
    // @description: The description of the activity
    // @link: The link to the activity
    return (
        <div>
            <h3 className={styles.heading}>Current Focus</h3>
            <div className={styles.container}>
                <OneFocus
                    image={images['AI.jpg']}
                    description='AI powered web and native application solutions tailored to each individual use case'
                    link='#'
                />
                <OneFocus
                    image={images['responsive.jpg']}
                    description='Building responsive and accessible web apps that meets WCAG 2.1 guidelines'
                    link='#'
                />
                <OneFocus
                    image={images['open-source.jpg']}
                    description='Contributing to open source and mentoring young developers'
                    link='#'
                />
            </div>
        </div>
    );
}