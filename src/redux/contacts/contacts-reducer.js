import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterChange } from "./contacts-actions";

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload.contact],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.contactId),
});

const filter = createReducer("", {
  [filterChange]: (_, { payload }) => payload.filter,
});

const contactReducer = combineReducers({
  items,
  filter,
});

export { contactReducer };
