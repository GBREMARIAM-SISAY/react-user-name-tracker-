import React, { useState } from "react";

import AddUser from "./components/user/AddUser";
import UsersLists from "./components/user/UsersList";

function App() {
  const [UsersList, setUSersList] = useState([]);

  const savedUserDataHandler = (uname, uage) => {
    setUSersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onSave={savedUserDataHandler} />
      <UsersLists users={UsersList} />
    </React.Fragment>
  );
}

export default App;
