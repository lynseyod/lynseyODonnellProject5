import React, { Component } from 'react';
import firebase from './firebase.js';

import Header from './Header';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
import Form from './Form';
import './styles/styles.css';
import 'animate.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: [], //empty array populated by firebase
      firstName: "", //empty strings to store future input
      lastName: "",
      contactMain: "",
      company: "",
      contactedVia: "",
      lastContacted: "",
      imageSrc: "http://placekitten.com/200/200",
      displayForm: false, //toggled to display main form
      formError: false, //toggled to display error message!
      editContactForm: "", //will be filled with contactId
    }
  }

  componentDidMount() {
    //connect app to firebase
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      const contacts = snapshot.val();
      // change data from object of objects to array of objects
      const contactsArray = [];
      for (let key in contacts) {
        const contactObject = {
          contactId: key,
          contactObj: contacts[key]
        };
        contactsArray.push(contactObject);
      }
      this.setState({
        contacts: contactsArray
      })
    })
  }

  // track all changes on form inputs
  inputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.id;
    this.setState({
      [name]: value,
    })
  }

  //function to push user inputs into an object
  //completed on both form submits so now it's a function!
  pushUserInputs = (newObject) => {
    const {firstName, lastName, contactMain, company, contactedVia, lastContacted, imageSrc} = this.state;
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.contactMain = contactMain;
    newObject.company = company;
    newObject.contactedVia = contactedVia;
    newObject.lastContacted = lastContacted;
    newObject.imageSrc = imageSrc;
  }

  // also completed on both form submits
  // resetting the state so it doesn't hold onto input values after submit
  resetState = () => {
    this.setState({
      firstName: "",
      lastName: "",
      contactMain: "",
      company: "",
      contactedVia: "",
      lastContacted: "",
      //set a default image in case the user doesn't have a url
      imageSrc: "http://placekitten.com/200/200"
    })
  }

  // listens for a click on the 'new contact' button
  // assigns boolean used to conditionally display the form.
  handleClickMainForm = () => {
    if (this.state.displayForm) {
      this.setState({
        displayForm: false
      })
    } else {
      this.setState({
        displayForm: true
      })
    }
  }

  // event listener for new contact form submission!
  newContactSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    const {firstName, lastName, contactMain, company, contactedVia, lastContacted} = this.state;
    //all fields except image must be filled out or an error shows
    if (firstName !== "" && lastName !== "" && contactMain !== "" && company !== "" && contactedVia !== "" && lastContacted !== "") {
      const userInput = {};
      this.pushUserInputs(userInput);
      dbRef.push(userInput);
      this.resetState();
      this.setState({
        displayForm: false, //and the form goes away once it's been submitted.
      })
    } else { //if not all fields are filled, error message displays.
      this.setState({
        formError: true
      })
    }
  }

  // event listener for sorting functionality
  clickSort = (e) => {
    const toSortBy = e.target.id; //WHAT are we sorting by?
    const copyOfContacts = [...this.state.contacts]; //copy our contacts so we can mutate
    const arrayToSort = copyOfContacts.map((contact) => {
      return contact.contactObj[toSortBy]; // sorting just the properties we're after
    })
    const arrayToCompare = arrayToSort.sort(); // now we have an order to test against
    const sortedArray = []; //nice empty array to push contactObj into

    arrayToCompare.forEach((sortedThing) => {
      let shouldIAddIt = true //assume we should add it at first
      // test it against each item in copyOfContacts
      copyOfContacts.forEach((contactCopy) => {
        if(contactCopy.contactObj[toSortBy] === sortedThing) {
          if (sortedArray.length === 0) {
            shouldIAddIt = true;
          } else {
            sortedArray.forEach((sortedContact) => {
              if (sortedContact.contactId === contactCopy.contactId) {
                shouldIAddIt = false; // so we're not duplicating when values match
              }
            })
          }
          if (shouldIAddIt) {
            sortedArray.push(contactCopy);
          }
          this.setState({
            contacts: sortedArray
          })
        }
      })
    })
  }

  //event listener for editing contacts
  clickTheEditButton = (whatClicked) => {
    const newContacts = [...this.state.contacts] //copy the array in state
    const whoDis = newContacts.filter((contact) => {
      return contact.contactId === whatClicked; //matches clicked contact in state
    })
    //set state values to match selected contact
    //allows us to set default values in the 'edit' form
    //if I simply set the values to this.state.contacts.contactObj.etc, the values aren't editable! Changing them changes state (because of event listener) and triggers rerender, resetting the form back to the original values. UGH!
    this.setState({
      editContactForm: whatClicked, //I didn't want to destructure this since all of the 
      firstName: whoDis[0].contactObj.firstName, //variable names are the same.
      lastName: whoDis[0].contactObj.lastName,
      company: whoDis[0].contactObj.company,
      contactMain: whoDis[0].contactObj.contactMain,
      contactedVia: whoDis[0].contactObj.contactedVia,
      lastContacted: whoDis[0].contactObj.lastContacted,
      imageSrc: whoDis[0].contactObj.imageSrc
    })
  }

  // slightly different error handling than the new contact submit
  // so it gets its own event handler.
  submitTheEditForm = (whatEdited) => {
    const dbRefToEdit = firebase.database().ref(whatEdited);
    const userInput = {};
    this.pushUserInputs(userInput);
    dbRefToEdit.set(userInput);
    this.setState({
      editContactForm: "",
    })
    this.resetState();
  }
  
  // and now we ACTUALLY start rendering!
  render() {
  
    return (
      <div className="wrapper">
        <Header />
        <main>
          <label className="sortLabel">Sort by:</label>
          <button className="sortButton" id="lastContacted" onClick={this.clickSort}>Last Contacted</button>
          <button className="sortButton" id="lastName" onClick={this.clickSort}>Last Name</button>
          <button className="sortButton" id="company" onClick={this.clickSort}>Company</button>
          <button className="newAddy" onClick={this.handleClickMainForm}>
            {/* check if the form is displayed to set icon as + or x */}
            {this.state.displayForm ? <i className="fas fa-times-circle"></i> : <i className="fas fa-plus-circle"></i>}
          </button>
          {/* check if new contact form needs to be displayed */}
          {this.state.displayForm ? 
            <Form 
              addContact={this.newContactSubmit}
              inputChange={this.inputChange}
              errorMessage={this.state.formError}
            />
            : null}
          <ul>
            {/* start mapping our contacts array from state */}
            {this.state.contacts.map( (contactVal, index) => {
              const {firstName, lastName, contactMain, company, contactedVia, lastContacted, imageSrc} = contactVal.contactObj;
              // first check if it's been selected to be edited
              if (contactVal.contactId === this.state.editContactForm) {
                return (
                  <li key={contactVal.contactId}>
                    <AddressForm 
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      contactMain={this.state.contactMain}
                      company={this.state.company}
                      contactedVia={this.state.contactedVia}
                      lastContacted={this.state.lastContacted}
                      editSubmit={this.submitTheEditForm}
                      editChange={this.inputChange}
                      editId={contactVal.contactId}
                      imageSrc={this.state.imageSrc}
                    />
                  </li>
                )
              }
              //otherwise just the normal address card!
              return (
                <li key={contactVal.contactId}>
                  <AddressCard
                    firstName={firstName}
                    lastName={lastName}
                    contactMain={contactMain}
                    company={company}
                    contactedVia={contactedVia}
                    lastContacted={lastContacted}
                    imageSrc={imageSrc}
                    buttonId={contactVal.contactId}
                    editIt={this.clickTheEditButton}
                  />
                </li>
              )
            })}
          </ul>
        </main>
        <footer>
          <p><i className="far fa-copyright"></i> 2019 Lynsey O'Donnell</p>
        </footer>
      </div>
    );
  }
}

export default App;
