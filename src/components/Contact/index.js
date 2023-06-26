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
                <li><strong>Email:</strong> david@kandou.com </li>
                <li><strong>Phone:</strong> +62 8114321386</li>
                <li><strong>Address:</strong> Sukur, Minahasa Utara</li>
            </ul>
            </Card.Body>
        </Card>
        </section>
    );
}

export default Contact;
