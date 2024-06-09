import {type TableTreeProps} from "@/types/TableTreeProps";
import TableColumn from "@/components/TableTree/TableColumn.tsx";
import {TableRow} from "@/components/TableTree/TableRow.tsx";

export const TableTree = (props: TableTreeProps) => {
  const {
    columns,
    orderBy,
    data,
    openedKeys,
    onSort,
    onOpen
  } = props;

  return <table border={1} className={"table"}>
    <thead>
    <tr>
      {columns.map((column) => <TableColumn
        key={`col_${column.name}`}
        orderBy={orderBy}
        column={column}
        onSort={onSort}
      />)}
    </tr>
    </thead>
    <tbody>
    {data && data.map((userBalance) => {
      return <TableRow
        key={userBalance.id}
        row={userBalance}
        openedKeys={openedKeys}
        onOpen={onOpen}
        level={0}
      />
    })}
    </tbody>
  </table>
}
