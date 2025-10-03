import React from "react";

export default function Recommendation() {
    return (
        <div style={{padding: "20px"}}>
            <h2>Job Recommendations</h2>
            <div className="job-card">
                <h3>Frontend Developer</h3>
                <p>Skills: React, HTML, CSS</p>
            </div>
            <div className="job-card">
                <h3>Backend Developer</h3>
                <p>Skills: Node.js, SQL</p>
            </div>
        </div>
    );
}
