import {TableTreeProps} from "@/types/TableTreeProps.ts";
import {ColumnProps} from "@/types/ColumnProps.ts";

export type TableColumnProps = {
  column: ColumnProps;
  onSort: TableTreeProps['onSort'];
  orderBy: TableTreeProps['orderBy'];
}
