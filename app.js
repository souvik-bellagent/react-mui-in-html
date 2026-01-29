const App = () => {
    const {
        ThemeProvider,
        CssBaseline,
        Box
    } = MaterialUI;

    const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM;

    // --- State Management ---

    // 1. Theme State (System Default + Manual Toggle)
    const [mode, setMode] = React.useState('light');

    React.useEffect(() => {
        // Detect System Preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        setMode(prefersDark.matches ? 'dark' : 'light');

        // Listen for changes
        const handler = (e) => setMode(e.matches ? 'dark' : 'light');
        prefersDark.addListener(handler);
        return () => prefersDark.removeListener(handler);
    }, []);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    // 2. Cart State (Resets on Refresh automatically by nature of React State)
    const [cartCount, setCartCount] = React.useState(0);

    const handleAddToCart = (product) => {
        setCartCount(prev => prev + 1);
        // Optional: Show a snackbar or alert here
        alert(`Added ${product.name} to cart!`);
    };

    // Memoize the theme creation so it doesn't run on every render unless mode changes
    const theme = React.useMemo(() => getTheme(mode), [mode]);

    // ScrollToTop Component
    const ScrollToTop = () => {
        const { pathname } = useLocation();
        React.useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <ScrollToTop />
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>

                    <Navbar
                        cartCount={cartCount}
                        mode={mode}
                        toggleTheme={toggleTheme}
                    />

                    <Box component="main" sx={{ flexGrow: 1 }}>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Hero />
                                    <ProductList onAddToCart={handleAddToCart} />
                                </>
                            } />
                            <Route
                                path="/product/:productId"
                                element={<ProductDetails onAddToCart={handleAddToCart} />}
                            />
                        </Routes>
                    </Box>

                    <Footer />
                </Box>
            </HashRouter>
        </ThemeProvider>
    );
};
