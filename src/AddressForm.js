import React from 'react';

const AddressForm = (props) => {
  const {firstName, lastName, contactMain, company, contactedVia, lastContacted, editSubmit, editChange} = props;

  return (
    <form className="editForm" onSubmit={editSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" onChange={editChange} type="text" value={firstName}/>
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" value={lastName}/>
      <label htmlFor="contactMain">Main Contact:</label>
      <input type="text" value={contactMain}/>
      <label htmlFor="">Company:</label>
      <input type="text" value={company}/>
      <label htmlFor="contactedVia">Contacted Via:</label>
      <input type="text" value={contactedVia}/>
      <label htmlFor="lastContacted">Last Contacted:</label>
      <input type="date" value={lastContacted}/>
      <button type="submit">Update</button>
    </form>
  )
};

export default AddressForm;