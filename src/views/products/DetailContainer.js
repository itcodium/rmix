import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import ProductDetail from '../../modules/products/Detail'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import STATUS from '../../states/status'
import { fetch } from '../../states/products/detail'
import { useParams } from "react-router-dom";
const ProductsDetailContainer = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.productsDetail.status);
    const error = useSelector(state => state.productsDetail.error);
    const product = useSelector(state => state.productsDetail.data);
    let { id } = useParams();
    useEffect(() => {
        dispatch(fetch({ id: id }));
    }, [])
    return (
        <>
          {status === STATUS.SUCCESS && <ProductDetail product={product} ></ProductDetail>}
          {status === STATUS.LOADING && <Box sx={{ p: 3, display: 'block', textAlign: 'center' }}><CircularProgress /> </Box>}
          {status === STATUS.ERROR && <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography>}
        </>
    )
}
export default ProductsDetailContainer;