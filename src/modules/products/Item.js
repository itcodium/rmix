import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';

const ProductItem = ({ product }) => (
    <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card>
            <CardHeader
                title={product.title}
                subheader={product.subheader}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ flex: 1 }}>
                    <img width="100%" alt="" src={product.imageUrl} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1, pl: 1
                }}>
                    <Box elevation={0}>
                        <Typography variant="p" color="text.secondary">
                            {product.description}
                        </Typography>
                        {product.stock === 0 && <Alert sx={{ mt: 4 }} severity="warning">Sin stock</Alert>}
                    </Box>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', }} disableSpacing>
                        <Typography variant="h5" >$ {product.price} </Typography>
                        <Button variant="outlined" >
                            <Link className='link' to={"/productDetail/" + product.id} >Detail</Link>
                        </Button>
                    </CardActions>
                </Box>
            </CardContent>

        </Card>
    </Grid>
)

export default ProductItem;