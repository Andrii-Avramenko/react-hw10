import { Component } from "react";
import { nanoid } from "nanoid";

import { GlobalStyle } from './components/GlobalStyle';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";


class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.some((contact) => contact.name === name)) {
      const message = `${name} is already in contacts!`;
      console.warn(message);
      alert(message);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== id,
    );
    this.setState({
      contacts: newContacts,
    });
  };

  filterChange = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterChange} />
        <ContactList
          contacts={contacts}
          onDelete={this.deleteContact}
          filter={filter}
        />
      </>
    );
  }
}

export default App;
