import React from 'react';
import './Experience.css';

const Education = () => {
    return (
        <section className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                <div className="experience-card">
                    <h3 className="experience-title">Graphic Designer at XYZ Agency</h3>
                    <p className="experience-details">
                        June 2018 - Present<br />
                        As a graphic designer at XYZ Agency...
                    </p>
                </div>
                <div className="experience-card">
                    <h3 className="experience-title">Freelance Graphic Designer</h3>
                    <p className="experience-details">
                        January 2016 - May 2018<br />
                        As a freelance graphic designer...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Education;
