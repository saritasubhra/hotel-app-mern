import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-md mx-auto p-8 rounded-md shadow-2xl">
      <form className="w-full space-y-4">
        <h1 className="text-3xl font-bold">Sign in to your account</h1>

        <div>
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="input"
          />
        </div>

        <div>
          <label htmlFor="password" className="font-semibold text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            className="input"
          />
        </div>

        <button
          type="submit"
          className="w-full font-semibold bg-violet-400 hover:bg-violet-500 duration-300 py-3 rounded-md text-white mt-2 cursor-pointer"
        >
          Sign in
        </button>
      </form>

      <p className="pt-8 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-violet-400 hover:text-violet-500 hover:border-b"
        >
          Sign up now
        </Link>
      </p>
    </div>
  );
}

export default Login;
