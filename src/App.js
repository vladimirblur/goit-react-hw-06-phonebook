import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");
  const visibleContacts = getFilteredContacts();

  function addContact(info) {
    const contact = {
      id: uuidv4(),
      ...info,
    };

    if (verifyDuplication(info)) {
      alert(`${info.name} is already in contacts.`);
      return;
    }

    setContacts([contact, ...contacts]);
  }

  function verifyDuplication(contact) {
    return contacts.find(({ name }) => name === contact.name);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  function handleContactDelete(contactId) {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  }

  return (
    <div className="App">
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onContactDelete={handleContactDelete}
        />
      </Container>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
