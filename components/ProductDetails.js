const ProductDetails = ({ productId, onBack }) => {
    const {
        Container,
        Grid,
        Typography,
        Button,
        Rating,
        Box,
        Paper,
        Divider
    } = MaterialUI;

    // Find the product based on the ID passed
    const product = products.find(p => p.id === productId);

    if (!product) {
        return (
            <Container sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h5">Product not found</Typography>
                <Button onClick={onBack} sx={{ mt: 2 }}>Back to Shop</Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Button
                startIcon={<span className="material-icons">arrow_back</span>}
                onClick={onBack}
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
