import {type ChangeEvent, type FC} from "react";

type UsersFilterValue = string | boolean;
type UsersFiltersProps = {
  filters: Record<string, UsersFilterValue>;
  onChange(filterName: string, vale: UsersFilterValue):void
}

const UsersFilters:FC<UsersFiltersProps> = ({filters, onChange}) => {

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    onChange(target.name, target.value);
  }

  const handleChangeCheckbox = ({target}: ChangeEvent<HTMLInputElement>) => {
    onChange(target.name, !filters[target.name]);
  }

  return <div className={"filters"}>

    <div className="form-group">
      <label htmlFor="active">
        <input
          id="active"
          name={'active'}
          type="checkbox"
          onChange={handleChangeCheckbox}
          defaultChecked={Boolean(filters.active)}
        /> Show active

      </label>
    </div>
    <div className="form-group">
      <label htmlFor="inactive">
        <input
          id="inactive"
          name={'inactive'}
          type="checkbox"
          onChange={handleChangeCheckbox}
          defaultChecked={Boolean(filters.inactive)}
        /> Show Inactive

      </label>
    </div>

    <div className="form-group">
      <label>
        E - mail
      </label>
      <input placeholder={'email'} value={filters.email.toString()} name={'email'} type="text" onChange={handleChange}/>

    </div>

    <div className="form-group">
      <label>
        Balance
      </label>
      <input placeholder={'balance'} value={filters.balance.toString()} name={'balance'} type="text" onChange={handleChange}/>
    </div>
  </div>

}
export default UsersFilters;
