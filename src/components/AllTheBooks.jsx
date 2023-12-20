import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from "../data/books.json";



class AllTheBooks extends React.Component {
    state = {categoriaSelezionata : Object.values(books)[0]}
    render() {
        console.log(books)
        console.log(Object.values(books)[0])   /* categoria singola all'interno di books */
        return (
            <Container fluid>
                <Row>
                    {books.fantasy.map(libro => {
                    return (
                        <Col key={libro.asin}>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src={libro.img} />
                                <Card.Body>
                                    <Card.Title>{libro.title}</Card.Title>
                                    <Card.Text>
                                        {libro.category} - {libro.price}$
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )})}
                </Row>
            </Container>
        )
                    }
}

export default AllTheBooks;



