import {Nav, Navbar, Button} from "react-bootstrap";
import ThemeContext from "../Context/theme";
import { useContext } from "react";



function MyNavBar({name, setName}) {

  const { dark, setDark } = useContext(ThemeContext);
 
  
  return (
    
    <Navbar fixed="top" expand="lg" className="ps-1" bg={dark ? "success-subtle" : "info-subtle"} data-bs-theme={dark ? "light" : "dark"}>
      
      <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'>
            <img
              alt="book"
              src="https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="d-inline-block align-top nav-img rounded-4"
            />
            <span className='fw-bolder ps-2'>EPICBOOKS</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Aboute</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
          <label className="ms-auto pe-5" >
                       <input className="input-text" name="TitleName" placeholder="Signore degli Anelli.." value={name} 
                       onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <Button className="mx-5" variant={dark ? "light" : "secondary"} onClick={()=> setDark(!dark)}>
            {dark ? "Light Mode" : "Dark Mode"}
          </Button>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default MyNavBar;
