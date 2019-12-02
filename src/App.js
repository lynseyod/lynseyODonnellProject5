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
      displayForm: false, //toggled to display main form
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

  handleClickMainForm = (event) => {
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

  formSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    const {firstName, lastName, contactMain, company, contactedVia, lastContacted} = this.state
    const userInput = {};
    userInput.firstName = firstName;
    userInput.lastName = lastName; //this needs to be capitalized
    userInput.contactMain = contactMain;
    userInput.company = company;
    userInput.contactedVia = contactedVia;
    userInput.lastContacted = lastContacted;
    dbRef.push(userInput);
    this.setState({
      displayForm: false
    })
  }

  inputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({
      [name]: value,
    })
  }

  clickSort = (e) => {
    const toSortBy = e.target.id;
    const fuckingFakeArray = [...this.state.contacts];
    const arrayToSort = fuckingFakeArray.map((contact) => {
      return contact.contactObj[toSortBy];
    })
    const testAThing = arrayToSort.sort();
    const sortedArrayQuestionMark = [];

    testAThing.forEach((sortedThing) => {
      let shouldIAddIt = true
      // test it against each item in fuckingFakeArray
      fuckingFakeArray.forEach((fuckingFakeContact) => {
        if(fuckingFakeContact.contactObj[toSortBy] === sortedThing) {
          if (sortedArrayQuestionMark.length === 0) {
            shouldIAddIt = true;
          } else {
            sortedArrayQuestionMark.forEach((sortedContact) => {
              if (sortedContact.contactId === fuckingFakeContact.contactId) {
                shouldIAddIt = false;
              }
            })
          }
          if (shouldIAddIt) {
            sortedArrayQuestionMark.push(fuckingFakeContact);
          }
          this.setState({
            contacts: sortedArrayQuestionMark
          })
        }
      })
    })
  }

  clickTheEditButton = (whatClicked) => {
    console.log(whatClicked);
    const newContacts = [...this.state.contacts]
    const whoDis = newContacts.filter((contact) => {
      return contact.contactId === whatClicked;
    })
    console.log(whoDis)
    this.setState({
      editContactForm: whatClicked,
      firstName: whoDis[0].contactObj.firstName,
      lastName: whoDis[0].contactObj.lastName,
      company: whoDis[0].contactObj.company,
      contactMain: whoDis[0].contactObj.contactMain,
      contactedVia: whoDis[0].contactObj.contactedVia,
      lastContacted: whoDis[0].contactObj.lastContacted
    })
  }
  
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
            {this.state.displayForm ? <i className="fas fa-times-circle"></i> : <i className="fas fa-plus-circle"></i>}
          </button>
          {this.state.displayForm ? 
            <Form 
              addContact={this.formSubmit}
              inputChange={this.inputChange}
            />
            : null}
          <ul>
            {this.state.contacts.map( (contactVal, index) => {
              const {firstName, lastName, contactMain, company, contactedVia, lastContacted} = contactVal.contactObj;

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
                      editSubmit={this.formSubmit}
                      editChange={this.inputChange}
                    />
                  </li>
                )
              }

              return (
                <li key={contactVal.contactId}>
                  <AddressCard
                    firstName={firstName}
                    lastName={lastName}
                    contactMain={contactMain}
                    company={company}
                    contactedVia={contactedVia}
                    lastContacted={lastContacted}
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
