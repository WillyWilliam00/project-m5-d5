import {Col, Card} from "react-bootstrap";
import { useState } from "react";
import ModalComment from "./modalComment";


export default function SingleBook({img, title, asin}) {

  const [selected, setSelected] = useState(false)
  const [show, setShow] = useState(false);
 
  

   

    return (
        
     <Col xs={12} sm={6} lg={3}>
         <Card className={selected ? "select" : ""}  >
             <Card.Img  
                style={{cursor: "pointer"}} variant="top" 
                src={img} 
                onClick={() => {setSelected(!selected); setShow(true)} }  
                className="img-fluid"
            />
            
             <Card.Body>
                 <Card.Title>{title}</Card.Title>   
                                        
             </Card.Body>
              {selected && <ModalComment asin={asin} show={show} setShow={setShow}/>} 
         </Card>
     </Col>
    
       
    )
}

