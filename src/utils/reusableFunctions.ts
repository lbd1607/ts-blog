import React from "react";

/**
 * @description Determine if a given primitive value is duplicated in an array
 * @example
 * const myNumberArray = [4, 5, 5, 1, 6, 3];
 * primitiveIsDuplicatedInArray(3, myNumberArray); //false
 * primitiveIsDuplicatedInArray(5, myNumberArray); //true
 *
 * const myStringArray = ['z', 'b', 'b', 'a', 'f', 'd'];
 * const isADuplicated = primitiveIsDuplicatedInArray(3, myStringArray); //Throws a typescript error because 3 is a number
 */
export const primitiveIsDuplicatedInArray = <T>(givenValue: T, arr: T[]) =>
  arr.filter((value) => value === givenValue).length > 1;
