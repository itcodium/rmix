import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem } from '../../states/products/cart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    return <CardActionArea sx={{ pl: 0, pr: 1, pb: 1 }} component="a">
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 100, display: { sm: 'block' } }}
                image={product.imageUrl}
                alt={product.imageUrl}
            />
            <CardContent sx={{ flex: 1, pl: 1, pt: 0 }}>
                <Typography component="h3" variant="h5">
                    <Link to={"/productDetail/" + product.id}>
                        {product.title}
                    </Link>
                </Typography>
                {product.stock < product.units && <Chip color="error" size="small" label="Sin stock" variant="outlined" />}
            </CardContent>
            <Box
                sx={{
                    p: 1,
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <Typography>
                    ${product.price} x {product.units} - {product.stock}
                </Typography>
            </Box>
            <Box
                sx={{
                    p: 1,
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <IconButton aria-label="Delete"
                    onClick={() => dispatch(removeItem(product))} component="span">
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Card>
    </CardActionArea>
}
export default CartItem;

