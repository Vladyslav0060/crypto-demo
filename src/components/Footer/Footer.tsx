import {
    createStyles,
    Container,
    Group,
    ActionIcon,
    Text,
    Avatar,
} from "@mantine/core";
import {
    IconBrandTelegram,
    IconBrandInstagram,
    IconBrandGithub,
} from "@tabler/icons";
import image from "../../assets/Vladyslav0060.jpeg";

const useStyles = createStyles((theme) => ({
    footer: {
        width: "100%",
        position: "absolute",
        bottom: "0px",
        left: 0,
        marginTop: 120,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
        padding: "5px 0 5px 0",
    },

    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export function FooterComponent() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <Avatar
                        src={image}
                        size={30}
                        radius={30}
                        component="a"
                        href="https://github.com/Vladyslav0060"
                        target="_blank"
                        style={{ marginLeft: "5px" }}
                    />
                    <Text>Vladyslav Bortnik, Full-stack developer</Text>
                </div>
                {/* <MantineLogo size={28} /> */}
                <Group
                    spacing={0}
                    className={classes.links}
                    position="right"
                    noWrap
                >
                    <ActionIcon
                        size="lg"
                        component="a"
                        href="https://t.me/whatislov6"
                        target="_blank"
                    >
                        <IconBrandTelegram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        component="a"
                        href="https://github.com/Vladyslav0060"
                        target="_blank"
                    >
                        <IconBrandGithub size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        component="a"
                        href="https://www.instagram.com/whatislov66/"
                        target="_blank"
                    >
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}

export default FooterComponent;
