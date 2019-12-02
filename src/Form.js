import React from 'react';

const Form = (props) => {
  const {addContact, inputChange, errorMessage, okIGetIt} = props;
  
  return (
    <form className="newContact" onSubmit={addContact}>
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" type="text" onChange={inputChange}/>
      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" type="text" onChange={inputChange}/>
      <label htmlFor="contactMain">Main Contact:</label>
      <input id="contactMain" type="text" onChange={inputChange}/>
      <label htmlFor="company">Company:</label>
      <input id="company" type="text" onChange={inputChange}/>
      <label htmlFor="contactedVia">Contacted via:</label>
      <input id="contactedVia" type="text" onChange={inputChange}/>
      <label htmlFor="lastContacted">Last Contacted:</label>
      <input id="lastContacted" type="date" onChange={inputChange}/>
      <button type="submit">Submit</button>
      {errorMessage ? 
        <div className="ErrorMessage">
          <p>Please fill out all form items before submitting!</p>
        </div>
      : null}
    </form>
  )
}

export default Form;