import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  //making a function to render the propos on the screen

  //here we need to create a deleting trash contactHandler
  const deleteContactHandler = (id) =>{
    props.getContactId(id)
  };

  const renderContactList = props.contacts.map((contactL) => {
    // return <ContactCard conta ctM={contactL}></ContactCard>;
    return <ContactCard contactM={contactL} clickHandler ={deleteContactHandler} key={contactL.id}/>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
