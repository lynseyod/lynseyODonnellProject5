import React from 'react';

const Form = (props) => {
  return (
    <form className="newContact" onSubmit={props.addContact}>
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" type="text" onChange={props.inputChange}/>
      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" type="text" onChange={props.inputChange}/>
      <label htmlFor="contactMain">Main Contact:</label>
      <input id="contactMain" type="text" onChange={props.inputChange}/>
      <label htmlFor="company">Company:</label>
      <input id="company" type="text" onChange={props.inputChange}/>
      <label htmlFor="contactedVia">Contacted via:</label>
      <input id="contactedVia" type="text" onChange={props.inputChange}/>
      <label htmlFor="lastContacted">Last Contacted:</label>
      <input id="lastContacted" type="date" onChange={props.inputChange}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;