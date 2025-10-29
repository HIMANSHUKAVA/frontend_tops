import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Fectchdeta() {

    const [deta, setdeta] = useState([]);

    useEffect(() => {



        axios
        .get(`http://localhost:5002/fetch`)
        .then((Response)=>{
            setdeta(Response.data)
        })
        .catch((error)=>{
            console.log(error);

        })


    }, [deta])

  return (
    <>
    <table border={1}>
          <thead>
            <tr>
                <th>name</th>
                <th>email</th>
            </tr>

          </thead>


            <tbody>
                    {deta.map((res) => (
      <tr key={res.id}>
        <td>{res.name}</td>
        <td>{res.email}</td>
      </tr>
    ))}
            </tbody>
    </table>
    </>
  )
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA97HoTdKmTFD2EbvtMjuTpf5VqgvoclRw",
//   authDomain: "react-firebase-fe0ae.firebaseapp.com",
//   projectId: "react-firebase-fe0ae",
//   storageBucket: "react-firebase-fe0ae.firebasestorage.app",
//   messagingSenderId: "459160849819",
//   appId: "1:459160849819:web:529ce5a4d9b3448ff0653e",
//   measurementId: "G-TJ3K1CXQN9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
