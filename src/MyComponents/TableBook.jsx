import {Row, Container, Col} from "react-bootstrap";
import fantasy from "../books/fantasy.json"
import SingleBook from "./SingleBook";


export default function TableBook({name, setName}) {
    const usingQuery = book => book.title.toLowerCase().includes(name.toLowerCase())



    return (
        
        <Container className="my-5">
            <Row>
                <Col xs={12} className="d-flex justify-content-center">
                    
                </Col>
            </Row>
            <Row className="row-gap-5">
                {fantasy.filter(usingQuery).map(book => (
                    <SingleBook img={book.img} title={book.title} key={book.asin} asin={book.asin}/> 
                ))}

            </Row>
        </Container>



    );

}

