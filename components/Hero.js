const Hero = () => {
    const {
        Box,
        Typography,
        Button,
        Container
    } = MaterialUI;

    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: { xs: 8, md: 12 },
                borderRadius: { xs: 0, md: '0 0 24px 24px' },
                mb: 6,
                background: 'linear-gradient(135deg, #2E3B55 0%, #1a253a 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 800, mb: 3 }}
                >
                    Elevate Your Lifestyle
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
                >
                    Discover a curated collection of premium products designed to enhance your daily living. Quality, style, and innovation in every item.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: '50px'
                    }}
                >
                    Shop Collection
                </Button>
            </Container>

            {/* Decorative Circle */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    zIndex: 1
                }}
            />
        </Box>
    );
};
