import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CartIcon from '../img/cart.png'
import MainProvider from '../context/MainProvider'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Cart({productsCount}) {
  
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={productsCount} color="secondary">
         <img src={CartIcon} alt="cart" />
      </StyledBadge>
    </IconButton>
  );
}
