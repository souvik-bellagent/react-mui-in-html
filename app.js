// Extract MUI components from global MaterialUI object
const {
    Button,
    Typography,
    Container,
    Stack
} = MaterialUI;

const App = ({ title }) => {
    const handleClick = () => {
        alert("MUI Button Clicked!");
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "40px" }}>
            <Stack spacing={2}>
                <Typography variant="h4" component="h1">
                    {title}
                </Typography>

                <Typography variant="body1">
                    React + JavaScript + MUI using CDN 🚀
                </Typography>

                <Button variant="contained" onClick={handleClick}>
                    Click Me
                </Button>
            </Stack>
        </Container>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App title="Hello Souvik" />);
