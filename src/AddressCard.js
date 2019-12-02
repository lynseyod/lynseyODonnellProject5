import React from 'react';
import firebase from './firebase.js';

const AddressCard = (props) => {
  const {firstName, lastName, contactMain, company, contactedVia, lastContacted, buttonId, editIt} = props;

  const handleClick = (event) => {
    const thisThing = event.target.id;
    editIt(thisThing);
  }

  const effThisBish = () => {
    const dbRef = firebase.database().ref();
    dbRef.child(buttonId).remove();
  }

  // const youSureBro = () => {

  // }

  return (
    <div className="addressContainer">
      <div className="profilePic">
        <img src="http://placekitten.com/200/200" alt="professional headshot"/>
      </div>
      <h2>{firstName + " " + lastName}</h2>
      <p className="contactInfo">{contactMain}</p>
      <p><span className="info">Company: </span>{company}</p>
      <p><span className="info">Connected Via: </span>{contactedVia}</p>
      <p><span className="info">Last Contacted: </span>{lastContacted}</p>
      <button className="deleteThis" onClick={effThisBish}><i className="fas fa-times-circle"></i>Delete</button>
      <button className="update" onClick={handleClick} id={buttonId}><i className="fas fa-pencil-alt"></i>Update info</button>
    </div>
  )
};

export default AddressCard;