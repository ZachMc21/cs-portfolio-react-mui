
import { createTheme } from "@mui/material/styles";

const homeThemeLight = createTheme({
    cssVariables: true,
    palette: {
        mode: 'light',
        background: {
            default: "#dff6f7",
        },
        primary: {
            main: "#7DC6C3",
            contrastText: "#0e4975",
        },
        secondary: {
            main: "#4d1aab",
            dark: "#582a84",
            contrastText: "#0B1D23", 
        }
    },
});

export default homeThemeLight;