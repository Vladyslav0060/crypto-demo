import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    th: {
        padding: "0 !important",
    },
    header: {
        backgroundColor: "#fafafa00",
    },

    control: {
        width: "100%",
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[0],
        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
        },
    },

    icon: {
        width: 21,
        height: 21,
        borderRadius: 21,
    },
}));

export default useStyles;
