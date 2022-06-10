import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const CartWidget = () => {
    const cart = useSelector(state => state.cart.data);
    return (
        <Link component="button" to={"/cart"}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Link>
    )
}

export default CartWidget;