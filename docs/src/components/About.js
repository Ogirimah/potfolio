import React from 'react';

import styles from '../styles/about.module.css';

export default function About() {
// This is the about page
//
// @props: None
    return (
    <div className= {styles.container }>
        <div className={ styles.breakdown }>
            <div>
                <h5>
                Front-end Engineer
                </h5>
                <p>
                    I develop front-end applications using ReactJS, HTML, CSS, Jinja2 and JavaScript
                </p>
                <p>
                    <a href="" target="_blank" rel="noopener noreferrer">View Projects</a>
                </p>
            </div>
            <div>
                <h5>
                Back-end Engineer
                </h5>
                <p>
                    I develop backend-end applications using Django, Flask, Python and PostgreSQL
                </p>
                <p>
                    <a href="" target="_blank" rel="noopener noreferrer">View Projects</a>
                </p>
            </div>
            <div>
                <h5>
                Deployment
                </h5>
                <p>
                    I develop software solutions using AWS, Heroku, Docker and Kubernetes
                </p>
                <p>
                    <a href="" target="_blank" rel="noopener noreferrer">View Projects</a>
                </p>
            </div>
        </div>
        <div className={ styles.details }>
            <h3>
                About me
            </h3>
            <p>
                I am proficient with python frameworks like Django and Flask for back-end web development, HTML, CSS, JavaScript for Front-end, and PostgreSQL for database management.</p>
            <p>
                As a creative thinker adept in software development and working with various data
                structures and schemas, I can effectively manage independent projects and collaborate
                as part of productive team. I am currently researching AI and how to use it to build more
                accessible web apps.
            </p>
            <p>
                I have experience in continuous deploying and managing web apps, using AWS services
                like Code-build, Code-pipeline, EKS,  IAM, and CloudFormation.
            </p>
            <div>
                <div>
                    <p>10+</p>
                    <p>Projects completed</p>
                </div>
                <div>
                    <p>5+</p>
                    <p>Happy clients</p>
                </div>
            </div>
        </div>
    </div>
    );
}