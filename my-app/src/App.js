import React, { Component } from 'react';
import './App.css';
import HomepageLayout from "./IndexPage";
import PasswordReinitForm from "./PassWordPage.js"


class App extends Component {
    render() {
        return (
            <div className="App">
              <HomepageLayout/>
            </div>
        );
    }
}




export default App;
