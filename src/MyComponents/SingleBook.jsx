import {Col, Card} from "react-bootstrap";
import { useContext, useState } from "react";
import ModalComment from "./modalComment";
import ThemeContext from "../Context/theme";


export default function SingleBook({img, title, asin}) {

  const [selected, setSelected] = useState(false)
  const [show, setShow] = useState(false);
const {dark} = useContext(ThemeContext)
  

   

    return (
        
     <Col xs={12} sm={6} lg={3}>
         <Card className={selected ? "select border border-0" : "border border-0"}  >
             <Card.Img  
                style={{cursor: "pointer"}} variant="top" 
                src={img} 
                onClick={() => {setSelected(!selected); setShow(true)} }  
                className="img-fluid"
            />
            
             <Card.Body className={dark ? "bg-success-subtle" : "bg-info-subtle"}>
                 <Card.Title>{title}</Card.Title>   
                                        
             </Card.Body>
              {selected && <ModalComment asin={asin} show={show} setShow={setShow}/>} 
         </Card>
     </Col>
    
       
    )
}

