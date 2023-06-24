//useState is react Hook in ourder to use react states in fucntional component
//but for class component look at AddContact.js file

//To store the data's locally we need to use UseEffect which helps to persist data even after refreshing the page

import React, { useState, useEffect } from "react";
//since uuidv4 is depreceated so we use this
// import {uuid} from 'uuidv4'
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  //key for storing the data locally
  const LOCAL_STORAGE_KEY = "contacts";
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
  const addContactHandler = (newContact) => {
    // console.log(newContact);
    // here we add the value f the newly added contacts on the array
    //but we need to add the contacts to previously added contacts so we did ...contacts and then we add the newly added value
    // setContacts([...contacts, newContact]);
    setContacts([...contacts, { id: uuidv4(), ...newContact }]);
  };

  //to delete the list when pressed in delete icon
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  //but we also need to pass this handler

  // we also need to retrieve the data back from local storage as
  //JSON parsing is the process of converting a JSON object in text format to a Javascript object that can be used inside a program.
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //set the state of setContacts
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);
  //we also need to maintain unique id for the data stored so we install uuidv4 using npm

  //to store the data into local storage
  //JSON.strifify converts any data to string as JSON only supports string data's
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log("Contact List:", contacts);
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      {/* Adding a Handler here */}
      <AddContact addContactHandler={addContactHandler} />
      {/* <ContactList/> */}
      {/* without passing data into contact list */}

      {/* Here we pass contact list using props */}
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* we pass contacts array inside contacts property name */}
    </div>
  );
}

export default App;
