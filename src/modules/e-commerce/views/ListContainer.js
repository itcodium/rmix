import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux'
import STATUS from '../../../store/status';
import ProductList from '../components/List'
import { fetch } from '../reducers/products'

const ProductsListContainer = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.data);
    useEffect(() => {
        dispatch({ type: fetch.type });
    }, [])
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