import { ActionIcon, createStyles, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const ThemeButton = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const useStyles = createStyles((theme) => ({
        ActionIcon: {
            borderRadius: 8,
            '&:hover': {
                backgroundColor: theme.colors.blue[6],
                opacity: 1
            },
        },
    }));
    const { classes, cx } = useStyles();
    return (
        <ActionIcon
            variant="subtle"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            size={50}
            className={cx(classes.ActionIcon)}
        >
            {dark ? <IconSun size={24} /> : <IconMoonStars color='#e8e8e8' size={24} />}
        </ActionIcon>
    );
};

export default ThemeButton;