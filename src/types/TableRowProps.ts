import {TableTreeProps} from "@/types/TableTreeProps.ts";

export type TableRowProps <T extends object> = {
  row: T;
  level?: number;
  onOpen:TableTreeProps['onOpen'];
  openedKeys: TableTreeProps['openedKeys'];
}
