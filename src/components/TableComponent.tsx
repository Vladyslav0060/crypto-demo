import { Table } from "@mantine/core";

type ITable = {
    columns: any[],
    elements: any[]
}

const TableComponent = ({ columns, elements }: ITable) => {

    return (
        <Table width="xs">
            <thead>
                <tr>
                    {Object.values(columns).map((column) => (<th key={column}>{column}</th>))}
                </tr>
            </thead>
            <tbody>{elements.map((element) => (
                <tr key={element?.id || element?.name}>
                    {Object.values(columns).map((column) => (<td key={column}>{column}</td>))}
                </tr>
            ))}</tbody>
        </Table>
    );
};

export default TableComponent;
