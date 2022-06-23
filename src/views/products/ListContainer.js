import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ProductList from '../../modules/products/List'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import STATUS from '../../states/status'
import { fetch } from '../../states/products/products'
import { useParams } from "react-router-dom";

const ProductsListContainer = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.data);
    const user = useSelector(state => state.user.data);
    let { id } = useParams();
    useEffect(() => {
        dispatch(fetch({ categoryId: id }));
    }, [id])
    return (
        <>
            {status === STATUS.SUCCESS ?
                <>
                    <Typography sx={{p: 2}} variant="h4" gutterBottom>Catalogo de productos</Typography>
                    <ProductList products={products} ></ProductList>
                </> : null}
            {status === STATUS.LOADING ? <Box sx={{ p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box> : null}
            {status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}

        </>
    )
}

export default ProductsListContainer;