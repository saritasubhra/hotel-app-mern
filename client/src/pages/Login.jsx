import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-sm sm:max-w-md mx-auto p-8 rounded-md shadow-2xl">
      <form className="w-full space-y-4">
        <h1 className="text-3xl font-bold">Log in to your account</h1>

        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            id="email"
            name="email"
            required
            className="input"
          />
        </div>

        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
            className="input"
          />
        </div>

        <button type="submit" className="btn-violet">
          Log in
        </button>
      </form>

      <p className="pt-8 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-violet-400 hover:text-violet-500 hover:border-b"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
