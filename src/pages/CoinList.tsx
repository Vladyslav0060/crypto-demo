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
  company: string;
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

  if (!sortBy) {
    return filterData(data, payload.search);
  }
  if (sortBy === "price") {
    return [...data].sort(function (a: any, b: any) {
      if (a === Infinity) return 1;
      else if (isNaN(a)) return -1;
      else return a - b;
    });
  }
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
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <tr key={row.name}>
      <td className="coin-name">
        <img
          className="coin-icon"
          alt=""
          src="data:image/png;base64,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"
        />
        <span className="coin-name__fullname">{row.name}</span>
        <span className="coin-name__symbol">
          <TextComponent>BTC</TextComponent>
        </span>
      </td>
      <td>{row.price}</td>
      <td>{row.company}</td>
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
              sorted={sortBy === "company"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("company")}
            >
              Company
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
