import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import {Link, NavLink } from 'react-router-dom';
import logo from "../shop.png"
import {useStoreContext} from "../context/StoreContext.tsx";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
    { title: 'reviews', path: '/reviews' },
    { title: 'arrivals', path: '/new-arrivals' }
];

const rightAuthLinks = [
    { title: 'logout', path: '/logout' },
];

const rightGuestLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
];

const navLinkStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
};

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
    isAuthenticated: boolean;
}

export default function Header({ handleThemeChange, darkMode, isAuthenticated }: Props) {
    const {basket} = useStoreContext();
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar position='static' sx={{
            mb: 4,
            backgroundColor: darkMode ? '#1976d2' : 'default', // Blue color for dark mode, default for light mode
        }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Link className="navbar-brand" to="/catalog">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: 40, height: 40, marginRight: 10 }}
                        />
                    </Link>
                    <Typography
                        variant='h6'
                        component={NavLink}
                        to='/'
                        sx={navLinkStyles}
                    >
                        Vogue Shop
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>

                {isAuthenticated && (
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navLinkStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                )}

                <Box display='flex' alignItems='center'>
                    {isAuthenticated && (
                        <IconButton
                            component={NavLink}
                            to="/basket"
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <Badge badgeContent={itemCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    )}
                    <List sx={{ display: 'flex' }}>
                        {(isAuthenticated ? rightAuthLinks : rightGuestLinks).map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navLinkStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    );
}
