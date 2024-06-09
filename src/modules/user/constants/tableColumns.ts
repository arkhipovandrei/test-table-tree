import {ColumnProps} from "@/types/ColumnProps.ts";

export const tableColumns:Array<ColumnProps> =  [
  {label: "Name", "name": "name"},
  {label: "E-mail", "name": "email"},
  {label: "Balance", "name": "balance"},
  {label: "Is active", "name": "isActive", allowSorting: false},
];
