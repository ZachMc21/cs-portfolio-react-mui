import { Box, createTheme, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, useColorScheme } from "@mui/material"

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  
  return (
    <Box>
      <FormControl>
        <FormLabel id="theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

// export default function ToggleColorMode() {
//   return (
//     <ThemeProvider theme={theme}>
//       <MyApp />
//     </ThemeProvider>
//   );
// }