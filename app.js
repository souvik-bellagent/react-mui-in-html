const App = () => {
    const {
        ThemeProvider,
        CssBaseline,
        Box
    } = MaterialUI;

    // Destructure React Router DOM components
    const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM;

    // ScrollToTop component to handle scroll reset on route change
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
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
                    <Navbar />

                    {/* Router Outlet */}
                    <Box component="main" sx={{ flexGrow: 1 }}>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Hero />
                                    <ProductList />
                                </>
                            } />
                            <Route path="/product/:productId" element={<ProductDetails />} />
                        </Routes>
                    </Box>

                    <Footer />
                </Box>
            </HashRouter>
        </ThemeProvider>
    );
};


