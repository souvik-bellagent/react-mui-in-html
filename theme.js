const theme = MaterialUI.createTheme({
    palette: {
        primary: {
            main: '#2E3B55', // Deep Blue
        },
        secondary: {
            main: '#FF6B6B', // Vibrant Coral
        },
        background: {
            default: '#f8f9fa',
            paper: '#ffffff',
        },
        text: {
            primary: '#2d3436',
            secondary: '#636e72',
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h5: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none', // Remove uppercase default
            fontWeight: 600,
            borderRadius: '8px',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0px 8px 30px rgba(0,0,0,0.12)',
                    },
                },
            },
        },
    },
});
