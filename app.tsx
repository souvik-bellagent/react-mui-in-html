// Extract MUI components from global MaterialUI object
const {
    Button,
    Typography,
    Container,
    Stack
} = MaterialUI;

type AppProps = {
    title: string;
};

const App: React.FC<AppProps> = ({ title }) => {
    const handleClick = (): void => {
        alert("MUI Button Clicked!");
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "40px" }}>
            <Stack spacing={2}>
                <Typography variant="h4" component="h1">
                    {title}
                </Typography>

                <Typography variant="body1">
                    React + TypeScript + MUI using CDN 🚀
                </Typography>

                <Button variant="contained" onClick={handleClick}>
                    Click Me
                </Button>
            </Stack>
        </Container>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<App title="Hello Souvik" />);
