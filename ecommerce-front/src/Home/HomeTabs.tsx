import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"
import './HomeTabsStyle.css'
import Users from "./Tabs/Users";
import { useState } from "react";
import ProductsManager from "./Tabs/Products/ProductsManager";

const HomeTabs = () => {
  let [activePage, setActivePage] = useState('productsManager');
  let userLogged = {name: "Bruno Vasconcelos", token: ""}
  return (
    <>
      <Navbar bg="mainColor" variant="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{cursor: "pointer"}} onClick={() => setActivePage('productsManager')}>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setActivePage('productsManager')}>Gerenciar Produtos</Nav.Link>
            <Nav.Link onClick={() => setActivePage('users')}>Usuários</Nav.Link>
          </Nav>
          <Nav>
            <Image className="userAvatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&s" roundedCircle />
            <NavDropdown title={userLogged.name} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Editar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Item href="login">
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container id="homeBodyContainer">
      {activePage === 'productsManager' ? <ProductsManager/> : ''}
      {activePage === 'users' ? <Users/> : ''}
    </Container>
    <footer id="homeFooter" className="bg-light text-center text-lg-start mt-auto">
      <div className="container p-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default HomeTabs