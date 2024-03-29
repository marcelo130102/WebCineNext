import React from 'react'
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';
const Menu = ()=>{
  const tab = '\u00A0';
  const router = useRouter();
  function returnHome(){
    router.replace('/');
  }
    return(
        <div>
        <Navbar bg="dark" variant="dark" className ={styles.nav}>
          <Container>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-right user">
              <>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button" variant="secondary" className={`${styles.Usermenu} + " "+ ${styles.GeneralMenu}`} >
                  <FontAwesomeIcon icon={faUser}/>
                  {tab}
                  Usuario
                </Dropdown.Toggle>
                <Dropdown.Menu className="Dropmenu">
                  <Dropdown.Item href="#/action-1" className="Menuitem">    
                    Iniciar sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          </Nav>
          </Container>
        </Navbar>
    
      </div>
    );
}

export default Menu;