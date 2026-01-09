// "use client";

// import { useState } from "react";
// import axios from "axios";
// import api from "@/lib/api";

// // TypeScript interface for the User
// interface User {
//   id: number;
//   name: string;
// }

// // Optional error interface
// interface ApiError {
//   message: string;
// }

// const GetUser = () => {
//   const [userId, setUserId] = useState<number>(1);
//   const [user, setUser] = useState<User | null>(null);
//   const [error, setError] = useState<string>("");

//   const fetchUser = async () => {
//     try {
//       setError("");
//       const res = await api.get<User>(`/api/users/${userId}`);
//       setUser(res.data);
//     } catch (err: unknown) {
//       if (axios.isAxiosError<ApiError>(err)) {
//         setError(err.response?.data?.message || "Failed to fetch user");
//       } else {
//         setError("Unexpected error");
//       }
//       setUser(null);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "auto" }}>
//       <h2>Get User by ID</h2>

//       <input
//         type="number"
//         value={userId}
//         onChange={(e) => setUserId(Number(e.target.value))}
//         placeholder="Enter user ID"
//       />
//       <button onClick={fetchUser}>Fetch User</button>

//       {user && (
//         <div style={{ marginTop: 20 }}>
//           <p><strong>ID:</strong> {user.id}</p>
//           <p><strong>Name:</strong> {user.name}</p>
//         </div>
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default GetUser;
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserSelect = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | "">("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>("http://localhost:3002/api/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(Number(e.target.value));
  };

  const selectedUser = users.find((u) => u.id === selectedUserId);

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Select a User</h2>

      <select value={selectedUserId} onChange={handleChange}>
        <option value="">-- Select user --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <div style={{ marginTop: 20 }}>
          <p><strong>ID:</strong> {selectedUser.id}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserSelect;

