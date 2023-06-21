//useState is react Hook in ourder to use react states in fucntional component
//but for class component look at AddContact.js file
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  //used for static list but it's not used in real world this way
  // const contacts = [
  //   {
  //     id: "1",
  //     firstname: "Bibek",
  //     email: "bibek@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     firstname: "Milan",
  //     email: "milan@gmail.com",
  //   },
  // ];

  //using states
  const [contacts, setContacts] = useState([]);

  //declaring addContactHandler
  const addContactHandler = (contactsX) => {
    console.log(contactsX);
  };
  return (
    <div className="ui container">
      <Header />
      {/* Adding a Handler here */}
      <AddContact addContactHandler={addContactHandler} />
      {/* <ContactList/> */}
      {/* without passing data into contact list */}

      {/* Here we pass contact list using props */}
      <ContactList contacts={contacts} />
      {/* we pass contacts array inside contacts property name */}
    </div>
  );
}

export default App;
