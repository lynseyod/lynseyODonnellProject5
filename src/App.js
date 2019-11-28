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

  formSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    const {firstName, lastName, contactMain, company, contactedVia, lastContacted} = this.state
    const userInput = {};
    userInput.firstName = firstName;
    userInput.lastName = lastName;
    userInput.contactMain = contactMain;
    userInput.company = company;
    userInput.contactedVia = contactedVia;
    userInput.lastContacted = lastContacted;
    console.log(userInput);
    dbRef.push(userInput);
  }

  inputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({
      [name]: value,
    })
  }

  render() {
    
    return (
      <div className="wrapper">

        <Header />
        <main>
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
        <Form addContact={this.formSubmit} inputChange={this.inputChange}/>
      </div>
    );
  }
}

export default App;
