import MyNavBar from "./MyComponents/navBar"
import Jumbotron from "./MyComponents/Welcome"
import Footer from "./MyComponents/Footer"
import TableBook from "./MyComponents/TableBook"
import { useState } from "react";

import './App.css';


function App() {
  const [name, setName] = useState("");

  return (
    <>
      <MyNavBar  name={name} setName={setName} />

      <Jumbotron />


      <TableBook name={name} setName={setName} />


      <Footer />
    </>
  );
}

export default App;
