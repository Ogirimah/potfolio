import React from "react";

import ImportImages from "./ImportImages";
import IndividualProject from "./IndividualProject";

const images = ImportImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default function Projects() {
    // This function returns project cards with images, descriptions, and links
    //
    // @image: The image to be displayed
    // @heading: The heading of the project
    // @description: The description of the activity
    // @link1: GitHub link to the project
    // @link2: Live link to the project
    return (
        <div>
            <h3>Projects</h3>
            <div>
                <IndividualProject
                    image={images['iconator.jpg']}
                    heading='ICONATOR'
                    description='We developed a favicon generator. AllAuth was use for authentication, and Cloudinary for processing and storing image data, ninja. We took advantage of Django model classes and function - based view to power the backend.'
                    link1='https://iconator.pythonanywhere.com/'
                    link2='https://github.com/zuri-training/Team-65-Favicon-gen'
                />
                <IndividualProject
                    image={images['fyyur.jpg']}
                    heading='FYYUR'
                    description='I built an event booking web app using Flask and PostgreSQL . It is built as a RESTful API accessible from an ionic front-end.  PostgreSQL and Flask were use to effectively build the app.'
                    link1=''
                    link2='https://github.com/Ogirimah/Fyyur'
                />
                <IndividualProject
                    image={images['coffee-shop.jpg']}
                    heading='COFFEE SHOP'
                    description='A RESTfull API-built app for managing, brewing, and purchasing coffee. Powered by Flask, PostgreSQL, react, and AWS. It is built on a reliable structure for long-lasting function.'
                    link1=''
                    link2='https://github.com/Ogirimah/coffee-shop'
                    />
                <IndividualProject
                    image={images['ghana-food.jpg']}
                    heading='GHANA FOOD'
                    description='I was a member of a team that did a technical analysis and reporting of the comparison of the price of imported and locally produced rice. in Ghana between the years of 2008 to 2018, using R, Git, and Kanban board.'
                    link1=''
                    link2='https://github.com/Ogirimah/Ghana-food-prices'
                    />
                <IndividualProject
                    image={images['robot-controller.jpg']}
                    heading='ROBOT CONTROLLER'
                    description='Programmed a virtual robot vehicle to navigate a tract in Unity using C# autonomously  Used interaction between Raycast and road Layermask to autonomously navigate the track.'
                    link1=''
                    link2='https://github.com/Ogirimah/AI-Car-Simulation'
                    />
                <IndividualProject
                    image={images['portfolio.jpg']}
                    heading='PORTFOLIO'
                    description='This is my portfolio website. It is built with React, and is hosted on GitHub. It is built on a reliable structure for long-lasting function.'
                    link1=''
                    link2='https://github.com/Ogirimah/potfolio'
                    />
            </div>
        </div>
    );
}