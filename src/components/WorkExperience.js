import React from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "../styles/workExperience.module.css";

export default function WorkExperience() {
    // This function returns cards of my work experience passed from the child component
    return (
        <div className={styles.container}>
            <h3>My Work Experience</h3>
            <div>
                <ExperienceCard
                    company="Xylont"
                    position="Technical Manager"
                    time="Jan 2026 - Present"
                    descriptions={[
                        "Spearheaded technical architecture and end-to-end software delivery at the intersection of artificial intelligence, backend engineering, and business operations, deploying production-grade AI platforms that increased operational throughput by 3.5x.",
                        "Architected and deployed an automated financial record evaluation and decision-support engine using multi-agent LLM workflows (LangGraph, FastAPI) and asynchronous document parsing, reducing average end-to-end processing time from 4 days to 120 minutes (a 97% reduction) and cutting manual review costs by 70%.",
                        "Engineered an event-driven patient onboarding, automated triage, and multi-channel follow-up software platform for a home healthcare clinic using Python, React, and PostgreSQL, reducing administrative onboarding time by 65% and improving patient follow-up adherence by 48%.",
                        "Designed custom MCP servers and a scalable Agentic RAG context-management layer leveraging pgvector and semantic caching, lowering LLM token consumption by 50%, reducing P95 query latency by 42%, and cutting hallucination rates across clinical and financial queries to under 2%.",
                        "Implemented an automated MLOps observability and evaluation pipeline with structured reasoning trace logging and CI/CD guardrails, shrinking model deployment and validation cycles from days to under 2 hours (85% faster release velocity)."
                    ]}
                />
                <ExperienceCard
                    company="Outlier AI"
                    position="AI Specialist"
                    time="Jan 2024 - May 2025"
                    descriptions={[
                        "Audited, benchmarked, and refactored over 1,200 complex AI-generated code implementations across Python, JavaScript, TypeScript, SQL, and C, resolving algorithmic bottlenecks and edge-case bugs to boost model pass@1 code-synthesis accuracy by 34%.",
                        "Evaluated and optimised the programmatic integration of frontier LLMs with external developer APIs, CLI utilities, and sandboxed code execution environments, improving autonomous agent tool-calling reliability by 40% and reducing redundant execution steps by 28%.",
                        "Engineered automated Python validation harnesses, golden reference codebases, and multi-dimensional evaluation rubrics for RLHF post-training across software engineering and computational science domains, accelerating dataset QA throughput by 45%.",
                        "Conducted deep-dive failure-mode analysis on multi-step chain-of-thought reasoning traces, identifying systemic logic and syntax regressions that improved post-trained model adherence to complex system prompts by 30%."
                    ]}
                />
                <ExperienceCard
                    company="University of Hertfordshire"
                    position="Information Technology Officer"
                    time="Sep 2023 - Feb 2024"
                    descriptions={[
                        "Engineered Python and Bash diagnostic automation scripts to streamline first-line software, network, and identity-management troubleshooting across academic departments, reducing average ticket resolution time by 38%.",
                        "Nominated for the prestigious Vice-Chancellor's Team of the Year Award in recognition of outstanding technical service delivery, cross-departmental systems support, and measurable contributions to university-wide operational efficiency.",
                        "Resolved 95%+ of complex software configuration, Virtual Learning Environment (VLE) integration, and campus authentication incidents on first contact, earning formal commendations from faculty and students for technical precision.",
                        "Consistently exceeded strict Service Level Agreements (SLAs) by 25% across high-volume support queues, authoring standardised troubleshooting runbooks that reduced recurring software support escalations by 30%."
                    ]}
                />
                <ExperienceCard
                    company="Steam and Globe Communication"
                    position="Senior Production Engineer"
                    time="Dec 2017 - Sep 2022"
                    descriptions={[
                        "Architected and managed an automated 24/7 system availability monitoring, anomaly detection, and reporting platform using Python (asyncio, Celery, FastAPI/Flask), FFmpeg, and PostgreSQL to continuously probe live audio/video streams for packet loss, silence, and frame freezes—reducing unplanned system downtime by 65% and cutting Mean Time to Detect (MTTD) from 25 minutes to under 15 seconds.",
                        "Built a real-time operational telemetry and automated incident-reporting web dashboard using Python, Redis, and WebSockets, automating daily SLA compliance reporting and reducing manual diagnostic overhead by 70%.",
                        "Engineered low-latency Real-Time Transport Protocol (RTP) media streaming pipelines across three production channels using Python bindings for GStreamer and FFmpeg transcoding profiles, improving stream stability by 55% and reducing CPU encoding overhead by 35%.",
                        "Developed a fault-tolerant Python microservice and TCP/serial socket daemon to automate real-time metadata ingestion and dynamic data synchronisation across three platform endpoints, increasing end-user content engagement by 42%.",
                        "Mentored, onboarded, and trained 10+ junior software and systems engineers in Python automation, Linux server administration, Git workflows, and automated unit testing (pytest), reducing new-hire ramp-up time by 50% and improving team deployment velocity by 40%."
                    ]}
                />
                <ExperienceCard
                    company="Gotel Communication"
                    position="Systems Engineer"
                    time="May 2015 - Apr 2016"
                    descriptions={[
                        "Designed and engineered a mission-critical idempotent schedule ingestion component for the core programme scheduling system using Python (Django/Flask, Celery) and JavaScript, leveraging SHA-256 payload hashing, deterministic UUIDs, and Redis distributed locks with PostgreSQL transactional upserts to eliminate 100% of duplicate schedule entries during network retries and reduce scheduling conflict errors by 85%.",
                        "Built an asynchronous client-side validation and conflict-detection interface in JavaScript integrated with RESTful Python endpoints, providing real-time timeslot collision warnings that reduced manual data-entry time by 60% and cut schedule publishing latency by 45%.",
                        "Developed automated XML/JSON playlist parsers and background reconciler daemons in Python to synchronise schedule updates with downstream playout databases, improving end-to-end data ingestion throughput by 50%.",
                        "Implemented automated unit and integration test suites (Python unittest) and structured application logging across the scheduling pipeline, decreasing post-release regression defects by 40% and accelerating incident root-cause analysis by 55%."
                    ]}
                />
            </div>
        </div>
    );
}
