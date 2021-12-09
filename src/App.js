import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}

export default App;
