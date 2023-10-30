import { useState, useEffect } from 'react';
import {Button, Modal, Container, Row} from 'react-bootstrap';
import AddComment from "./addComment"
import CommentList from "./commentList"
import { DotSpinner } from '@uiball/loaders'

function ModalComment({asin, show, setShow}) {
  
  const handleClose = () =>{setShow(false);};
  const [allComment, setAllComment] = useState([])
  const [loading, setLoading] = useState(true)
  
    useEffect(() => {

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo"
        }})
        .then(r => r.json())
        .then(setAllComment)
        .catch(()=>alert("oh oh"))
        .finally(()=>setLoading(false))
        
    },[asin])
    console.log(allComment)
 

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recensioni</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Container style={{borderBottom: "2px solid black"}}>
          <Row style={{height: 400, overflow: "auto"}}>
          { loading && <DotSpinner 
                  className="spinner"
                  size={40}
                  speed={0.9} 
                  color="black" 
                  
              /> }
              {!loading &&<CommentList allComment={allComment} setAllComment={setAllComment} setLoading={setLoading} asin={asin}/>}
          </Row>            
        </Container> 
        <Container style={{paddingTop: "10px"}}>
                <AddComment asin={asin} setAllComment={setAllComment} setLoading={setLoading}/> 
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComment;



