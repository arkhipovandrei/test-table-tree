import {useDataTable} from "@/hooks/useDataTable.ts";
import {TableTree} from "@/components/TableTree/TableTree.tsx";
import {useUsers} from "@/modules/user/useCases/useUsers.ts";
import UsersFilters from "@/modules/user/ui/components/UsersFilters.tsx";

const Users = () => {

  const {handleSort, openedKeys, orderBy, handleOpen} = useDataTable();
  const {
    columns, data,
    filters,
    handleChangeFilter,
  } = useUsers({
    orderBy
  });

  return <>
    <UsersFilters filters={filters} onChange={handleChangeFilter}/>
    <TableTree
      columns={columns}
      data={data}
      openedKeys={openedKeys}
      orderBy={orderBy}
      onSort={handleSort}
      onOpen={handleOpen}
    />
  </>
}


export default Users;
