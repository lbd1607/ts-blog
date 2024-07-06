import React from "react";
import { ValueOf } from "../utils/reusableTypes";

enum Fruits {
  APPLE = "Apple",
  ORANGE = "Orange",
  BANANA = "Banana",
}

export const GenericFruitsFromEnumDropdown = () => {
  const fruitOptions = Object.entries(Fruits).map(([value, label]) => ({
    label: label,
    value: value,
  }));

  const [selectedFruit, setSelectedFruit] = React.useState(
    fruitOptions[0].value
  );

  const onSelectFruit = (selectedFruit: ValueOf<Fruits>) => {
    const selectedOption = fruitOptions.find(
      (fruit) => fruit.value === selectedFruit
    );
    if (selectedOption) {
      setSelectedFruit(selectedOption?.value);
    }
  };

  //Using ValueOf allows us to perform comparisons with enum values
  console.log(selectedFruit === Fruits.APPLE);

  return (
    <>
      <div>Selected fruit from enum: {selectedFruit}</div>
      <select onChange={(e) => onSelectFruit(e.target.value)}>
        {fruitOptions.map((fruit) => (
          <option key={fruit.value} value={fruit.value}>
            {fruit.label}
          </option>
        ))}
      </select>
    </>
  );
};
