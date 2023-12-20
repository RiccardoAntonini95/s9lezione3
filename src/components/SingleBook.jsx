import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SingleBook = ({libroSingolo}) => {
    return (
        <Col key={libroSingolo.asin}>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={libroSingolo.img} />
                <Card.Body>
                    <Card.Title>{libroSingolo.title}</Card.Title>
                    <Card.Text>
                        {libroSingolo.category} - {libroSingolo.price}$
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBook

