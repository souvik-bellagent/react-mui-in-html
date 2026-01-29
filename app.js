const App = () => {
    const {
        ThemeProvider,
        CssBaseline,
        Box
    } = MaterialUI;

    // Simple State-based Router
    const [view, setView] = React.useState('home'); // 'home' | 'product'
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    // Initial Scroll on view change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    // Navigation Handlers
    const handleProductClick = (productId) => {
        setSelectedProduct(productId);
        setView('product');
    };

    const handleBackClick = () => {
        setView('home');
        setSelectedProduct(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
                <Navbar onHomeClick={handleBackClick} />

                {/* Router Outlet */}
                <Box component="main" sx={{ flexGrow: 1 }}>
                    {view === 'home' ? (
                        <>
                            <Hero />
                            <ProductList onProductClick={handleProductClick} />
                        </>
                    ) : (
                        <ProductDetails productId={selectedProduct} onBack={handleBackClick} />
                    )}
                </Box>

                <Footer />
            </Box>
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
