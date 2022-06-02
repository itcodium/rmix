import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ProductList from '../../modules/products/List'
import Counter from '../../components/Counter/Counter'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import STATUS from '../../states/status'
// import { PRODUCTS } from '../../states/actionTypes'
import { fetch } from '../../states/products/products'

const ProductsListContainer = ({ greeting }) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.data);
    useEffect(() => {
        dispatch({ type: fetch.type });
    }, [])
    return (
        <div>
            <Box
                sx={{
                    p: 3,
                    textAlign: 'center',
                    backgroundColor: '#eee',
                }}
            >{greeting}</Box>
            <Counter stock={8} initial={3} onAdd={()=>{}}></Counter>
            {status === STATUS.SUCCESS ?
                <React.Fragment>
                    <Typography variant="h4" gutterBottom>Catalogo de productos</Typography>
                    <ProductList products={products} ></ProductList>
                </React.Fragment> : null}
            {status === STATUS.LOADING ? <Box sx={{  p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box> : null}
            {status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}

        </div>
    )
}

export default ProductsListContainer;