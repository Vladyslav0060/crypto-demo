import { useMantineTheme, Text } from "@mantine/core";

const TextComponent = ({ children }: any) => {
    const theme = useMantineTheme();
    return (
        <Text
            color={
                theme.colorScheme === "dark"
                    ? theme.colors.gray[4]
                    : "#00142a99"
            }
        >
            {children}
        </Text>
    );
};

export default TextComponent;
