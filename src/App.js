import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import './App.css';

function App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField />
        <FormField
          label=""
          type=""
          placeholder=""
        />
        <FormField />
        <CoolButton />


      </div>
    )

export default App;
