import { ActionIcon, createStyles, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const ThemeButton = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const useStyles = createStyles((theme) => ({
        ActionIcon: {
            borderRadius: 8,
            '&:hover': {
                backgroundColor: '#338bda',
                opacity: 1
            },
            '&:active': {
                transform: 'scale(0.9)',
                backgroundColor: 'darken($button-bg, 5%)',
                boxShadow: '0 2px 25px rgba(255, 0, 130, 0.2)',
            }
        },
    }));
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={`Toggle color scheme`} position="right" transitionDuration={0}>
            <ActionIcon
                variant="subtle"
                onClick={() => toggleColorScheme()}
                size={50}
                className={cx(classes.ActionIcon)}
            >
                {dark ? <IconSun size={24} /> : <IconMoonStars color='#e8e8e8' size={24} />}
            </ActionIcon>
        </Tooltip>
    );
};

export default ThemeButton;