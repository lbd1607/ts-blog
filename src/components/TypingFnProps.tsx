import React from "react";

type DestructuredProps = {
  userName: string;
  userNamesArray: string[];
};

export const userNameIsDuplicatedDestructuredProps = (
  props: DestructuredProps
) => {
  const { userName, userNamesArray } = props;
  return userNamesArray.filter((value) => value === userName).length > 1;
};

export const userNameIsDuplicatedImplicitProps = (
  userName: string,
  userNamesArray: string[]
) => userNamesArray.filter((value) => value === userName).length > 1;

type ExplicitProps = {
  userName: string;
  userNamesArray: string[];
};

export const userNameIsDuplicatedExplicitProps = ({
  userName,
  userNamesArray,
}: ExplicitProps) =>
  userNamesArray.filter((value) => value === userName).length > 1;

export const TypingFnProps = () => {
  const users = [
    {
      id: 1654,
      firstName: "Jose",
      lastName: "Sanchez",
    },
    {
      id: 3297,
      firstName: "Bob",
      lastName: "Richards",
    },
    {
      id: 4572,
      firstName: "Janet",
      lastName: "Wong",
    },
    {
      id: 8725,
      firstName: "Janet",
      lastName: "Wong",
    },
  ];

  const userNamesArray = users.map(
    ({ firstName, lastName }) => `${firstName} ${lastName}`
  );

  const props = {
    userNamesArray,
    userName: "Janet Wong",
  };

  const isJanetDuplicatedDestructuredProps =
    userNameIsDuplicatedDestructuredProps(props);

  const isJanetDuplicatedImplicitProps = userNameIsDuplicatedImplicitProps(
    "Janet Wong",
    userNamesArray
  );

  const isJanetDuplicatedExplicitProps = userNameIsDuplicatedExplicitProps({
    userName: "Janet Wong",
    userNamesArray,
  });

  return (
    <div>
      <div>Is Janet duplicated? {`${isJanetDuplicatedDestructuredProps}`}</div>
      <br />
      <br />
      <div>Is Janet duplicated? {`${isJanetDuplicatedImplicitProps}`}</div>
      <br />
      <br />
      <div>Is Janet duplicated? {`${isJanetDuplicatedExplicitProps}`}</div>
    </div>
  );
};

export default TypingFnProps;
