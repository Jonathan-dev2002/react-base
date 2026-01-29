import { useState } from "react";

interface LoginData {
  username: string;
  pass: string;
}

interface LoginProps {
  onLoginSubmit: (data: LoginData) => void;
}

export default function LoginForm({ onLoginSubmit }: LoginProps) {
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    //กันหน้าเว็บ refresh
    e.preventDefault();
    onLoginSubmit({ username, pass });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid blue", padding: 20 }}
    >
      <input onChange={(e) => setUsername(e.target.value)} placeholder="User" />
      <input onChange={(e) => setPass(e.target.value)} placeholder="Pass" />
      <button type="submit">Login</button>
    </form>
  );
}
