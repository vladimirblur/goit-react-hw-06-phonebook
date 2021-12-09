import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { filterChange } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import s from "./Filter.module.css";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterId = uuidv4();

  return (
    <div className={s.filter}>
      <label className={s.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={filter}
        id={filterId}
        onChange={(e) => dispatch(filterChange(e.target.value))}
      ></input>
    </div>
  );
}
