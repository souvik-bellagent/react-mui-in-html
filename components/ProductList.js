const ProductList = ({ onProductClick }) => {
    const {
        Container,
        Grid,
        Card,
        CardMedia,
        CardContent,
        Typography,
        CardActions,
        Button,
        Chip,
        Rating,
        Box
    } = MaterialUI;

    return (
        <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                Featured Products
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => onProductClick(product.id)}>
                            <CardMedia
                                component="img"
                                height="260"
                                image={product.image}
                                alt={product.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                                        ${product.price}
                                    </Typography>
                                </Box>
                                <Chip label={product.category} size="small" sx={{ mb: 2, bgcolor: '#e0f7fa', color: '#006064' }} />
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Rating value={product.rating} readOnly precision={0.1} size="small" />
                                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                        ({product.rating})
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0 }}>
                                <Button size="small" color="primary" fullWidth variant="outlined">
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
