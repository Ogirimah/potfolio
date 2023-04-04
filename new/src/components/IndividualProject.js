import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ImportImages from "./ImportImages";

const images = ImportImages(require.context('../images/svg', false, /\.(png|jpe?g|svg)$/));

export default function IndividualProject({ ...props }) {
  // This takes in an image, description, and link and returns a div with the image and description
  //
  // @image: The image to be displayed
  // @heading: The heading of the project
  // @description: The description of the activity
  // @link1: The link to the live project
  // @link2: The link to the GitHub source code
  return (
    <div>
      <img src={props.image} alt="Current Focus" />
        <h3>{props.heading}</h3>
      <p>{props.description}</p>
      <a href={props.link1}>
          <img src={images['link.svg']} alt="Website hook" />
      </a>
       <a href={props.link2}>
            <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
    </div>
  );
}