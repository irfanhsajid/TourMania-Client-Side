import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Nav.css';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="nav-logo fw-bold text-primary" href="#home">TourMania</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/packages'>Packages</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        {
                            user.email ? <Nav.Link as={Link} to='/orders'>My Orders</Nav.Link> :
                                " "
                        }


                        {
                            user?.email ?
                                <Button onClick={logOut} className="px-2 py-0 mx-2" variant="light"> Log Out </Button> :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;