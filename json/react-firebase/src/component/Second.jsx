import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Crud() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false); //  Loading state
  const [error, setError] = useState(""); //  Error message state

  const usersCollection = collection(db, "users");

  //  Create (Add Data)
  const addUser = async () => {
    if (!name || !age) return alert("Fill both fields");
    try {
      setLoading(true);
      await addDoc(usersCollection, { name, age: Number(age) });
      setName("");
      setAge("");
      await getUsers();
    } catch (err) {
      console.error(err);
      setError("Error adding user. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  //  Read (Get Data)
  const getUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getDocs(usersCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users!");
    } finally {
      setLoading(false);
    }
  };

  // Update
  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);
    const newAge = prompt("Enter new age:");
    if (!newAge) return;
    try {
      setLoading(true);
      await updateDoc(userDoc, { age: Number(newAge) });
      await getUsers();
    } catch (err) {
      console.error(err);
      setError("Error updating user.");
    } finally {
      setLoading(false);
    }
  };

  //  Delete
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    try {
      setLoading(true);
      await deleteDoc(userDoc);
      await getUsers();
    } catch (err) {
      console.error(err);
      setError("Error deleting user.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔥 Firebase CRUD Example (with Loading & Error)</h2>

      {/* 🔹 Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 🔹 Loading Spinner */}
      {loading ? (
        <p>⏳ Loading...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
