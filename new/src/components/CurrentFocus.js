import React from "react";
import ImportImages from "./ImportImages";
import OneFocus from "./OneFocus";

const images = ImportImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));
export default function CurrentFocus() {
    // This function will return an image and a description of my current focus
    //
    // @image: The image to be displayed
    // @description: The description of the activity
    // @link: The link to the activity
    return (
        <div>
            <h3>Current Focus</h3>
            <div>
                <OneFocus
                    image={images['AI.jpg']}
                    description='Ai powered web solutions using Keras, TensorFlow, and ML.NET '
                    link=''
                    />
                <OneFocus
                    image={images['responsive.jpg']}
                    description='Building responsive and accessible web apps that meets WCAG 2.1 guidelines '
                    link=''
                    />
                <OneFocus
                    image={images['open-source.jpg']}
                    description='Contributing to open source and helping young developers understand and adopt modern programming methods'
                    link=''
                    />
            </div>
        </div>
    );
}