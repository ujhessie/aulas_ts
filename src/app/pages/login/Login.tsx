import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')

  const handleEntrar = () => {
    console.log("handleClick");
  };

  return (
    <div>
      <form>
        <label htmlFor="">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ex: junin@gmail.com"
          />
        </label>

        <label htmlFor="">
          <span>Senha</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button onClick={handleEntrar} type="button">
          Entrar
        </button>
        <br/>
        <br/>

        <p>{email}</p>
        <p>{password}</p>
      </form>
    </div>
  );
};
