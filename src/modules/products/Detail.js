import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Counter from '../../components/Counter/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { add, isInCart } from '../../states/products/cart'

const ProductDetail = ({ product }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.data);
    let cartProduct = isInCart(cart, product.id);
    const addTocart = (units) => {
        dispatch(add({ ...product, units }));
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
                        <Box sx={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            mt: 4, mr: 3, mb: 3,
                            textAlign: 'right',
                        }}>
                            <Paper elevation={0}>
                                {<Counter sx={{ align: 'right' }} stock={product.stock} initial={cartProduct && cartProduct.units ? cartProduct.units : 0} onAdd={addTocart}></Counter>
                                }
                                {
                                    !product.stock && <Alert severity="warning">Sin stock</Alert>
                                }
                            </Paper>
                            { cartProduct ? <Button variant="contained" href="/cart">
                                Finalizar Compra
                            </Button>: <p></p>}
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Grid>
}

export default ProductDetail;
