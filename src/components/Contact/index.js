import React from 'react';
import { Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
        <h2 className="section-title">Contact</h2>
        <Card className="contact-card">
            <Card.Body>
            <Card.Title className="contact-title">Contact Information</Card.Title>
            <ul className="contact-info">
                <li><strong>Email:</strong> john.doe@example.com</li>
                <li><strong>Phone:</strong> +1 123-456-7890</li>
                <li><strong>Address:</strong> 123 Street, City, Country</li>
            </ul>
            </Card.Body>
        </Card>
        </section>
    );
}

export default Contact;
