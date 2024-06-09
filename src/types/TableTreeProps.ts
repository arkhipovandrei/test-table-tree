import {ColumnProps} from "@/types/ColumnProps.ts";
import {OrderBy} from "@/types/OrderBy.ts";
import {TreeNode} from "@/types/TreeNode.ts";

export type TableTreeProps = {
  columns: ColumnProps[];
  orderBy: OrderBy;
  openedKeys: Set<number>;
  onSort(columnName: string):void;
  onOpen(id: number):void;
  data: TreeNode[];
}
