const getTheme = (mode) => {
    return MaterialUI.createTheme({
        palette: {
            mode,
            primary: {
                main: mode === 'dark' ? '#90caf9' : '#2E3B55', // Light Blue in Dark, Deep Blue in Light
            },
            secondary: {
                main: '#FF6B6B',
            },
            background: {
                default: mode === 'dark' ? '#121212' : '#f8f9fa',
                paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
            },
            text: {
                primary: mode === 'dark' ? '#ffffff' : '#2d3436',
                secondary: mode === 'dark' ? '#b0bec5' : '#636e72',
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
                textTransform: 'none',
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
                            boxShadow: mode === 'dark' ? '0px 4px 12px rgba(255,255,255,0.1)' : '0px 4px 12px rgba(0,0,0,0.1)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        boxShadow: mode === 'dark' ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: mode === 'dark' ? '0px 8px 30px rgba(0,0,0,0.7)' : '0px 8px 30px rgba(0,0,0,0.12)',
                        },
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'dark' ? '#1e1e1e' : '#ffffff',
                        color: mode === 'dark' ? '#ffffff' : 'inherit',
                    }
                }
            }
        },
    });
};
