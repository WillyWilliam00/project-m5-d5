import { useState } from 'react';
import {Button, Form} from 'react-bootstrap';



function AddComment({asin, setAllComment, setLoading}) {

    const [text, setText] = useState("")
    const [rate, setRate] = useState("")

    function GetComment(){
      setLoading(true)
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo"
      }})
      .then(r => r.json())
      .then(setAllComment)
      .catch(()=>alert("oh oh"))
      .finally(()=>setLoading(false))     
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            comment: text,
            rate: rate,
            elementId: asin
        }

        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo"
              },
              method: "POST",
              body: JSON.stringify(form),
            }).then(
                (response) => {
                    if (response.ok){
                        alert("Salvato!")
                        GetComment()              
                    } else {
                        alert("oh oh")
                    }
                }
            )
    }


  return (
    <Form onSubmit={handleSubmit}>
      <h4>Inserisci una recensione!</h4>
      <Form.Group className="mb-3 mt-2" controlId="text">
        <Form.Label>Cosa ne pensi?</Form.Label>
        <Form.Control type="text" placeholder="Scrivi la tua recensione" required value={text} onChange={(e)=> setText(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="stars">
        <Form.Label>Quanto ti è piaciuto?</Form.Label>
        <Form.Control type="number" min="1" max="5" required value={rate} onChange={(e)=> setRate(e.target.value)}/>
      </Form.Group>
      <div className='d-flex justify-content-center align-items-center'>
        <Button variant="primary" type="submit" >
          Invia la tua recensione!
        </Button>
      </div>
    </Form>
  );
}

export default AddComment;