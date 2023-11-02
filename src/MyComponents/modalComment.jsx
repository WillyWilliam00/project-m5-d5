import { useState, useEffect, useContext, useCallback } from "react";
import { Button, Modal, Container, Row } from "react-bootstrap";
import AddComment from "./addComment";
import CommentList from "./commentList";
import { DotSpinner } from "@uiball/loaders";
import ThemeContext from "../Context/theme";
import { MoonFill, BrightnessHighFill } from "react-bootstrap-icons";

function ModalComment({ asin, show, setShow }) {
  const handleClose = () => {
    setShow(false);
  };
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState();
  const { dark, setDark } = useContext(ThemeContext);

  const getAllComment = useCallback(() => {
    setLoading(true);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo",
      },
    })
      .then((r) => r.json())
      .then(setAllComment)
      .catch(() => alert("oh oh"))
      .finally(() => setLoading(false));
  }, [asin]);

  useEffect(() => {
    getAllComment();
  }, [getAllComment]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={dark ? "bg-dark" : ""}>
          <Button
            className="me-5"
            variant={dark ? "light" : "secondary"}
            onClick={() => setDark(!dark)}
          >
            {dark ? <BrightnessHighFill /> : <MoonFill />}
          </Button>
          <Modal.Title className={dark ? "dark-mode" : ""}>
            Recensioni
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={dark ? "bg-dark" : ""}>
          <Container style={{ borderBottom: "2px solid black" }}>
            <Row style={{ height: 400, overflow: "auto" }}>
              {loading && (
                <DotSpinner
                  className="spinner"
                  size={40}
                  speed={0.9}
                  color="black"
                />
              )}
              {!loading && (
                <CommentList
                  getAllComment={getAllComment}
                  allComment={allComment}
                />
              )}
            </Row>
          </Container>
          <Container style={{ paddingTop: "10px" }}>
            <AddComment asin={asin} getAllComment={getAllComment} />
          </Container>
        </Modal.Body>
        <Modal.Footer className={dark ? "bg-dark" : ""}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComment;
