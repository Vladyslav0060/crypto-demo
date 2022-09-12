import { useState } from "react";
import {
    createStyles,
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
    IconSelector,
    IconChevronDown,
    IconChevronUp,
    IconSearch,
} from "@tabler/icons";
import "./CoinList.scss";
import TextComponent from "../components/TextComponent";

const useStyles = createStyles((theme) => ({
    th: {
        padding: "0 !important",
    },
    header: {
        backgroundColor: theme.colors.gray[4],
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

interface RowData {
    name: string;
    price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
}

interface TableSortProps {
    data: RowData[];
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const { classes } = useStyles();
    const Icon = sorted
        ? reversed
            ? IconChevronUp
            : IconChevronDown
        : IconSelector;
    return (
        <th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart">
                    <Text weight={500} size="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size={14} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) =>
            item[key].toString().toLowerCase().includes(query)
        )
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) return filterData(data, payload.search);

    if (sortBy === "name") {
        return filterData(
            [...data].sort((a, b) => {
                if (payload.reversed) {
                    return b[sortBy].localeCompare(a[sortBy]);
                }

                return a[sortBy].localeCompare(b[sortBy]);
            }),
            payload.search
        );
    }

    return filterData(
        [...data].sort(function (a: any, b: any) {
            if (a[sortBy] === Infinity) return 1;
            else if (isNaN(a[sortBy])) return -1;
            else if (!payload.reversed) return a[sortBy] - b[sortBy];
            else return b[sortBy] - a[sortBy];
        }),
        payload.search
    );
}

export function TableSort({ data }: TableSortProps) {
    const [search, setSearch] = useState("");
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(
            sortData(data, {
                sortBy,
                reversed: reverseSortDirection,
                search: value,
            })
        );
    };

    const rows = sortedData.map((row) => (
        <tr key={row.name}>
            <td className="coin-name">
                <img
                    className="coin-icon"
                    alt=""
                    src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                />
                <span className="coin-name__fullname">{row.name}</span>
                <span className="coin-name__symbol">
                    <TextComponent>BTC</TextComponent>
                </span>
            </td>
            <td>{row.price}</td>
            <td>{row.price_change_percentage_24h}</td>
            <td>{row.total_volume}</td>
            <td>{row.market_cap}</td>
        </tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                icon={<IconSearch size={14} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table
                horizontalSpacing="md"
                verticalSpacing="xs"
                sx={{ tableLayout: "fixed", minWidth: 700 }}
                className="table"
            >
                <thead>
                    <tr>
                        <Th
                            sorted={sortBy === "name"}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting("name")}
                        >
                            Name
                        </Th>
                        <Th
                            sorted={sortBy === "price"}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting("price")}
                        >
                            Price
                        </Th>
                        <Th
                            sorted={sortBy === "price_change_percentage_24h"}
                            reversed={reverseSortDirection}
                            onSort={() =>
                                setSorting("price_change_percentage_24h")
                            }
                        >
                            Change 24h
                        </Th>
                        <Th
                            sorted={sortBy === "total_volume"}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting("total_volume")}
                        >
                            Volume 24h
                        </Th>
                        <Th
                            sorted={sortBy === "market_cap"}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting("market_cap")}
                        >
                            Market Cap
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <tr>
                            <td colSpan={Object.keys(data[0]).length}>
                                <Text weight={500} align="center">
                                    Nothing found
                                </Text>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </ScrollArea>
    );
}

export default TableSort;
