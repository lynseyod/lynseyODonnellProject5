import React from 'react';

const AddressCard = (props) => {
  const {firstName, lastName, contactMain, company, contactedVia, lastContacted} = props;

  const handleClick = () => {
    console.log("WHY IS THIS SO HARD?!")
  }

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
      <button className="update"><i className="fas fa-pencil-alt"></i>Update info</button>
    </div>
  )
};

export default AddressCard;