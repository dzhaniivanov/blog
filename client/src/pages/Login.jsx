import { Link } from "react-router-dom";

const Login = () => {
  return <div className="auth">
    <h1>Login</h1>
    <form action="">
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
      <p>this is error</p>
      <span>Don't you have a account? <Link to="/register">Register</Link></span>
    </form>
  </div>;
};

export default Login;
