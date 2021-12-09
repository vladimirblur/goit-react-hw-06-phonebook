import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { actions } from "./contacts-actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload.contact],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.contactId),
});

const filter = createReducer("", {
  [actions.filterChange]: (state, { payload }) => payload.filter,
});

const contactReducer = combineReducers({
  items,
  filter,
});

export { contactReducer };
