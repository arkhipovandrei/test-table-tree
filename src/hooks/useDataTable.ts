import {useState} from "react";
import {OrderBy} from "@/types/OrderBy";
import {SortDirection} from "@/constants/SortDirection";


export const useDataTable = () => {

  const [openedKeys, setOpenedKeys] = useState(new Set<number>());
   const [orderBy, setOrderBy] = useState<OrderBy>({
    by: 'name',
    dir: SortDirection.ASC
  });

  const handleOpen = (id: number) => {
    setOpenedKeys(prev => {
      const newState = new Set(prev);
      if(newState.has(id)) {
        newState.delete(id)
      } else {
        newState.add(id)
      }
      return newState
    })
  }

  const handleSort = (by: string) => {
    setOrderBy(prevState => {
      const nextDir = prevState.by === by ? (prevState.dir === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC) : SortDirection.ASC
      return {
        by,
        dir: nextDir
      }
    });
  }
  return {
    orderBy,
    openedKeys,
    handleSort,
    handleOpen
  };
}
