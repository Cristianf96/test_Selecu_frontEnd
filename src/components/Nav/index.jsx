import { Box, Toolbar, Typography, IconButton, AppBar, Button, Divider, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useId, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../../Contexts/AuthContext';

const NavComponent = (props) => {

    const { logout } = useContext(AuthContext)

    const navigate = useNavigate();
    const drawerWidth = 240;
    const navItems = [
        {
            id: useId(),
            title: 'Inicio',
            navigate: '/test_Selecu_frontEnd/Home'
        },
        {
            id: useId(),
            title: 'Ver Libros',
            navigate: '/test_Selecu_frontEnd/Books'
        }
    ];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavigate = (path) => {
        navigate(path)
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="h6"
                sx={{ my: 2 }}
            >
                Selecu
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={() => handleNavigate(item.navigate)} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton onClick={logout} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'Salir'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex',  }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button onClick={() => handleNavigate(item.navigate)} variant='outlined' key={item.id} sx={{ color: '#fff', marginRight: 1 }}>
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button onClick={logout} variant='outlined' sx={{ color: '#fff', marginRight: 1 }}>
                            Salir
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

NavComponent.propTypes = {
    window: PropTypes.func,
};

export default NavComponent