import { CarouselProps } from "@mantine/carousel";
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
    PaperProps,
    MantineThemeOverride,
    MantineTheme,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useState } from "react";

const ThemeWrapper = ({ children }: any) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    useHotkeys([["mod+J", () => toggleColorScheme()]]);

    const theme: MantineThemeOverride = {
        colorScheme,
        primaryColor: "blue",
        primaryShade: 8,
        fontFamily: "Montserrat, sans-serif",
        colors: {
            dark: [
                "#C1C2C5",
                "#A6A7AB",
                "#909296",
                "#5C5F66",
                "#373A40",
                "#1b2a36", //
                "#25262B",
                "#08112a",
                "#141517",
                "#101113",
            ],
        },
        fontSizes: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 20,
        },
        components: {
            Carousel: {
                styles: (theme: MantineTheme, params: CarouselProps) => ({
                    indicator: {
                        backgroundColor:
                            theme.colorScheme === "dark" ? "#fff" : "#000",
                        width: 12,
                        height: 4,
                        transition: "width 250ms ease",

                        "&[data-active]": {
                            backgroundColor: theme.colors.blue[4],
                        },
                    },
                }),
            },
            Paper: {
                styles: (theme: MantineTheme, params: PaperProps) => ({
                    root: {
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[5]
                                : theme.colors.gray[0],
                    },
                }),
            },
        },
    };

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                withCSSVariables
                withGlobalStyles
                withNormalizeCSS
                theme={theme}
            >
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default ThemeWrapper;
