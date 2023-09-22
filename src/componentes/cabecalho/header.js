import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-scroll'
import '../../App.css'
import './Cabecalho.css';

function Header(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const [navbar, setNavbar] = useState(true);

    const mudancaFundo = () => {
        if (window.scrollY >= 50) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }

    window.addEventListener('scroll', mudancaFundo)

    return (
        <>
            <header id="meu__cabecalho" className={navbar ? 'cabecalho' : 'cabecalho scroll'} >
                <nav className="nav__bar">
                    <div className="container">
                        <Link className="nav__bar__home" to="sessao__principal" spy={true} smooth={true} offset={50} duration={500}>
                            Agenda para Manicure Grátis
                        </Link>
                    </div>

                    <div id="menu__bar">
                        <Link className="nav__bar__menus" to="sessao__download" spy={true} smooth={true} offset={50} duration={500}>
                            Download
                        </Link>
                        <Link className="nav__bar__menus" to="sessao__recursos" spy={true} smooth={true} offset={50} duration={500}>
                            Recursos
                        </Link>
                        <Link className="nav__bar__menus" to="sessao__contato" spy={true} smooth={true} offset={50} duration={500}>
                            Contato
                        </Link>
                    </div>
                </nav>

            <div className='cabecalho__responsivo'>
                <Navbar color="faded" light>

                    <NavbarToggler onClick={toggleNavbar} className="me-2 button__responsivo" />
                    <Link className="nav__bar__home" to="sessao__principal" spy={true} smooth={true} offset={50} duration={500}>
                        Agenda para Manicure Grátis
                    </Link>
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar className='navegacao__responsivo'>
                            <NavItem>
                                <Link to="sessao__download" spy={true} smooth={true} offset={50} duration={500}>Download</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="sessao__recursos" spy={true} smooth={true} offset={50} duration={500}>Recursos</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="sessao__contato" spy={true} smooth={true} offset={50} duration={500}>Contato</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            </header >
        </>
    );
}

export default Header;