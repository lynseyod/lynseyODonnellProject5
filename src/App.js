import React, { Component } from 'react';
import firebase from './firebase.js';

import Header from './Header';
import AddressCard from './AddressCard';
import Form from './Form'
import './styles/styles.css';

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
      displayForm: false,
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

  handleClick = (event) => {
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
// let's fucking pseudo code this shit ok
//  for each item in testAThing:
//    find it in fuckingFakeArray.contactobj[toSortBy]
//    if contactID of thing is NOT in sortedArrayQuestionMark:
//      push to sortedArrayQuestionMark

// MOTHERFUCKING NESTED FOR LOOPS

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

  render() {
    
    return (
      <div className="wrapper">
        <Header />
        <main>
          <h3>Sort by:</h3>
          <button id="lastContacted" onClick={this.clickSort}>Last Contacted</button>
          <button id="lastName" onClick={this.clickSort}>Last Name</button>
          <button id="company" onClick={this.clickSort}>Company</button>
          <button className="newAddy" onClick={this.handleClick}>
            {this.state.displayForm ? <i className="fas fa-times-circle"></i> : <i className="fas fa-plus-circle"></i>}
          </button>
          {this.state.displayForm ? <Form addContact={this.formSubmit} inputChange={this.inputChange}/> : null}
          <ul>
            {this.state.contacts.map( (contactVal, index) => {
              const {firstName, lastName, contactMain, company, contactedVia, lastContacted} = contactVal.contactObj;

              return (
                <li key={contactVal.contactId}>
                  <AddressCard
                    firstName={firstName}
                    lastName={lastName}
                    contactMain={contactMain}
                    company={company}
                    contactedVia={contactedVia}
                    lastContacted={lastContacted}
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
