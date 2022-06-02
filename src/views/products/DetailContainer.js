import React  from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import ProductDetail from '../../modules/products/detail'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import STATUS from '../../states/status'
import { fetch } from '../../states/products/detail'

const ProductsDetailContainer = ({ greeting }) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);
    const product = useSelector(state => state.productsDetail.data);
    
    useEffect(() => {
       dispatch(fetch({id: 4}));
    }, [])
    return (
        <div>
            <Box
                sx={{
                    p: 3,
                    textAlign: 'center',
                    backgroundColor: '#eee',
                }}
            >test</Box>
            {status === STATUS.SUCCESS ?
                    <ProductDetail product={product} ></ProductDetail>
              : null}
            {status === STATUS.LOADING ? <Box sx={{  p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box> : null}
            {status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}

        </div>
    )
}
export default ProductsDetailContainer;