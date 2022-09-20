import { useState } from "react";
import { ICoinRowData, TableSortProps, ThProps } from "../types/types";
import {
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
import "./Table.scss";
import TextComponent from "../../components/TextComponent";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import utils from "../../utils/utils";

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

function filterData(data: ICoinRowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) =>
            item[key].toString().toLowerCase().includes(query)
        )
    );
}

function sortData(
    data: ICoinRowData[],
    payload: {
        sortBy: keyof ICoinRowData | null;
        reversed: boolean;
        search: string;
    }
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

export function TableComponent({ data }: TableSortProps) {
    const [search, setSearch] = useState("");
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof ICoinRowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof ICoinRowData) => {
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

    const rows = sortedData.map((row: ICoinRowData) => (
        <tr key={row.name}>
            <td className="coin-name">
                <Link className="coin-name" to={`/coin/${row.id}`}>
                    <img className="coin-icon" alt="" src={row.image} />
                    <span className="coin-name__symbol">
                        {row.symbol.toUpperCase()}
                    </span>
                    <span className="coin-name__fullname">
                        <TextComponent>{row.name}</TextComponent>
                    </span>
                </Link>
            </td>
            <td
                className={
                    "coin-price-col" +
                    (row.price_change_percentage_24h >= 0 ? " up" : " down")
                }
            >
                {utils.formatPrice(row.current_price)}
            </td>
            <td
                className={
                    "coin-percentage-col" +
                    (row.price_change_percentage_24h >= 0 ? " up" : " down")
                }
            >
                {utils.formatPercentage(row.price_change_percentage_24h)}
            </td>
            <td>{utils.formatLargePrice(row.total_volume / 1000)}</td>
            <td>{utils.formatLargePrice(row.market_cap / 1000)}</td>
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
                            sorted={sortBy === "current_price"}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting("current_price")}
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
                            24h Change
                        </Th>
                        <Th
                            sorted={sortBy === "total_volume"}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting("total_volume")}
                        >
                            24h Volume
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

export default TableComponent;
