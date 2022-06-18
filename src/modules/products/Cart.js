import React from 'react';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import categories from "../../data/categories.json";
import { removeItem, getTotal } from '../../states/products/cart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Cart = ({ items }) => {
    const dispatch = useDispatch();
    const list = [];
    categories.forEach((category) => {
        const byCategory = items.filter(item => item.category === category.id);
        list.push({
            ...category,
            subTotal: getTotal(byCategory),
            products: byCategory
        });
    })

    return <>
        {
            list.map((category, index) => (
                category.products.length > 0 && <>
                    {
                        category.products.map((product, ixp) => (
                            <Grid item sx={{ pl: 0, pr: 1, pb: 1 }}>
                                <CardActionArea component="a" href="#">
                                    <Card sx={{ display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 100, display: { sm: 'block' } }}
                                            image={product.imageUrl}
                                            alt={product.imageUrl}
                                        />
                                        <CardContent sx={{ flex: 1, pl: 1, pt: 0 }}>
                                            <Typography component="h3" variant="h5">
                                                {product.title}
                                            </Typography>

                                        </CardContent>
                                        <Box
                                            sx={{
                                                p: 1,
                                                alignItems: 'center',
                                                display: 'flex',
                                            }}
                                        >
                                            <Typography>
                                                ${product.price} x {product.units}
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
                            </Grid>
                        ))
                    }
                    <Box sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        mt: 0, mr: 3, mt: 0, mb: 3,
                        textAlign: 'right',
                    }}>
                        <Chip label={category.name} size="medium" variant="outlined" />
                        <Typography component="h3" variant="h6">${category.subTotal} </Typography>
                    </Box>
                </>
            ))

        }
        <Box
            sx={{
                p: 3,
                mt: 2,
                textAlign: 'right',
                backgroundColor: '#eee',
            }}
        >
            {items.length > 0 ?
                <Typography component="h2" variant="h5"> Total: $ {getTotal(items)}</Typography>
                : <> <Typography sx={{ mb: 3 }} component="h2" variant="h5"> Cart is empty </Typography>
                    <Button variant="outlined" href="/">Buscar</Button> </>
            }
        </Box>
    </>
}
export default Cart;