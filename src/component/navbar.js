import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from "react"

export const NavBar = () => {
const [translateback,settranslateback] = useState("translate")

const  handleClick = () => {
    translateback === "translate"? settranslateback("translateback"):settranslateback("translate")
  }

  return (
    <>
      <Navbar className="navbar" variant="dark">
        <Container className="p-2">
          <Navbar.Brand className='navBrand' style={{cursor:"pointer"}} href="#home">LIRAN</Navbar.Brand>
          <Nav className='position-relative'>
            <Nav.Link className='navLink' href="#home">HOME</Nav.Link>
            <Nav.Link className='navLink' href="#about">ABOUT ME</Nav.Link>
            <Nav.Link className='navLink' href="#skills">SKILLS</Nav.Link>
            <Nav.Link className='navLink' href="#education">EDUCATION</Nav.Link>
            <Nav.Link className='navLink' href="#experience">EXPERIENCE</Nav.Link>
            <Nav.Link className='navLink' href="#projects">PROJECTS</Nav.Link>
            <Nav.Link className='navLink' href="#contact">CONTACT</Nav.Link>
            <GiHamburgerMenu onClick={handleClick} className='hamIcons' size={30} style={{color:"white",marginTop:"7px"}}/>
          </Nav>
        </Container>
      </Navbar>
      <div className='d-flex justify-content-end'>
      <div className={`miniMenu ${translateback}`} style={{width:"200px",minHeight:"100px",backgroundColor:"white"}}>
          <Nav className='nav d-flex flex-column'> 
            <Nav.Link className='miniNavLink' href="#home">HOME</Nav.Link>
            <Nav.Link className='miniNavLink' href="#about">ABOUT ME</Nav.Link>
            <Nav.Link className='miniNavLink' href="#skills">SKILLS</Nav.Link>
            <Nav.Link className='miniNavLink' href="#education">EDUCATION</Nav.Link>
            <Nav.Link className='miniNavLink' href="#experience">EXPERIENCE</Nav.Link>
            <Nav.Link className='miniNavLink' href="#projects">PROJECTS</Nav.Link>
            <Nav.Link className='miniNavLink' href="#contact">CONTACT</Nav.Link>
          </Nav>
      </div>
      </div>
    </>
  );
}