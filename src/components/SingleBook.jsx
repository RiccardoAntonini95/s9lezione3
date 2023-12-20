import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
/*  FUNCTIONAL COMPONENT
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
} */
// CLASS COMPONENT
class SingleBook extends React.Component {
    constructor(props){
        super(props)
        this.state = { isSelected : false }
    }
    handleClick = () => {
        if(!this.isSelected){
        this.setState({isSelected : true})  //non sta funzionando
        console.log("era false")
        }
        else {
            console.log("era true")
        }
    }

    render(){
        return(
            <Col key={this.props.libroSingolo.asin}>
            <Card style={{width: "12rem", border: this.state.isSelected? "3px solid red" : "none"}}
            onClick={this.handleClick}
            >
                <Card.Img variant="top" src={this.props.libroSingolo.img} />
                <Card.Body>
                    <Card.Title>{this.props.libroSingolo.title}</Card.Title>
                    <Card.Text>
                        {this.props.libroSingolo.category} - {this.props.libroSingolo.price}$
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        )
    }
}

export default SingleBook

