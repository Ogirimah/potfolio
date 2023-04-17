import React from "react";

export default function ExperienceCard({ company, position, descriptions }) {
    // This takes in a company, position, and descriptions and returns a div with the company, position, and descriptions
    //
    // @company: The company name
    // @position: The position held
    // @descriptions: The descriptions of the position
    return (
        <div>
        <h3>{company}</h3>
        <h4>{position}</h4>
        <ul>
            {descriptions.map((description) => (
            <li>{description}</li>
            ))}
        </ul>
        </div>
    );
}