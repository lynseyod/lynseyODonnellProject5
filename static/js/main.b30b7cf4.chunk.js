(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{15:function(t,e,a){t.exports=a(27)},20:function(t,e,a){},25:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(13),l=a.n(o),r=(a(20),a(8)),i=a(14),m=a(1),s=a(2),d=a(4),u=a(3),p=a(5),f=a(7),E=a.n(f);a(22);E.a.initializeApp({apiKey:"AIzaSyBWbGE_tMKtAzZ6-naRB90pgQmIYLdiWNU",authDomain:"addy-app-6b294.firebaseapp.com",databaseURL:"https://addy-app-6b294.firebaseio.com",projectId:"addy-app-6b294",storageBucket:"addy-app-6b294.appspot.com",messagingSenderId:"833732872885",appId:"1:833732872885:web:500f0df2589d67ff2a8cfc"});var h=E.a,b=function(t){function e(){return Object(m.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement("p",{className:"logo"},"addy"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Sign in")),c.a.createElement("li",null,c.a.createElement("p",null,"/")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Sign up")))),c.a.createElement("h1",null,"Lynsey's addy"))}}]),e}(n.Component),C=function(t){var e=t.firstName,a=t.lastName,n=t.contactMain,o=t.company,l=t.contactedVia,r=t.lastContacted,i=t.imageSrc,m=t.buttonId,s=t.editIt;return c.a.createElement("div",{className:"addressContainer"},c.a.createElement("div",{className:"profilePic"},c.a.createElement("img",{src:i,alt:"professional headshot"})),c.a.createElement("h2",null,e+" "+a),c.a.createElement("p",{className:"contactInfo"},n),c.a.createElement("p",null,c.a.createElement("span",{className:"info"},"Company: "),o),c.a.createElement("p",null,c.a.createElement("span",{className:"info"},"Connected Via: "),l),c.a.createElement("p",null,c.a.createElement("span",{className:"info"},"Last Contacted: "),r),c.a.createElement("button",{className:"deleteThis",onClick:function(){h.database().ref().child(m).remove()}},c.a.createElement("i",{className:"fas fa-times-circle"}),"Delete"),c.a.createElement("button",{className:"update",onClick:function(t){var e=t.target.id;s(e)},id:m},c.a.createElement("i",{className:"fas fa-pencil-alt"}),"Update info"))},y=function(t){var e=t.firstName,a=t.lastName,n=t.contactMain,o=t.company,l=t.contactedVia,r=t.lastContacted,i=t.editSubmit,m=t.editChange,s=t.editId,d=t.imageSrc;return c.a.createElement("form",{className:"editForm",onSubmit:function(){i(s)}},c.a.createElement("label",{htmlFor:"firstName"},"First Name:"),c.a.createElement("input",{id:"firstName",onChange:m,type:"text",value:e}),c.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),c.a.createElement("input",{id:"lastName",onChange:m,type:"text",value:a}),c.a.createElement("label",{htmlFor:"contactMain"},"Main Contact:"),c.a.createElement("input",{id:"contactMain",onChange:m,type:"text",value:n}),c.a.createElement("label",{htmlFor:""},"Company:"),c.a.createElement("input",{id:"company",onChange:m,type:"text",value:o}),c.a.createElement("label",{htmlFor:"contactedVia"},"Contacted Via:"),c.a.createElement("input",{id:"contactedVia",onChange:m,type:"text",value:l}),c.a.createElement("label",{htmlFor:"lastContacted"},"Last Contacted:"),c.a.createElement("input",{id:"lastContacted",onChange:m,type:"date",value:r}),c.a.createElement("label",{htmlFor:"imageSrc"},"Image Url:"),c.a.createElement("input",{id:"imageSrc",onChange:m,type:"text",value:d}),c.a.createElement("button",{type:"submit"},"Update"))},N=function(t){var e=t.addContact,a=t.inputChange,n=t.errorMessage;return c.a.createElement("form",{className:"newContact",onSubmit:e},c.a.createElement("label",{htmlFor:"firstName"},"First Name:"),c.a.createElement("input",{id:"firstName",type:"text",onChange:a}),c.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),c.a.createElement("input",{id:"lastName",type:"text",onChange:a}),c.a.createElement("label",{htmlFor:"contactMain"},"Main Contact:"),c.a.createElement("input",{id:"contactMain",type:"text",onChange:a}),c.a.createElement("label",{htmlFor:"company"},"Company:"),c.a.createElement("input",{id:"company",type:"text",onChange:a}),c.a.createElement("label",{htmlFor:"contactedVia"},"Contacted via:"),c.a.createElement("input",{id:"contactedVia",type:"text",onChange:a}),c.a.createElement("label",{htmlFor:"lastContacted"},"Last Contacted:"),c.a.createElement("input",{id:"lastContacted",type:"date",onChange:a}),c.a.createElement("label",{htmlFor:"imgUrl"},"(Optional)Image Url:"),c.a.createElement("input",{id:"imgUrl",type:"text",onChange:a}),c.a.createElement("button",{type:"submit"},"Submit"),n?c.a.createElement("div",{className:"ErrorMessage"},c.a.createElement("p",null,"Please fill out all form items before submitting!")):null)},g=(a(25),a(26),function(t){function e(){var t;return Object(m.a)(this,e),(t=Object(d.a)(this,Object(u.a)(e).call(this))).resetState=function(){t.setState({firstName:"",lastName:"",contactMain:"",company:"",contactedVia:"",lastContacted:"",imageSrc:"http://placekitten.com/200/200"})},t.handleClickMainForm=function(e){t.state.displayForm?t.setState({displayForm:!1}):t.setState({displayForm:!0})},t.formSubmit=function(e){e.preventDefault();var a=h.database().ref(),n=t.state,c=n.firstName,o=n.lastName,l=n.contactMain,r=n.company,i=n.contactedVia,m=n.lastContacted,s=n.imageSrc;if(""!==c&&""!==o&&""!==l&&""!==r&&""!==i&&""!==m){var d={};d.firstName=c,d.lastName=o,d.contactMain=l,d.company=r,d.contactedVia=i,d.lastContacted=m,d.imageSrc=s,a.push(d),t.resetState(),t.setState({displayForm:!1})}else t.setState({formError:!0})},t.dismissError=function(){t.setState({formError:!1})},t.inputChange=function(e){var a=e.target,n=a.value,c=a.id;t.setState(Object(i.a)({},c,n))},t.clickSort=function(e){var a=e.target.id,n=Object(r.a)(t.state.contacts),c=n.map((function(t){return t.contactObj[a]})).sort(),o=[];c.forEach((function(e){var c=!0;n.forEach((function(n){n.contactObj[a]===e&&(0===o.length?c=!0:o.forEach((function(t){t.contactId===n.contactId&&(c=!1)})),c&&o.push(n),t.setState({contacts:o}))}))}))},t.clickTheEditButton=function(e){var a=Object(r.a)(t.state.contacts).filter((function(t){return t.contactId===e}));t.setState({editContactForm:e,firstName:a[0].contactObj.firstName,lastName:a[0].contactObj.lastName,company:a[0].contactObj.company,contactMain:a[0].contactObj.contactMain,contactedVia:a[0].contactObj.contactedVia,lastContacted:a[0].contactObj.lastContacted,imageSrc:a[0].contactObj.imageSrc})},t.submitTheEditForm=function(e){var a=h.database().ref(e),n=t.state,c=n.firstName,o=n.lastName,l=n.contactMain,r=n.company,i=n.contactedVia,m=n.lastContacted,s=n.imageSrc,d={};d.firstName=c,d.lastName=o,d.contactMain=l,d.company=r,d.contactedVia=i,d.lastContacted=m,d.imageSrc=s,a.set(d),t.setState({editContactForm:""}),t.resetState()},t.state={contacts:[],firstName:"",lastName:"",contactMain:"",company:"",contactedVia:"",lastContacted:"",imageSrc:"http://placekitten.com/200/200",displayForm:!1,formError:!1,editContactForm:""},t}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;h.database().ref().on("value",(function(e){var a=e.val(),n=[];for(var c in a){var o={contactId:c,contactObj:a[c]};n.push(o)}t.setState({contacts:n})}))}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"wrapper"},c.a.createElement(b,null),c.a.createElement("main",null,c.a.createElement("label",{className:"sortLabel"},"Sort by:"),c.a.createElement("button",{className:"sortButton",id:"lastContacted",onClick:this.clickSort},"Last Contacted"),c.a.createElement("button",{className:"sortButton",id:"lastName",onClick:this.clickSort},"Last Name"),c.a.createElement("button",{className:"sortButton",id:"company",onClick:this.clickSort},"Company"),c.a.createElement("button",{className:"newAddy",onClick:this.handleClickMainForm},this.state.displayForm?c.a.createElement("i",{className:"fas fa-times-circle"}):c.a.createElement("i",{className:"fas fa-plus-circle"})),this.state.displayForm?c.a.createElement(N,{addContact:this.formSubmit,inputChange:this.inputChange,errorMessage:this.state.formError}):null,c.a.createElement("ul",null,this.state.contacts.map((function(e,a){var n=e.contactObj,o=n.firstName,l=n.lastName,r=n.contactMain,i=n.company,m=n.contactedVia,s=n.lastContacted,d=n.imageSrc;return e.contactId===t.state.editContactForm?c.a.createElement("li",{key:e.contactId},c.a.createElement(y,{firstName:t.state.firstName,lastName:t.state.lastName,contactMain:t.state.contactMain,company:t.state.company,contactedVia:t.state.contactedVia,lastContacted:t.state.lastContacted,editSubmit:t.submitTheEditForm,editChange:t.inputChange,editId:e.contactId,imageSrc:t.state.imageSrc})):c.a.createElement("li",{key:e.contactId},c.a.createElement(C,{firstName:o,lastName:l,contactMain:r,company:i,contactedVia:m,lastContacted:s,imageSrc:d,buttonId:e.contactId,editIt:t.clickTheEditButton}))})))),c.a.createElement("footer",null,c.a.createElement("p",null,c.a.createElement("i",{className:"far fa-copyright"})," 2019 Lynsey O'Donnell")))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b30b7cf4.chunk.js.map