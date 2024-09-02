import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";
import "../css/Header.css"; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand href="/"><h2>LearnHub</h2></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/add-course" className="nav-link" activeClassName="active">Add Course</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/view-courses" className="nav-link" activeClassName="active">View Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
