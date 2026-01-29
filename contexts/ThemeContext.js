// Create the Context for the Theme Mode
// Default value matches the shape of the data we'll provide
const ColorModeContext = React.createContext({
    mode: 'light',
    toggleColorMode: () => { }
});
