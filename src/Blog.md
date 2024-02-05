# 5 TypeScript Practices for Improved Maintainability

## 1. Name types similar to their raw data values or comment if you change them. Examples: Heavily abbreviated values, boolean props that conflict with other values

raw: f_n, new: firstName: string
raw: user, new: canEditUser: boolean
Example: RawDataNames

Why:

1. Makes code MUCH easier to read and understand for others and your future self
2. Makes usage explicit (esp for booleans)
3. You don’t have to constantly switch between code and API documentation or do a bunch of console logging

## 2. Replace all hardcoded strings with enums, objects, or string literal unions (depending on use cases)

Example: HardcodedStrings

Why:

1. Enables you to utilize types with code completion so you don’t have to guess
2. Makes components more reusable
3. Makes using these with reducers + context or state managers way easier
4. Makes passing state around between different functions and components simpler
5. Helps catch bad inputs/types
6. Can add catch types like “unknown” to use for defaults and catch bad input values like undefined or bad converted types

## 3. Make as much as you can optional or nullable (except inputs)

Example: RawDataNames
Why:

1. If your backend and frontend aren’t tightly coupled (i.e. you’re a fullstack dev), the contract between the two may allow values to not be documented correctly
2. Databases are weird. The bigger and more complicated they get, the higher probability you have of getting strange values like undefined and null where they shouldn’t be.
3. If your app accepts user inputs, validation edge cases on both the frontend and backend can result in strange values getting saved into databases
4. Requirements may change that later allow nullable values
5. Allows you to explicitly set default values if null/undefined to ensure that your string is always a string i.e. “”
6. Making some value required in inputs adds an extra layer of validation for user inputs, ensuring you aren’t sending bad values to the backend

## 4. Save common types in a types utils file using generics; use generics for reusable functions

Examples: types.ts, reusableFunctions.ts, GenericTypes, GenericFunctions

Why:

1. No need to manually type every usage
2. Easier to update types in one spot
3. Allows you to create reusable highly-complex types
4. Allows you to create types based on those from the libraries you use (ex. Relay)
5. Easier to document

## 5 Explicitly type function and component params / props instead of relying on implicit typing or destructuring

Examples: ExplicitPropTypes, TypingFnProps

Why:

1. Implicit typing requires inspecting the function, explicit typing gives you code completion
2. Allows you to create reusable types for multiple components
3. Allows you to use advanced ts like Partial and Omit
4. Much easier to trace props through multiple files
5. Makes functions easier to document
  