import React from "react";
import "./App.css";
import ExplicitPropTypes from "./components/ExplicitPropTypes";
import GenericFunctions from "./components/GenericFunctions";
import { GenericFruitsFromEnumDropdown } from "./components/GenericTypes";
import {
  FruitsFromEnumDropdown,
  FruitsFromObjectDropdown,
  FormStatus,
} from "./components/HardcodedStrings";
import UsersPage from "./components/RawDataNames";
import TypingFnProps from "./components/TypingFnProps";

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
      <br />
      <br />
      <br />
      <br />
      <ExplicitPropTypes />
      <br />
      <br />
      <br />
      <br />
      <TypingFnProps />
    </div>
  );
}

export default App;
