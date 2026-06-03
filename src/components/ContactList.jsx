import { Component } from "react";

class ContactList extends Component {
  render() {
    const { contacts, onDelete, filter } = this.props;

    return (
      <ul>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

export default ContactList;
