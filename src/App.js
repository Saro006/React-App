import { useState } from "react";
import AddUserForm from "./Forms/AddUserForm";
import UserTable from "./tables/UserTable";
import EditUserform from "./Forms/EditUser.js";


function App() {

  const usersData = [
    { id: 1, name: 'saro', username: 'sk' },
    { id: 2, name: 'saran', username: 'ss' },
    { id: 3, name: 'viki', username: 'kmcv' },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])

  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false);

  }

  const [users, setUsers] = useState(usersData);
  const [Editing, setEditing] = useState(false);


  const initaialFormState = { id: null, name: "", username: "" };

  const [currentUser, setcurrentUser] = useState(initaialFormState);
  const editRow = (user) => {
    setEditing(true);
    setcurrentUser({ id: user.id, name: user.name, username: user.username })

  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))

  }
  return (
    <div className="container">
      <h1>CRUD app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {Editing ?
            (<div>
              <h2>Edit user</h2>
              <EditUserform
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser} />
            </div>) : (
              
              <div>

                <h2>Add User</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )

          }
        </div>
        <div className="flex-large">
          <h2>view User </h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
