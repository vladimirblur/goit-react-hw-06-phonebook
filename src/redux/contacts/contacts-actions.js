import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/Add", (contact) => ({
  payload: {
    contact: {
      id: uuidv4(),
      ...contact,
    },
  },
}));

export const deleteContact = createAction("contacts/Delete", (contactId) => ({
  payload: { contactId },
}));

export const filterChange = createAction("contacts/changeFilter", (filter) => ({
  payload: { filter },
}));
