import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useSelector, useDispatch } from 'react-redux';
import categories from "../../data/categories.json";
import { getTotal } from '../../states/products/cart';
import { fetch, post } from '../../states/products/orders'
import CartItem from './CartItem';
import STATUS from '../../states/status'

const Cart = ({ items, user }) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.orders.status);
    const error = useSelector(state => state.orders.error);
    useEffect(() => {
        dispatch(fetch(items));
    }, [])

    const list = [];
    categories.forEach((category) => {
        const byCategory = items.filter(item => item.category === category.id);
        list.push({
            ...category,
            subTotal: getTotal(byCategory),
            products: byCategory
        });
    })
    const total = getTotal(items);
    const sendOrder = () => {
        dispatch(post({ customer: user, total, items }));
    }
    
    return <>
        {
            list.map((category, index) => (
                category.products.length > 0 && (
                    <Grid key={index} item>
                        {
                            category.products.map((product, ixp) => (
                                <CartItem key={ixp} product={product}></CartItem>
                            ))
                        }
                        <Box key={index} sx={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            mt: 0, mr: 3, mb: 3,
                            textAlign: 'right',
                        }}>
                            <Chip label={category.name} size="medium" />
                            <Typography component="h3" variant="h6">${category.subTotal} </Typography>
                        </Box>
                    </Grid>)
            ))
        }
        {
          items.length > 0 && <><Typography sx={{ p: 1, mr: 1, mb: 1, pr: 2, textAlign: 'right', backgroundColor: '#eee', }} component="h2" variant="h5"> Total: $ {total}
            </Typography>
                <Box sx={{ mr: 2, textAlign: 'right' }} >
                    <Button disabled={status === STATUS.LOADING} variant="contained" onClick={() => { sendOrder() }} >
                        Enviar Orden
                    </Button>
                </Box></>
        }

        { items.length === 0 && <Box
            sx={{
                p: 3,
                mt: 2,
                textAlign: 'center',
                backgroundColor: '#eee',
            }}
        >
            <Typography sx={{ mb: 3 }} component="h2" variant="h5"> Cart is empty </Typography>
            <Button variant="outlined" href="/">Buscar</Button>
        </Box>}

        {status === STATUS.SUCCESS && null}
        {status === STATUS.LOADING && <Box sx={{ p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box> }
        {status === STATUS.ERROR && <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography>}
    </>
}
export default Cart;

