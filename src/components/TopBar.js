import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TopBar = ({ setSearch, search }) => {
    const [preSearch, setPreSearch] = useState("");
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Movies
                </Navbar.Brand>
                <Nav className="me-auto">
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Form.Control onChange={(e) => {
                        setPreSearch(e.target.value)
                    }} style={{ width: "200px" }} type="text" placeholder="Search Movie" />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Button onClick={() => {
                        setSearch(preSearch)
                    }} variant="primary" type="submit">Search</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopBar