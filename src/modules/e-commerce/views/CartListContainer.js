import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cart from '../components/Cart'
import { useSelector } from 'react-redux'

const CartListContainer = () => {
    const cart = useSelector(state => state.cart.data);
    return (<>
     {cart.length &&  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ p: 2, }} variant="h4" gutterBottom>Cart List</Typography>
        </Box> || <></>}
        <Cart items={cart}></Cart>
    
    </>)
}

export default CartListContainer;
