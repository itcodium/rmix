import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ProductItem from './Item';
import { useParams } from "react-router-dom";

const ProductList = ({ products }) => {
        let { id } = useParams();
        const list = products.filter(item => item.category === (parseInt(id)   || item.category));
        return <Grid container spacing={2}>
            {
                list.map((product, index) => (
                       <ProductItem
                                key={index}
                                product={product}
                            >
                       </ProductItem>
                ))
            }
        </Grid>
    
        }
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
