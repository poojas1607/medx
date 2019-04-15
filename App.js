import React from "react";
import Main from './components/Main';
import './App.css';

import {Layout,Content} from "react-mdl";
//import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';



class App extends React.Component{
    render(){
        return(
            <div className="demo-big-content">
            <Layout>
            <Navbar className="header-color" bg="light" expand="lg">
            <Navbar.Brand href="#home">MEDX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#">Find a Doctor</Nav.Link>
      
            <NavDropdown title="Book an Appointment" id="basic-nav-dropdown">
                <NavDropdown.Item href="./Appointment">Dispensary</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Outside MNNIT</NavDropdown.Item>
            
                <NavDropdown.Divider />
                
            </NavDropdown>
            <Nav.Link href="./ContactUS">ContactUS</Nav.Link>
            </Nav>
        
            </Navbar.Collapse>
            </Navbar>
                {/*<Header className="header-color" title="MEDX" scroll>
                    <Navigation>
                        <Link to="/">Find a Doctor</Link>
                        <Link to="/Appointment">Book an Appointment</Link>
                        <Link to="/">Contact US</Link>
                        
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/">Link</Link>
                        <Link to="/">Link</Link>
                        <Link to="/">Link</Link>
                        <Link to="/">Link</Link>
                    </Navigation>
        </Drawer>*/}


                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
            <footer class="page-footer font-small blue">
                        <div class="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                        </div>
                        </footer>
            
        </div>
        );
    }
        

       
    
};

export default App;