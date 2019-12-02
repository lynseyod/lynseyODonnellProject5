import React from 'react';

const AddressForm = (props) => {
  const {firstName, lastName, contactMain, company, contactedVia, lastContacted, editSubmit, editChange, editId} = props;

  const bufferThatSubmit = () => {
    editSubmit(editId);
  }

  return (
    <form className="editForm" onSubmit={bufferThatSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" onChange={editChange} type="text" value={firstName}/>
      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" onChange={editChange} type="text" value={lastName}/>
      <label htmlFor="contactMain">Main Contact:</label>
      <input id="contactMain" onChange={editChange} type="text" value={contactMain}/>
      <label htmlFor="">Company:</label>
      <input id="company" onChange={editChange} type="text" value={company}/>
      <label htmlFor="contactedVia">Contacted Via:</label>
      <input id="contactedVia" onChange={editChange} type="text" value={contactedVia}/>
      <label htmlFor="lastContacted">Last Contacted:</label>
      <input id="lastContacted" onChange={editChange} type="date" value={lastContacted}/>
      <button type="submit">Update</button>
    </form>
  )
};

export default AddressForm;