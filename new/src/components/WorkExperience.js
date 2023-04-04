import React from "react";

export default function WorkExperience() {
    // This function returns cards of my work experience passed from the child component
    return (
        <div>
            <h3>My Work Experience</h3>
            <div>
                <ExperienceCard
                    company="Steam Broadcasting and Communication Limited"
                    position="Broadcast Engineer"
                    time="December 2017 - September 2022"
                    description={[
                        "I implemented a radio data system across all three stations platforms, thereby increasing engagement with listeners.",
                        "I was a crucial team member that designed and remodelled all the live studios.",
                        "I efficiently and timely installed and maintained broadcast equipment like transmitters,  audio processors, audio consoles, servers, and audio production workstations."
                        ]}
                    />
                <ExperienceCard
                    company="SEYAAM"
                    position="Technical Manager"
                    time="June 2016 - September 2022"
                    description={[
                        "I was responsible for the design, implementation, and maintenance of the company’s IT infrastructure.",
                        "I developed and  implemented plans for the horticulture, aquaculture, and processing of products, to meet the business goals."
                        ]}
                    />
            </div>
        </div>
    );
}