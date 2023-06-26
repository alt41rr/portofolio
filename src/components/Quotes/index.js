import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3001/quotes')
        .then((response) => {
            setQuotes(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <section className="quotes-section">
        <Container>
            <h2 className="text-center mb-4 title-section">Quotes</h2>
            <div className="d-flex flex-wrap justify-content-center">
            {quotes.map((quote) => (
                <Card key={quote.id} className="m-3">
                <Card.Body>
                    <Card.Text>{quote.quote}</Card.Text>
                    <Card.Text className="text-muted text-right">- {quote.author}</Card.Text>
                </Card.Body>
                </Card>
            ))}
            </div>
        </Container>
        </section>
    );
}

export default Quotes;
