import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  initCounter,
  selectCount
} from '../../features/counter/counter'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';

const Counter = ({stock, initial, onAdd}) => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initCounter(initial || 0))
      },[]);

    return (
        <Stack spacing={5} direction="flex" sx={{
            p: 2, mt: 2,
            textAlign: 'right',
            justifyContent: 'center',
            backgroundColor: '#fafafa',

        }}> 
            <Button variant="outlined" size="small" disabled={ !count}
                onClick={() => dispatch(decrement())}> 
                <Remove/>
            </Button>
            <Typography variant="h4" sx={{pl: 3,pr: 3}}>{count}</Typography>
            <Button variant="outlined" size="small" disabled={ stock === count}
                onClick={() => dispatch(increment())} >
                <Add/>
            </Button>
            <div>
           
                <Button variant="contained" onClick={()=>{ onAdd(count)}}  sx={{ ml: 5, mt:0 }}>Add to cart</Button>
            </div>
        </Stack>

    )
}

export default Counter;