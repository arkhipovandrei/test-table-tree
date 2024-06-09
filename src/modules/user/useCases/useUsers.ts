import {useEffect, useState} from "react";
import {SortDirection} from "@/constants/SortDirection.ts";
import {listToTree} from "@/utils/listToTree.ts";
import {strToNumberString} from "@/utils/strToNumber.ts";
import {filtersInitialState} from "@/modules/user/constants/filtersInitialState.ts";
import {tableColumns} from "@/modules/user/constants/tableColumns.ts";
import {User} from "@/modules/user/types/User.ts";
import {UserListProps} from "@/modules/user/types/UserListProps.ts";
import {UserTableRow} from "@/modules/user/types/UserTableRow.ts";


export const useUsers = (props: UserListProps) => {

  const {orderBy} = props;
  const [users, setUsers] = useState<UserTableRow[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserTableRow[]>([]);
  const [filters, setFilters] = useState(filtersInitialState);

  const order = (data: User[]) => {
    return [...data].sort((a, b) => {
      const by = orderBy.by as keyof User;
      if (orderBy.dir === SortDirection.ASC) {
        return a[by].toString().localeCompare(b[by].toString());
      }
      return b[by].toString().localeCompare(a[by].toString())
    });
  }

  useEffect(() => {
    fetch('/users.json')
      .then(res => res.json())
      .then(data => setUsers(order(data)))
  }, []);

  useEffect(() => {

    setUsers(prevState => {
      return order(prevState);
    });

  }, [orderBy.dir, orderBy.by]);

  useEffect(() => {

    setFilteredUsers(() => {
      return users.filter(row => {
        let isValid = true;
        if (filters.email.length) {
          isValid = row.email.toLowerCase().includes(filters.email.toLowerCase())
        }
        if (filters.balance.length) {
          const balance = strToNumberString(row.balance);
          const balanceSearchString = strToNumberString(filters.balance);

          if (!balanceSearchString) {
            isValid = false;
          } else {
            isValid = balance.includes(balanceSearchString)
          }
        }

        if (filters.active && filters.inactive) {
          return isValid;
        }
        if (!filters.active && !filters.inactive) {
          return false;
        }

        if (filters.active) {
          isValid = isValid && row.isActive;
        }

        if (filters.inactive) {
          isValid = isValid && !row.isActive;
        }
        return isValid;
      })

    })

  }, [filters, orderBy, users]);

  const handleChangeFilter = (name: string, value: string | boolean) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  return {
    columns: tableColumns,
    data: listToTree<UserTableRow>(filteredUsers),
    filters,
    handleChangeFilter
  }
}
