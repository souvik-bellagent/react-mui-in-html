const Navbar = ({ cartCount }) => {
    // Consume context for Theme
    const { mode, toggleColorMode } = React.useContext(ColorModeContext);

    const {
        AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton,
        Badge,
        Box,
        Container,
        Tooltip
    } = MaterialUI;

    const { useNavigate } = ReactRouterDOM;
    const navigate = useNavigate();

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Logo / Brand Name */}
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'primary.main',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        onClick={() => navigate('/')}
                    >
                        StoreFront
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                        <Button color="inherit">Shop</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Contact</Button>
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: 'flex', gap: 1, ml: 2, alignItems: 'center' }}>
                        {/* Theme Toggle */}
                        <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
                            <IconButton onClick={toggleColorMode} color="inherit">
                                <span className="material-icons">
                                    {mode === 'dark' ? 'light_mode' : 'dark_mode'}
                                </span>
                            </IconButton>
                        </Tooltip>

                        <IconButton color="inherit">
                            <span className="material-icons">search</span>
                        </IconButton>

                        <IconButton color="inherit">
                            <Badge badgeContent={cartCount} color="secondary">
                                <span className="material-icons">shopping_cart</span>
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
