import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import Button from "./components/Button";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <FormField
          label="Nombre"
          type="text"
          placeholder="" />
        
        <FormField
          label="Email"
          type="email"
          placeholder="" />
        
        <FormField
          label="Contraseña"
          type="password"
          placeholder="" />
        
        <Button
          className="button is-success"
          label="Sign Up" />
        
      </div>
    );
  }
}

export default App;
