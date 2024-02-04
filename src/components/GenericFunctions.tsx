import React from "react";
import { primitiveIsDuplicatedInArray } from "../utils/reusableFunctions";

const GenericFunctions = () => {
  const myNumberArray = [4, 5, 5, 1, 6, 3];
  const isThreeDuplicated = primitiveIsDuplicatedInArray(3, myNumberArray);
  const isFiveDuplicated = primitiveIsDuplicatedInArray(5, myNumberArray);

  const myStringArray = ["z", "b", "b", "a", "f", "d"];
  const isBDuplicated = primitiveIsDuplicatedInArray("b", myStringArray);
  const isFDuplicated = primitiveIsDuplicatedInArray("f", myStringArray);

  return (
    <div>
      <div>My number array: {`[${myNumberArray}]`}</div>
      <div>Is 3 duplicated? {`${isThreeDuplicated}`}</div>
      <div>Is 5 duplicated? {`${isFiveDuplicated}`}</div>
      <br />
      <br />
      <div>My string array: {`[${myStringArray}]`}</div>
      <div>Is b duplicated? {`${isBDuplicated}`}</div>
      <div>Is f duplicated? {`${isFDuplicated}`}</div>
    </div>
  );
};

export default GenericFunctions;
