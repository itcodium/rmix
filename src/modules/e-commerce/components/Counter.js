import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    initCounter,
    selectCount
} from '../reducers/counter'

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Counter = ({ stock, initial, onAdd }) => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initCounter(initial || 0))
    }, []);

    return (
        <Stack spacing={5}>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Paper elevation={0}>
                    <IconButton onClick={() => dispatch(decrement())} component="span" disabled={!count}>
                        <Remove />
                    </IconButton>
                    <Typography variant="span" sx={{ p: 0, pl: 3, pr: 3 }} >{count}</Typography>
                    <IconButton onClick={() => dispatch(increment())} component="span" disabled={stock === count} >
                        <Add />
                    </IconButton>
                </Paper>
                <Paper elevation={0} sx={{ textAlign: 'center', }} >
                    <Button variant="contained" disabled={!count} onClick={() => { onAdd(count) }}>Add to cart</Button>
                </Paper>
            </Box>
        </Stack>
    )
}

export default Counter;