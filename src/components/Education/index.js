import React from 'react';
import { Card } from 'react-bootstrap';
import './Education.css';

const Education = () => {
    return (
        <section className="education-section">
            <h2 className="title-section">Education</h2>
            <Card className="education-card">
                <Card.Body>
                <Card.Title className="education-title">Education Information</Card.Title>
                <ul className="education-info">
                    <li>
                    <strong>University of Example</strong> - Bachelor's Degree in Graphic Design (2014-2018)
                    </li>
                    <li>
                    <strong>Example High School</strong> - High School Diploma (2010-2014)
                    </li>
                </ul>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Education;
