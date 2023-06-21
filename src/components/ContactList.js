import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  //making a function to render the propos on the screen
  const renderContactList = props.contacts.map((contactL) => {
    // return <ContactCard contactM={contactL}></ContactCard>;
    return <ContactCard contactM={contactL} />
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
