import {type FC, useMemo} from "react";
import {spacing} from "@/constants/spacing";
import {type TableRowProps} from "@/types/TableRowProps.ts";
import {TreeNode} from "@/types/TreeNode.ts";
import {User} from "@/modules/user/types/User.ts";

type UserTableRow = TreeNode & Partial<User>;
export const TableRow:FC<TableRowProps<UserTableRow>> = (props) => {

  const {row, level, onOpen, openedKeys} = props;

  const hasChildren = useMemo((): boolean => {
    return Boolean(row.children?.length)
  }, [row.children?.length]);

  const isOpen = useMemo(():boolean => {
    return Boolean(openedKeys?.has(row.id));
  }, [openedKeys])

  const nextLeve = Number(level) + 1;

  return <>
    <tr>
      <td style={{paddingLeft: spacing * nextLeve}}>
        {hasChildren && <button type={"button"} onClick={() => onOpen(row.id)} className="btn">
          {isOpen ? '-' : '+'}
        </button>}  {row.name}
      </td>
      <td>{row.email}</td>
      <td>{row.balance}</td>
      <td>{row.isActive ? 'Active' : 'Inactive'}</td>
    </tr>
    {hasChildren && isOpen && row.children?.map((child) => <TableRow
      key={child.id}
      row={child as UserTableRow}
      openedKeys={openedKeys}
      onOpen={onOpen}
      level={nextLeve}
    />) }
  </>
}
