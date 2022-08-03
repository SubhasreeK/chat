import React,{Component} from 'react';
import './App.css';
import {AddMessage} from './containers/AddMessage'
import {MessageList} from './containers/MessageList'; 
import {Sidebar} from './containers/Sidebar'; 
/**The application is a distributed application built using a Node.js server,
 *  and a browser client built in React, managing data using Redux and side effects with Redux-Saga.
Client-server communication is handled through WebSockets. */
class App extends Component{
  render(){
    return(
      <div id="container">
        <Sidebar/>
        <section id="main">
          <MessageList/>
          <AddMessage/>
        </section>
      </div>
    )
  }
}
export default App;
