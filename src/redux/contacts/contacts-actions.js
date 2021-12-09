import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/Add", (contact) => ({
  payload: {
    contact: {
      id: uuidv4(),
      ...contact,
    },
  },
}));

const deleteContact = createAction("contacts/Delete", (contactId) => ({
  payload: { contactId },
}));

const filterChange = createAction("contacts/Filter");

export const actions = { addContact, deleteContact, filterChange };
