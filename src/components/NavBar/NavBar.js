import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import AppBar from '@mui/material/AppBar';
import mainLogo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {

    const categories = [{ id: 1, name: 'Bakery' }, { id: 2, name: 'cakes' }, { id: 3, name: ' Desayunos' }];

    const getLogo = () => {
        return <Typography component="h2"
            variant="h5"
            color="inherit"
            align={'left'}
            noWrap
        >
            <Link to={"/"}>
            <img width='140' alt="" flex='1' align="center" src={mainLogo}></img>
            </Link>

        </Typography>
    }

    return <AppBar position="static" color="transparent" className='container' >
        <Toolbar>
            <Hidden mdUp>
                <Grid container>
                    <Grid item xs={6}>
                        {getLogo()}
                    </Grid>
                    <Grid item xs={6} className="right">
                        <IconButton color="inherit" aria-label="SideBarMenu">
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdDown>
                <Grid container>
                    <Grid item md={2} className="left">
                        {getLogo()}
                    </Grid>
                    <Grid item md={8} className="list">
                        {
                            categories.map((item, i) => (
                                <Button variant="default">
                                    <Link component="button" key={i} to={"/" + item.id}>     {item.name} </Link>
                                </Button>
                            ))
                        }
                    </Grid>
                    <Grid item md={2} className="right">
                        <CartWidget />
                        <IconButton color="inherit" aria-label="SideBarMenu">
                            <AccountCircleIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Hidden>
        </Toolbar>
    </AppBar>
}
export default NavBar;