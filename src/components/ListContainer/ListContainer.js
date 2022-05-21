import React from 'react';
import Box from '@mui/material/Box';

const ListContainer = ({ greeting }) => {
    return (
        <Box
            sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#eee',
            }}
        >{greeting}</Box>
    )
}

export default ListContainer;