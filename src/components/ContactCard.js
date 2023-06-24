import React from "react";
//to import image
import user from "../images/userimage.png";

const ContactCard = (props) => {
  // Now here we destructure props so that we don't have to write props.contactM.firstname and so on...
  const { id, firstname, email } = props.contactM;
  return (
    <div
      className="item"
      // using inline css styles
      // here we should write flex-direction as flexDirection
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#399",
      }}
    >
      <img className="ui avatar image" src={user} alt="userImage" />
      <div className="content">
        <div className="header">{firstname}</div>
        <div className="email">{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginLeft: "50px",
          fontSize: "20px",
          marginTop: "10px",
        }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
