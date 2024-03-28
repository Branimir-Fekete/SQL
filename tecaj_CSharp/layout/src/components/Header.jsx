import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.isOpen ? '250px' : '100px')};
  background-color: #00308f;
  color: white;
  transition: width 0.3s;
`;

const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 40px;
  border: 2px solid #00308f;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: #00308f;
    background-color: #fff;
  }
`;

const SidebarContent = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 1.25rem;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s;
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 20px;
  padding: 10px 0;

  a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px 10px;
    position: relative;
    transition: all 0.5s;
    text-align: center;

    &:hover {
      background-color: #fff;
      color: #00308f;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      opacity: 0;
      transition: all 0.3s;
    }

    &:before {
      bottom: 12px;
      left: 12px;
      width: 12px;
      height: 12px;
      border: 3px solid #fff;
      border-width: 0 0 3px 3px;
    }

    &:hover:before {
      opacity: 1;
      bottom: -8px;
      left: -8px;
    }

    &:after {
      top: 12px;
      right: 12px;
      width: 12px;
      height: 12px;
      border: 3px solid #fff;
      border-width: 3px 3px 0 0;
    }

    &:hover:after {
      opacity: 1;
      top: -8px;
      right: -8px;
    }
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer isOpen={isOpen}>
      <HamburgerIcon onClick={toggleSidebar}>
        {isOpen ? 'Studomat' : '☰'}
      </HamburgerIcon>
      <SidebarContent isOpen={isOpen}>
        <Menu>
          {menuItems.map((item) => (
            <MenuItem key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </MenuItem>
          ))}
        </Menu>
      </SidebarContent>
    </HeaderContainer>
  );
}

const menuItems = [
  { to: '/SveucilistaScreen', label: 'Sveučilišta' },
  { to: '/HomeScreen', label: 'Početna stranica' },
  { to: '/StudentScreen', label: 'Studenti' },
  { to: '/ProfesorScreen', label: 'Profesori' },
  { to: '/KolegijiScreen', label: 'Kolegiji' },
  { to: '/IspitiScreen', label: 'Ispiti' },
];

export default Header;
