import React from 'react';
import Box from '@mui/material/Box';
import Counter from '../Counter/Counter'
const ListContainer = ({ greeting }) => {
    const add = (value)=>{
        console.log("Counter: ", value);
    }
    return (
        <div>
            <Box
                sx={{
                    p: 3,
                    textAlign: 'center',
                    backgroundColor: '#eee',
                }}
            >{greeting}</Box>
            <Counter stock = {8} initial= {3} onAdd={ add }></Counter>
        </div>
    )
}

export default ListContainer;