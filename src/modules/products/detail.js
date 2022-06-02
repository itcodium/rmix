import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const ProductDetail = ({ product }) => (
    <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card sx={{ p: 2 }}>
        <CardHeader
                title={product.title}
                subheader="September 14, 2016"
            />
            <CardContent sx={{
                display: 'inline',
                alignItems: 'center',
                justifyContent: 'center',
                m: 2
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        marginLeft: 'auto',
                        justifyContent: 'center',
                        m: 0
                    }}
                >
                    <Paper sx={{width:'50%',  margin: '0 auto 0 auto'}}  elevation={0} >
                        <img alt="" src={product.imageUrl} />
                    </Paper>
                    <Paper elevation={0} sx={{pl:2, pr:0}}>
                        <Typography variant="p" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </Paper>

                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Typography variant="h5" component="a">
                    $ {product.price}
                </Typography>
               
            </CardActions>
        </Card>
    </Grid>
)
export default ProductDetail;


/*

*/