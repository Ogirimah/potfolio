import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImportImages from "./ImportImages";
import TechStack from "./TechStack";
import Socials from "./Socials";
import CurrentFocus from "./CurrentFocus";
import Projects from "./Projects";

const images = ImportImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default function Main() {
    // Main Component: This is the main component of the website. It contains
    // the details of my portfolio.
    //
    // This component contains the following:
    // 1. A section that contains my name, my role, my picture and my CV.
    // 2. A section that contains my skills.
    // 3. A section that contains my projects.
    // 4. A section that contains my experience.
    // 5. A section that contains my contact details.
    // 6. A section that contains my social media links.
    return (
    <body>
    <section>
        <Socials />
        <div>
            <h3>
                Hi my name is Ameer Ogirimah
            </h3>
            <h2>
                A software Engineer
            </h2>
            <p>
                I am an highly motivated person and I enjoy challenges on new
                and existing roles. I am confident on my
                flexibility in meeting up with the needs of any organization.
            </p>
            <a href="/docs/Ameer-Ogirimah.pdf" target="_blank" rel="noopener noreferrer">
                <button>Download CV</button>
            </a>
        </div>
        <div>
            <div>
                <img src={images['ameer.png']} alt="Ameer Ogirimah" />
            </div>
            <div className={"img-semi-circle"}>
            </div>
            <div>
                <p>Let's Talk</p>
                <p>8 years + Experience</p>
            </div>
        </div>
    </section>
    <section>
        <div>
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
        <div>
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
    </section>
    <section>
        <TechStack />
    </section>
    <section>
        <CurrentFocus />
    </section>
    <section>
        <Projects />
    </section>
    <section></section>
    </body>
  );
}