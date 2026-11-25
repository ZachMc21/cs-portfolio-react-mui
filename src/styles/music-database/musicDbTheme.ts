
import { createTheme } from "@mui/material/styles";

const musicDbTheme = createTheme({
    cssVariables: true,
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: '#E5E5E5',
                },
                primary: {
                    main: '#FFFFFF',
                    contrastText: '#14213D',
                },
                secondary: {
                    main: '#FCA311',
                    contrastText: '#000000',
                },
            }
        },
        dark: {
            palette: {
                background: {
                    default: '#14213D',
                },
                primary: {
                    main: '#000000',
                    contrastText: '#E5E5E5',
                },
                secondary: {
                    main: '#FCA311',
                    contrastText: '#000000', 
                }
            }
        }
    },
    /* TODO move this into its own file? */
    typography: {
        fontFamily: ['creteround', 'serif'].join(','),
        allVariants: {
            fontWeight: "bold",
        },
    },
    spacing: 8,
});

export default musicDbTheme;