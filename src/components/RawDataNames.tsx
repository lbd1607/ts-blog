import React from "react";

//As it comes in from the API
//From UsersAPI: id, f_n, l_n, users
const rawUserData = [
  {
    id: 1654,
    f_n: "Jose",
    l_n: "Sanchez",
    users: true,
  },
  {
    id: 3297,
    f_n: "Bob",
    l_n: "Richards",
    users: false,
  },
  {
    id: 4572,
    f_n: "Janet",
    l_n: "Wong",
    users: true,
  },
];

/**
 * @type firstName: Raw `f_n`
 * @type lastName: Raw `l_n`
 * @type canEditUsers: Raw `users`
 */
type UserData = {
  id: number;
  firstName?: string; //Raw: f_n
  lastName?: string; //Raw: l_n
  canEditUsers?: boolean; //Raw: users
};

type UserDataInput = {
  firstName: string;
  lastName: string;
  canEditUsers: boolean;
};

const UsersList = ({ userData }: { userData: UserData[] }) => {
  return (
    <div>
      {userData.map((user) => (
        <div key={user.id}>
          <div>
            Name: {user.firstName} {user.lastName}
          </div>
          <div>Can edit users? {`${user.canEditUsers}`}</div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

const UsersPage = () => {
  //Resolve raw data values to values that we can use more easily
  //e.g. GraphQL
  const resolvedUserData = rawUserData.map((userData) => ({
    id: userData.id,
    firstName: userData.f_n ?? "",
    lastName: userData.l_n ?? "",
    canEditUsers: Boolean(userData.users),
  })) as UserData[];

  return <UsersList userData={resolvedUserData} />;
};

export default UsersPage;
