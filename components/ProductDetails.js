const ProductDetails = ({ onAddToCart }) => {
    const {
        Container,
        Grid,
        Typography,
        Button,
        Rating,
        Box,
        Paper,
        Divider,
        Alert,
        Chip
    } = MaterialUI;

    const { useParams, useNavigate } = ReactRouterDOM;
    const { productId } = useParams();
    const navigate = useNavigate();

    // Timer Logic: 8 min 45 sec = 525 seconds
    const [timeLeft, setTimeLeft] = React.useState(525);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Find the product
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return (
            <Container sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h5">Product not found</Typography>
                <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>Back to Shop</Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Button
                startIcon={<span className="material-icons">arrow_back</span>}
                onClick={() => navigate('/')}
                sx={{ mb: 4 }}
            >
                Back to Shop
            </Button>

            <Paper elevation={0} sx={{ p: { xs: 2, md: 0 }, bgcolor: 'transparent' }}>
                <Grid container spacing={6}>
                    {/* Image Section */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.name}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 4,
                                boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                            }}
                        />
                    </Grid>

                    {/* Details Section */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        {/* Flash Offer Timer */}
                        <Alert
                            severity="warning"
                            icon={<span className="material-icons">timer</span>}
                            sx={{ mb: 3, alignItems: 'center', '& .MuiAlert-message': { width: '100%' } }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    Limited Time Offer ends in:
                                </Typography>
                                <Chip
                                    label={formatTime(timeLeft)}
                                    color="error"
                                    size="small"
                                    sx={{ fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1rem' }}
                                />
                            </Box>
                        </Alert>

                        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}>
                            {product.category}
                        </Typography>
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                            {product.name}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Rating value={product.rating} readOnly precision={0.5} />
                            <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                                (124 reviews)
                            </Typography>
                        </Box>

                        <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 700, mb: 4 }}>
                            ${product.price}
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                            {product.description}
                        </Typography>

                        <Divider sx={{ mb: 4 }} />

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => onAddToCart(product)}
                                sx={{
                                    flexGrow: 1,
                                    py: 1.5,
                                    fontSize: '1rem'
                                }}
                                startIcon={<span className="material-icons">shopping_cart_checkout</span>}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{ py: 1.5 }}
                            >
                                <span className="material-icons">favorite_border</span>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};
