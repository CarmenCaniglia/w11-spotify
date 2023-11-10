import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import logo from "../Assets/logo/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchItem);
  };

  return (
    <>
      <Navbar
        className="navbar navbar-expand fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <NavbarBrand className="navbar-brand">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </NavbarBrand>
          <NavbarToggle
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <NavbarCollapse
            className="collapse navbar-collapse mt-4"
            id="navbarNavAltMarkup"
          >
            <Nav className="navbar-nav">
              <ul className="ps-0">
                <li>
                  <NavLink
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </NavLink>
                </li>
                <li>
                  <Form onSubmit={handleSearchSubmit}>
                    <InputGroup className="input-group mt-3">
                      <FormControl
                        type="text"
                        className="form-control "
                        id="searchField"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        value={searchItem}
                        onChange={handleSearchChange}
                      />
                      <div className="input-group-append">
                        <Button
                          variant="outline-secondary"
                          className="btn btn-outline-secondary btn-sm h-100"
                          type="sumbit"
                        >
                          GO
                        </Button>
                      </div>
                    </InputGroup>
                  </Form>
                </li>
              </ul>
            </Nav>
          </NavbarCollapse>
        </div>

        <div className="nav-btn">
          <Button className=" signup-btn" type="button">
            Sign Up
          </Button>
          <Button className=" login-btn" type="button">
            Login
          </Button>
          <div>
            <Link to="/">Cookie Policy</Link>|<Link to="/"> Privacy</Link>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default SideBar;
