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
      buttonClicks: 0,
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

  handleClick = () => {
    this.setState({
      buttonClicks: this.state.buttonClicks + 1,
    })

    if (this.state.buttonClicks % 2 === 0) {
      this.setState({
        displayForm: true
      })
    } else {
      this.setState({
        displayForm: false
      })
    }
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
          <button className="newAddy" onClick={this.handleClick}><i class="fas fa-plus-circle"></i></button>
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
      </div>
    );
  }
}

export default App;
