import { ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import React, { useState } from "react";

const ThemeProvider = ({ children }: any) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    useHotkeys([["mod+J", () => toggleColorScheme()]]);
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            {children}
        </ColorSchemeProvider>
    );
};

export default ThemeProvider;
