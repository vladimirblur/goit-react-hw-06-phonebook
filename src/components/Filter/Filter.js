import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  const filterId = uuidv4();

  return (
    <div className={s.filter}>
      <label className={s.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={value}
        id={filterId}
        onChange={onChange}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
