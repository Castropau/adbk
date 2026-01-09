"use client";

import { useState } from "react";
// import axios from "axios";
import api from "@/lib/api";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UpdateResponse {
  message: string;
  user: User;
}

const UpdateUser = () => {
  const [id, setId] = useState<number>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const updateUser = async () => {
    try {
      const res = await api.put<UpdateResponse>(
        `/api/users/${id}`,
        { name, email }
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Failed to update user");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Update User</h2>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
        placeholder="User ID"
      />

      <input
        placeholder="New name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="New email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={updateUser}>Update</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateUser;
