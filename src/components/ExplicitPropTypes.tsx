import React from "react";

type FormStatus = "saved" | "saving" | "standby" | "error" | "unknown";

type User = {
  id: number;
  firstName?: string;
  lastName?: string;
};

type DestructuringProps = {
  users: User[];
  formStatus: FormStatus;
};

const Destructuring = (props: DestructuringProps) => {
  const { users, formStatus } = props;

  return (
    <div>
      <div>Status: {formStatus}</div>
      {users.map((user) => (
        <div key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
};

type ExplicitProps = {
  users: User[];
  formStatus: FormStatus;
};

const Explicit = ({ users, formStatus }: ExplicitProps) => {
  return (
    <div>
      <div>Status: {formStatus}</div>
      {users.map((user) => (
        <div key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
};

const DifferentPropTypes = () => {
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
  ];

  const formStatus = "standby" as FormStatus;

  const props = {
    users,
    formStatus,
  };

  return (
    <div>
      <Destructuring {...props} />
      <br />
      <br />
      <Explicit users={users} formStatus={formStatus} />
      <br />
      <br />
    </div>
  );
};

export default DifferentPropTypes;
