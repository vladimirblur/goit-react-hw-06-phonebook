import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getContacts,
  getFilter,
} from "../../redux/contacts/contacts-selectors";
import { deleteContact } from "../../redux/contacts/contacts-actions";

export default function ContactList() {
  const dispatch = useDispatch();

  const getFilteredContacts = (state) => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ name, id, number }) => (
        <li className={s.item} key={id}>
          <span className={s.contactInfo}>
            {name}: {number}
          </span>
          <button
            className="button"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
