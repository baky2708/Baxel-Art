/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  SideMenu,
  Avatar,
} from './styles';
import NavBarMenu from './NavBarMenu';
import iconMenu from '../../../assets/icons/icon-menu-black.svg';
import avatar from '../../../assets/avatar.svg';
import { useDraw } from '../../../context/Provider';

function Menu({ color }) {
  const { openMenu, setOpenMenu } = useDraw();
  // const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Container color={color} onClick={toggle}>
        <img src={iconMenu} alt="icon-menu" />
      </Container>
      <SideMenu isOpen={openMenu}>
        <Avatar to="/login">
          <img src={avatar} alt="avatar" />
          <p>Login</p>
        </Avatar>
        <NavBarMenu />
      </SideMenu>
    </>
  );
}

export default Menu;
