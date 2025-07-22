import React, { useState, type FormEvent } from "react";
import axios from "axios";
import ButtonComponent from "./button";
import DynamicField from "./input";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://j5fbqlw4-3000.inc1.devtunnels.ms/auth/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      navigate("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Login failed");
    }
  };

  const responseGoogle = async (credentialResponse: any) => {
    try {
      console.log("Google token:", credentialResponse.credential);

      await axios.post(
        "https://j5fbqlw4-3000.inc1.devtunnels.ms/auth/google",
        { token: credentialResponse.credential },
        { withCredentials: true }
      );
      navigate("/dashboard");
    } catch (err) {
      console.error("Google login failed", err);
    }
  };

  const handleGithubLogin = () => {
    window.location.href = "https://j5fbqlw4-3000.inc1.devtunnels.ms/auth/github";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-800 text-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-5">
          <DynamicField
            type="text"
            label="Email"
            value={email}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setEmail(e.target.value)}
            textFieldProps={{
              type: "email",
              required: true,
              fullWidth: true,
            }}
          />

          <DynamicField
            type="text"
            label="Password"
            value={password}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPassword(e.target.value)}
            textFieldProps={{
              type: "password",
              required: true,
              fullWidth: true,
            }}
          />
          <br />
          <ButtonComponent text="Login" type="submit" />
          <br />
          <br />
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => console.log("Login Failed")}
            />
          </GoogleOAuthProvider>
          <button
            type="button"
            onClick={handleGithubLogin}
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            Login with GitHub
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
