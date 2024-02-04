import React from "react";
import { styled } from "styled-components";

//TODO: Illustrate in these example why this is important. For example, context + reducer, passing status state around, accessing values in other files, state management libs

//https://www.typescriptlang.org/docs/handbook/enums.html

//Constants, not assignable
//Every file this will be used in is ts
//Better type safety, easier to work with as types
enum Fruits {
  APPLE = "Apple",
  ORANGE = "Orange",
  BANANA = "Banana",
}

//Assignable if copied or `let` and not `as const`
//Part of codebase is still using js
//Types can be difficult to work with, even `as const`
const FruitsObject = {
  APPLE: "Apple",
  ORANGE: "Orange",
  BANANA: "Banana",
} as const;

//Creating a value for "unknown" here can help us catch weirdness from the API
type StatusStringUnion = "saved" | "saving" | "standby" | "error" | "unknown";

export const FruitsFromEnumDropdown = () => {
  type FruitOptionsFromEnum = {
    label: Fruits;
    value: keyof typeof Fruits;
  };

  const fruitOptions = Object.entries(Fruits).map(
    ([value, label]) =>
      ({
        label: label,
        value: value,
      } as FruitOptionsFromEnum)
  );

  const [selectedFruit, setSelectedFruit] = React.useState(
    fruitOptions[0].value
  );

  const onSelectFruit = (selectedFruit: FruitOptionsFromEnum["value"]) => {
    const selectedOption = fruitOptions.find(
      (fruit) => fruit.value === selectedFruit
    );
    if (selectedOption) {
      setSelectedFruit(selectedOption?.value);
    }
  };

  return (
    <>
      <div>Selected fruit from enum: {selectedFruit}</div>
      <select
        onChange={(e) =>
          onSelectFruit(e.target.value as FruitOptionsFromEnum["value"])
        }
      >
        {fruitOptions.map((fruit) => (
          <option key={fruit.value} value={fruit.value}>
            {fruit.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const FruitsFromObjectDropdown = () => {
  type FruitOptionsFromObject = {
    label: (typeof FruitsObject)[keyof typeof FruitsObject];
    value: keyof typeof FruitsObject;
  };

  const fruitOptions = Object.entries(FruitsObject).map(
    ([v, k]) =>
      ({
        label: k,
        value: v,
      } as FruitOptionsFromObject)
  );

  const [selectedFruit, setSelectedFruit] = React.useState(
    fruitOptions[0].value
  );

  const onSelectFruit = (selectedFruit: FruitOptionsFromObject["value"]) => {
    const selectedOption = fruitOptions.find(
      (fruit) => fruit.value === selectedFruit
    );
    if (selectedOption) {
      setSelectedFruit(selectedOption?.value);
    }
  };

  return (
    <>
      <div>Selected fruit from object: {selectedFruit}</div>
      <select
        onChange={(e) =>
          onSelectFruit(e.target.value as FruitOptionsFromObject["value"])
        }
      >
        {fruitOptions.map((fruit) => (
          <option key={fruit.value} value={fruit.value}>
            {fruit.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const FormStatus = () => {
  const [currentStatus, setCurrentStatus] =
    React.useState<StatusStringUnion>("unknown");

  return (
    <StatusRow>
      Status: <Label>{currentStatus}</Label>
      <Dot status={currentStatus} />
    </StatusRow>
  );
};

const StatusRow = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Label = styled.div`
  margin-left: 0.25rem;
  font-size: 12pt;
  font-weight: 600;
`;

const Dot = styled.div<{ status: StatusStringUnion }>`
  display: flex;
  justify-content: center;
  align-content: start;
  clip-path: circle(5px);
  width: 1rem;
  background: ${({ status }) => {
    switch (status) {
      case "saved":
        return "green";
      case "saving":
        return "yellow";
      case "error":
        return "red";
      case "standby":
        return "none";
      case "unknown":
        return "gray";
      default:
        return "gray";
    }
  }};
  margin-left: 0.25rem;
`;
