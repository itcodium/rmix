import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Counter from '../../components/Counter/Counter'

import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../states/products/cart'

const ProductDetail = ({ product }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.data);
    const exist = cart.find(item => item.id === product.id)
    const addTocart = (units) => {
        dispatch(add({ id: product.id, units }));
    }
    return <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card sx={{ p: 2 }}>
            <CardHeader
                title={product.title}
                subheader="September 14, 2016"
                action={
                    <Typography variant="h3" component="p">
                        $ {product.price}
                    </Typography>
                }
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img width='100%' alt="" src={product.imageUrl} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="p" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                        <Paper elevation={0} sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                            {!exist ?
                                <Counter sx={{ align: 'right' }} stock={product.stock} initial={0} onAdd={addTocart}></Counter>
                                :
                                <Button variant="contained" href="/cart">
                                    Terminar la compra
                                </Button>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Grid>
}

export default ProductDetail;
