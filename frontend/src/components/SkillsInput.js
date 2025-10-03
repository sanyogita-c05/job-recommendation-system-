import React, { useState } from "react";

export default function SkillsInput() {
    const [skills, setSkills] = useState("");

    const handleChange = (e) => {
        setSkills(e.target.value);
    };

    return (
        <div style={{padding: "20px"}}>
            <label>
                Enter your skills:
                <input type="text" value={skills} onChange={handleChange} />
            </label>
            <p>Your skills: {skills}</p>
        </div>
    );
}
