import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Cart from '../../modules/products/Cart'
import { useSelector } from 'react-redux'


const CartList = () => {
    const cart = useSelector(state => state.cart.data);
    return (<>
     {cart.length &&  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ p: 2, }} variant="h4" gutterBottom>Cart List</Typography>
        </Box> || <></>}
        <Cart items={cart}></Cart>
    
    </>)
}

export default CartList;
