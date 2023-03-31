import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
    <body>
    <section>
        <div>
          <ul>
            <li><FontAwesomeIcon icon={("linkedin")} /></li>
            <li><FontAwesomeIcon icon={("github")} /></li>
            <li></li>
            <li><FontAwesomeIcon icon={("codepen")} /></li>
            <li><FontAwesomeIcon icon={("twitter")} /></li>
            <li><FontAwesomeIcon icon={("facebook")} /></li>
            <li><FontAwesomeIcon icon={("instagram")} /></li>
          </ul>
        </div>
        <div></div>
        <div></div>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    </body>
  );
}