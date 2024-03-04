import "./navbar.scss";
import todoIcon from "./../../asets/images/nav/todoIcon.svg";
import { FC } from "react";
import { Container, Image, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <NavbarBs className="nav-custom p-4">
      <Container className="d-flex justify-content-center p-0 align-items-center">
        <NavbarBs.Brand>
          <Container className="d-flex align-items-center">
            <NavLink className="me-3" to="/">
              <Image src={todoIcon} className="logo__img" />
            </NavLink>
            <span className="logo__text fs-3">TODO List</span>
          </Container>
        </NavbarBs.Brand>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
