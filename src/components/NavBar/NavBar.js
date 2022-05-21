import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import AppBar from '@mui/material/AppBar';
import mainLogo from '../../assets/logo.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const menu = ['Bakery', 'Tortas', 'Desayunos'];

    const getLogo = () => {
        return <Typography component="h2"
            variant="h5"
            color="inherit"
            align={'left'}
            noWrap
        >
            <img width='140' alt="" flex='1' align="center" src={mainLogo}></img>
        </Typography>
    }

    return  <AppBar position="static" color="transparent" className='container' >
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
                                menu.map((item, i) => (
                                    <Button aria-haspopup="true" >
                                        {item}
                                    </Button>
                                ))
                            }
                        </Grid>
                        <Grid item md={2} className="right">
                            <CartWidget/>
                            <IconButton color="inherit" aria-label="SideBarMenu">
                                <AccountCircleIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Hidden>
            </Toolbar>
        </AppBar>
}
NavBar.propTypes = {
    styles: PropTypes.object.isRequired,
};
export default NavBar;