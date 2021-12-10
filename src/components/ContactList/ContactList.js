import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { deleteContact } from "../../redux/contacts/contacts-actions";

export default function ContactList() {
  const dispatch = useDispatch();

  const getFilteredContacts = createSelector(
    (state) => state.contacts.items,
    (state) => state.contacts.filter,
    (items, filter) => {
      const normalizedFilter = filter.toLowerCase();
      return items.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
  );

  const visibleContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, id, number }) => (
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
