import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Socials from "./Socials";

export default function Footer() {
    return (
    <div>
      <h3>Contacts</h3>
        <div>
            <div>
                <ul>
                    <li>+44 7379 328098</li>
                    <li>ameerogirimah@gmail.com</li>
                </ul>
            </div>
            <Socials />
        </div>
    </div>
  );
}