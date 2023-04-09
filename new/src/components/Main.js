import React from "react";

import ImportImages from "./ImportImages";
import About from "./About";
import TechStack from "./TechStack";
import Socials from "./Socials";
import CurrentFocus from "./CurrentFocus";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import styles from "../styles/main.module.css";

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
    <body className={ styles.container }>
    <section className={ styles.section }>
        <Socials />
        <div className={ styles.introContainer }>
            <h3 className={ styles.hi }>
                Hi my name is Ameer Ogirimah
            </h3>
            <h2 className={ styles.softwareEngineer }>
                A software Engineer
            </h2>
            <p className={ styles.brief }>
                I am a highly motivated person and I enjoy challenges on new
                and existing roles. I am confident on my
                flexibility in meeting up with the needs of any organization.
            </p>
            <a href="/docs/Ameer-Ogirimah.pdf" target="_blank" rel="noopener noreferrer">
                <button className={ styles.button }>Download CV</button>
            </a>
        </div>
        <div className={ styles.imageContainer }>
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
        < About />
    </section>
    <section id='techStack'>
        <TechStack />
    </section>
    <section id='currentFocus'>
        <CurrentFocus />
    </section>
    <section id='projects'>
        <Projects />
    </section>
    <section id='workExperience'>
        <WorkExperience />
    </section>
    </body>
  );
}