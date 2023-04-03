import React from "react";
import ImportImages from "./ImportImages";

const images = ImportImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));
export default function TechStack() {
    // This function will return a list of tech-stack images
    return (
        <div>
            <h3>Tech Stack</h3>
            <div>
                <img src={images['react.png']} alt="React" />
                <img src={images['python.png']} alt="Python" />
                <img src={images['django.png']} alt="Django" />
                <img src={images['javascript.png']} alt="JavaScript" />
                <img src={images['flask.png']} alt="Flask" />
                <img src={images['postgresql.png']} alt="PostgreSQL" />
                <img src={images['aws.png']} alt="AWS" />
            </div>
        </div>
    );
}