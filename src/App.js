import React, { Component, createContext } from "react";
import "./App.css";
import { Toggle } from "Utilities";
import { Modal } from "Elements";
import User from './User';
import { UserContext } from './UserContext';

class UserProvider extends Component {
  state = {
    id: "120",
    name: "Arthur dayne",
    email: "arthurdawn@gmail.com"
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <User />
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still in modal</h1>
                </Modal>
              </>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
