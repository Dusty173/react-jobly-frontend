import React from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({ username: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      history.push("/");
      console.error("Error while attempting login");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
