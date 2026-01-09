"use client";

import api from "@/lib/api";
import { ApiErrorResponse, RegisterRequest, RegisterResponse } from "@/types/auth/auth";
import axios from "axios";
import { useState } from "react";
import CameraCapture from "./_components/Camerca";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);


   const handlePhotoCapture = (imageDataUrl: string) => {
    setPhoto(imageDataUrl);
  };
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const payload: RegisterRequest = {
    name,
    email,
  };

  try {
    const res = await api.post<RegisterResponse>(
      "/api/register",
      payload
    );
console.log("okay na")
    setMessage(res.data.message);
  } catch (error: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      setMessage(error.response?.data?.message ?? "Registration failed");
    } else {
      setMessage("Unexpected error occurred");
    }
  }
};


  return (
    <><div style={{ maxWidth: 400, margin: "auto" }}>
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
              <input
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required />

              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required />

              <button type="submit">Register</button>
          </form>

          {message && <p>{message}</p>}
      </div>
      <CameraCapture onCapture={handlePhotoCapture} />
      {photo && (
        <div>
          <h3>Preview:</h3>
          <img src={photo} alt="Captured photo" style={{ width: 200 }} />
        </div>
      )}
      </>
  );
};

export default Page;
