import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cart from '../../modules/products/Cart';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { init } from '../../states/products/orders'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
const CartList = () => {
    const cart = useSelector(state => state.cart.data);
    const order = useSelector(state => state.orders.data.order) || {};
    const user = useSelector(state => state.user.data);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            if (order && order.id) {
                dispatch(init());
            }
        }
    }, [])
    return (<>
        {!order.id && cart.length > 0 && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ p: 2, }} variant="h4" gutterBottom>Cart List</Typography>
        </Box>}

        <Box>
            {!order.id && <Cart user={user} items={cart}></Cart>}
            {order.id && <Alert sx={{ mt: 2, textAlign: "center" }} severity="success">Your order number is: <strong>{order.id}</strong>
            </Alert>}
        </Box>
        {order.id && <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button sx={{ ml: 2 }} size="small" variant="outlined" href="/">Ver otros productos</Button>
            </Box>
        }

    </>)
}

export default CartList;
