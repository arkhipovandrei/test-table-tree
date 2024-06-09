import {SortingIcon} from "@/components/TableTree/SortingIcon";
import {type FC, useMemo} from "react";
import {TableColumnProps} from "@/types/TableColumnProps.ts";
import {SortDir} from "@/types/SortDir.ts";


const TableColumn: FC<TableColumnProps> = ({column, onSort, orderBy}) => {

  const dir = useMemo((): SortDir | null => {
    if (orderBy.by === column.name) {
      return orderBy.dir
    }
    return null
  }, [orderBy.dir, orderBy.by, column.name])

  const handleClick = () => {
    onSort(column.name)
  }

  if (column.allowSorting !== undefined && !column.allowSorting) {
    return <th>
      {column.label}
    </th>
  }

  return <th onClick={handleClick} className={'cursor-pointer sorting'}>
    {column.label} <SortingIcon dir={dir}/>
  </th>

}
export default TableColumn
