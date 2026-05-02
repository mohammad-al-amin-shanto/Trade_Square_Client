import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email);
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10">
      <input
        type="email"
        placeholder="Email"
        className="border w-full p-2 mb-4"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <button className="bg-primary text-white w-full py-2">
        Login
      </button>
    </form>
  );
};

export default Login;