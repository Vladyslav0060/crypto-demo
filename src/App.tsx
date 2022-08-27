import { MantineProvider, ColorSchemeProvider, ColorScheme, Text } from "@mantine/core";
import { useHotkeys } from '@mantine/hooks';
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{
          colorScheme,
          primaryColor: 'green',
          primaryShade: 7
        }}>
          <div className="navbar-wrapper">
            <Navbar />
          </div>
          <div className="wrapper">
            <div style={{ display: 'flex', width: '100%', flexDirection: "column", maxWidth: '1400px', paddingTop: '2.5vh' }}>
              <Text size="xl" >gasgas</Text>
            </div>
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
