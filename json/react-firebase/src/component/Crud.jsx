import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Crud() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const usersCollection = collection(db, "users");

  // Create (Add Data)
  const addUser = async () => {
    if (!name || !age) return alert("Fill both fields");
    await addDoc(usersCollection, { name, age: Number(age) });
    setName("");
    setAge("");
    getUsers(); // refresh
  };

  // Read (Get Data)
  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Update
  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);
    const newAge = prompt("Enter new age:");
    if (newAge) await updateDoc(userDoc, { age: Number(newAge) });
    getUsers();
  };

  // Delete
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔥 Firebase CRUD Example</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.age} years
            <button onClick={() => updateUser(u.id)}>Edit</button>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
