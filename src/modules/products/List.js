import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ProductItem from './Item';

const ProductList = ({ products }) => (
    <div>
        <Grid container spacing={2}>
            {
                products.map((product, index) => (
                       <ProductItem
                                key={index}
                                product={product}
                            >
                       </ProductItem>
                ))
            }
        </Grid>
    </div>
)
ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
};
export default ProductList;
