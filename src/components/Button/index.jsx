/* eslint-disable react/prop-types */
import React from 'react';
import Container from './styles';
import iconPencil from '../../assets/icons/icon-pencil.svg';
import iconPerson from '../../assets/icons/icon-person.svg';

function Button({
  children,
  icon,
  type,
  onClick,
}) {
  const getIcon = () => {
    switch (icon) {
      case 'pencil': return <img src={iconPencil} alt="icon-pencil" />;
      case 'person': return <img src={iconPerson} alt="icon-person" />;
      default: return '';
    }
  };

  return (
    <Container icon={icon} type={type} onClick={onClick}>
      {getIcon()}
      {children}
    </Container>
  );
}

export default Button;
