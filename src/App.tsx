import React from "react";
import "./App.css";
import GenericFunctions from "./components/GenericFunctions";
import { GenericFruitsFromEnumDropdown } from "./components/GenericTypes";
import {
  FruitsFromEnumDropdown,
  FruitsFromObjectDropdown,
  FormStatus,
} from "./components/HardcodedStrings";
import UsersPage from "./components/RawDataNames";

function App() {
  return (
    <div className="App">
      <FruitsFromEnumDropdown />
      <br />
      <br />
      <FruitsFromObjectDropdown />
      <br />
      <br />
      <FormStatus />
      <br />
      <br />
      <br />
      <br />
      <UsersPage />
      <br />
      <br />
      <br />
      <br />
      <GenericFruitsFromEnumDropdown />
      <br />
      <br />
      <br />
      <br />
      <GenericFunctions />
    </div>
  );
}

export default App;
