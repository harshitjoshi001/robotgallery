import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {searchByName,loadItems} from './Redux/action';
import data from './data.json'
import Badge from '@mui/material/Badge';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navbar = () => {

    const Robots = useSelector(state=>state.robots)
    const dispatch = useDispatch()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const cartCount = useSelector(state=>state.totalQuantity)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const search = (e)=>{
        if(e.target.value === ""){
            dispatch(loadItems(data.data))
            // alert('')
        }else{
            const filtered = Robots.filter(data=>data.material.includes(e.target.value)&&data)
            console.log(filtered);
            dispatch(searchByName(filtered))
        }
    }


    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            
                            <Link to='/'style={{color:"white", textDecoration :'none' }} >  Robo Gallery </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Link to='/cart'>
                        <Badge badgeContent={cartCount} color="primary">
                            <Stack direction="row" spacing={1}>
                                <IconButton color="secondary" aria-label="add to shopping cart" >
                                   <Link to='/cart'> <AddShoppingCartIcon style={{color:"white"}}  /></Link>
                                </IconButton>
                            </Stack>
                        </Badge>
                        </Link>

                        <Box sx={{ flexGrow: 0 }}>
                            <input type='text' placeholder="search by material"  onChange={search}/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )
}

export default Navbar