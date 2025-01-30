import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="max-w-sm sm:max-w-md mx-auto p-8 rounded-md shadow-2xl">
      <form className="w-full space-y-4">
        <h1 className="text-3xl font-bold">Create your account</h1>
        <div>
          <label htmlFor="fullname" className="label">
            Full name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            id="fullname"
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
            type="email"
            placeholder="johndoe@gmail.com"
            id="email"
            name="email"
            required
            className="input"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            placeholder="4242424242"
            id="phone"
            name="phone"
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

        <div>
          <label htmlFor="passwordConfirm" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="********"
            id="passwordConfirm"
            name="passwordConfirm"
            required
            className="input"
          />
        </div>

        <button type="submit" className="btn-violet">
          Create Account
        </button>
      </form>

      <p className="pt-8 text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-violet-400 hover:text-violet-500 hover:border-b"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}

export default Signup;
