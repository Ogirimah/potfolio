import React from "react";
import ImportImages from "./ImportImages";
import IndividualProject from "./IndividualProject";
import styles from "../styles/projects.module.css"; // Import the CSS module

const images = ImportImages(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

export default function Projects() {
    return (
        <div className={styles.section}> {/* Added container class */}
            <h3 className={styles.heading}>Projects</h3> {/* Added heading class */}
            <div className={styles.container}> {/* Added grid container class */}
                <IndividualProject
                    image={images['financial-engine.svg']}
                    heading='AI FINANCIAL DECISION ENGINE'
                    description='An automated financial record evaluation and decision-support engine built with multi-agent LLM workflows (LangGraph, FastAPI) and asynchronous document parsing. It reduced end-to-end processing time from 4 days to 120 minutes and cut manual review costs by 70%.'
                    link1=''
                    link2=''
                />
                <IndividualProject
                    image={images['healthcare-platform.svg']}
                    heading='HEALTHCARE ONBOARDING PLATFORM'
                    description='An event-driven patient onboarding, automated triage, and multi-channel follow-up platform for a home healthcare clinic, built with Python, React, and PostgreSQL. It reduced administrative onboarding time by 65% and improved patient follow-up adherence by 48%.'
                    link1=''
                    link2=''
                />
                <IndividualProject
                    image={images['agentic-rag.svg']}
                    heading='AGENTIC RAG CONTEXT LAYER'
                    description='Custom MCP servers and a scalable Agentic RAG context-management layer using pgvector and semantic caching, lowering LLM token consumption by 50%, reducing P95 query latency by 42%, and cutting hallucination rates to under 2%.'
                    link1=''
                    link2=''
                />
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
            </div>
        </div>
    );
}
