import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Add from "./Add";
import Links from "./Links";
import VisibleItemList from "./VisibleItemList";

const App = (props) => {
  const [listItems, cListItems] = useState([]);

  const linkClick = (filter) => {
  };

  useEffect(() => {
    // localStorage.removeItem("list");
    const stored = JSON.parse(localStorage.getItem("list")) || [];
    cListItems(stored);
  }, []);

  return (
    <>
      <Navbar bg="info" variant="dark">
        <Navbar.Brand>React Shopping List</Navbar.Brand>
      </Navbar>
      <Container>
        <Add/>
        <Links onclick={(filter) => linkClick(filter)} />
        <VisibleItemList />
      </Container>
    </>
  );
};

export default App;
