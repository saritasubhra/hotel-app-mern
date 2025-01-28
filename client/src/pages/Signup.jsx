import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="max-w-md mx-auto p-8 rounded-md shadow-2xl">
      <form className="w-full space-y-4">
        <h1 className="text-3xl font-bold">Create your account</h1>
        <div>
          <label htmlFor="fullname" className="label">
            Full name
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            required
            className="input"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
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
          <label htmlFor="password" className="label">
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

        <div>
          <label htmlFor="passwordConfirm" className="label">
            Confirm Password
          </label>
          <input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            required
            className="input"
          />
        </div>

        <button
          type="submit"
          className="w-full font-semibold bg-violet-400 hover:bg-violet-500 duration-300 py-3 rounded-md text-white mt-2 cursor-pointer"
        >
          Create Account
        </button>
      </form>

      <p className="pt-8 text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-violet-400 hover:text-violet-500 hover:border-b"
        >
          Sign in here
        </Link>
      </p>
    </div>
  );
}

export default Signup;
