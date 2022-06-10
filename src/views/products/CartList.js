import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const CartList = ({ product }) => (
    <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box
            sx={{
                display: 'flex',
                marginLeft: 'auto',
                justifyContent: 'center',
                m: 0
            }}
        >
            <Typography sx={{ p: 2 }} variant="h4" gutterBottom>Cart List</Typography>
        </Box>
    </Grid>
)

export default CartList;
