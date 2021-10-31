import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Nav.css';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="nav-logo fw-bold text-success" href="#home">Tour<span className="text-danger">Mania</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="link-title" as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className="link-title" as={Link} to='/packages'>Packages</Nav.Link>
                        <Nav.Link className="link-title" as={Link} to='/blogs'>Blogs</Nav.Link>

                        {
                            user.email ? <Nav.Link className="link-title" as={Link} to='/orders'>My Orders</Nav.Link> :
                                " "
                        }


                        {
                            user?.email ?
                                <Button onClick={logOut} className="px-2 py-0 mx-2" variant="danger">Log Out </Button> :
                                <Nav.Link className="link-title" as={Link} to='/login'>Login</Nav.Link>

                        }
                        <Navbar.Text className="text-dark">
                            <i class="fas fa-user-alt"></i> <a className="text-black" href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;