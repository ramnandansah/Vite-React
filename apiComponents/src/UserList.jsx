import { useState, useEffect } from "react";
import { getUsers } from "./api.fetch.js";
// import { getUsers } from "./api.async.js";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const res = await getUsers();
      setUsers(res);
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  // const getUserData = () => {
  //   try {
  //     const res = getUsers()
  //     .then((res) => res.json())
  //     setUsers(res);
  //     console.log({ res }); 
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="p-4 my-2 mx-4 border rounded-sm">
          {user.id}. {user.name} <br />
          Email: {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;

//Recorded lacture 14/08/ 32:20;
