import React from 'react';

import styles from '../styles/about.module.css';

export default function About() {
    // This is the about page
    //
    // @props: None
    return (
        <div className={styles.container}>
            <div className={styles.breakdown}>
                <div>
                    <h5>
                        Full-Stack Engineering
                    </h5>
                    <p>
                        I engineer dynamic, high-performance user interfaces using React.js and Next.js,
                        with a strong emphasis on type-safe, maintainable code through TypeScript.
                        My focus is on building seamless, responsive, and scalable front-end architectures with modern JavaScript,
                        HTML, and CSS that perfectly complement and integrate with robust back-end systems.


                    </p>
                    {/* <p>
                    <a href="" target="_blank" rel="noopener noreferrer">View Projects</a>
                </p> */}
                </div>
                <div>
                    <h5>
                        Back-end Engineering
                    </h5>
                    <p>
                        I develop robust and scalable backend systems using Python,
                        with expert-level proficiency in Django and Flask frameworks.
                        I architect and manage high-performance data layers with PostgreSQL,
                        ensuring secure, efficient, and maintainable server-side applications that power complex business logic and deliver reliable user experiences.
                    </p>
                    {/* <p>
                    <a href="" target="_blank" rel="noopener noreferrer">View Projects</a>
                </p> */}
                </div>
                <div>
                    <h5>
                        ML Development, Deployment, and Integration
                    </h5>
                    <p>
                        I specialise in building end-to-end, scalable, and efficient ML development, deployment,
                        and integration pipelines. My expertise covers the entire lifecycle—from building models with
                        TensorFlow and Scikit-learn and creating advanced AI applications with LangChain,
                        to deploying production-ready, integrated systems on AWS. I focus on ensuring a seamless flow from experimentation to deployment,
                        delivering robust AI solutions that meet strategic objectives.
                    </p>
                    {/* <p>
                    <a href="" target="_blank" rel="noopener noreferrer">View Projects</a>
                </p> */}
                </div>
            </div>
            <div className={styles.details}>
                <h3>
                    About me
                </h3>
                <p>
                    I am a full-stack developer proficient in building end-to-end web applications using modern technologies.
                    My backend expertise lies in Python frameworks like Django and Flask, coupled with PostgreSQL for robust database management.
                    On the front-end, I utilise HTML, CSS, JavaScript, and modern frameworks to create dynamic user interfaces.
                </p>
                <p>
                    A key achievement was the full-stack development and deployment of a home clinic application, which features an integrated AI chatbot.
                    This project was built using Next.js, LangChain, and PostgreSQL, and seamlessly deployed on Vercel.
                    Furthermore, I engineered an esports platform that incorporated a custom-developed and integrated machine learning model for predictive analytics,
                    utilising a similar tech stack for scalability and performance.
                </p>
                <p>
                    I have extensive experience in implementing continuous deployment and managing cloud infrastructure using AWS services,
                    including CodeBuild, CodePipeline, EKS, IAM, and CloudFormation.
                    As a creative thinker adept at working with diverse data structures, I excel at managing independent projects and collaborating effectively within teams.
                    My current focus is on researching and leveraging AI to build more intelligent and accessible web applications.
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