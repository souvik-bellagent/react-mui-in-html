const Footer = () => {
    const {
        Box,
        Typography,
        Container,
        Grid,
        Link,
        IconButton
    } = MaterialUI;

    return (
        <Box sx={{ bgcolor: '#f5f5f5', pt: 8, pb: 6, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 700 }}>
                            StoreFront
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Premium quality products for a modern lifestyle. We pride ourselves on design and durability.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" color="inherit" display="block" underline="hover">About Us</Link>
                        <Link href="#" color="inherit" display="block" underline="hover">Shop</Link>
                        <Link href="#" color="inherit" display="block" underline="hover">Contact</Link>
                        <Link href="#" color="inherit" display="block" underline="hover">Privacy Policy</Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Connect
                        </Typography>
                        <Box>
                            <IconButton color="inherit" href="#"><span className="material-icons">facebook</span></IconButton>
                            <IconButton color="inherit" href="#"><span className="material-icons">alternate_email</span></IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8 }}>
                    © {new Date().getFullYear()} StoreFront. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};
