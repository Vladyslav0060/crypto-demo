import { useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Divider,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconArticle,
  IconNews,
} from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import ThemeButton from "../Buttons/ThemeButton";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
          variant: "filled",
          color: theme.primaryColor,
        }).background,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
          variant: "filled",
          color: theme.primaryColor,
        }).background,
        0.15
      ),
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
  link?: string;
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  link,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      {link ? (
        <UnstyledButton
          component={Link}
          to={link ? link : ""}
          onClick={onClick}
          className={cx(classes.link, { [classes.active]: active })}
        >
          <Icon stroke={1.5} />
        </UnstyledButton>
      ) : (
        <UnstyledButton
          onClick={onClick}
          className={cx(classes.link, { [classes.active]: active })}
        >
          <Icon stroke={1.5} />
        </UnstyledButton>
      )}
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", link: "/" },
  { icon: IconGauge, label: "Dashboard", link: "/coin/:coinId" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", link: "/coin" },
  { icon: IconNews, label: "News", link: "/news" },
  { icon: IconUser, label: "Account", link: "/page5" },
  { icon: IconFingerprint, label: "Security", link: "/page6" },
  { icon: IconSettings, label: "Settings", link: "/page7" },
];

export function NavbarMinimalColored() {
  const [active, setActive] = useState<number>();
  const location = useLocation();
  useEffect(() => {
    const index = mockdata.findIndex((item) => item.link === location.pathname);
    setActive(index);
  }, [location.pathname]);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <div className="navbar-wrapper">
      <Navbar
        height={750}
        width={{ base: 80 }}
        p="md"
        sx={(theme) => ({
          borderRight: "none",
          alignSelf: "center",
          height: "100vh",
          backgroundColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
          }).background,
          position: "fixed",
        })}
      >
        <Center>
          <MantineLogo type="mark" inverted size={30} />
        </Center>
        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <Center>
              <ThemeButton />
            </Center>
            <Divider />
            <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
            <NavbarLink icon={IconLogout} label="Logout" />
          </Stack>
        </Navbar.Section>
      </Navbar>
    </div>
  );
}

export default React.memo(NavbarMinimalColored);
