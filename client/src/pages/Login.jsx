import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Googleicon from "../assets/google-icon.png";
import Appleicon from "../assets/Apple-Logo.png";
import planmytaxlogo from "../assets/Plan My Tax.png";
import { auth, provider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Logged in:", user);
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Google login failed:", error.message);
      alert("Google login failed: " + error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-bl from-gray-900 to-black text-white flex-col justify-center items-center p-12">
        <img src={planmytaxlogo} alt="Logo" className="w-20 mb-4" />
        <h2 className="text-2xl font-bold text-center">
          One Platform to <span className="text-yellow-400">Streamline</span><br />
          All Product <span className="text-yellow-400">Analytics</span>
        </h2>
        <p className="mt-4 text-sm text-gray-400 text-center max-w-xs">
          Your revenue is set to grow by 20% next month. Your revenue is increase by next month with our campaign tools.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 bg-white justify-center items-center p-8">
        <div className="w-full max-w-md">
          <img src={planmytaxlogo} alt="Logo" className="w-12 mx-auto mb-6" />
          <h2 className="text-center text-xl font-semibold mb-1">Welcome back to Orion!</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Please enter your details to sign in to your account
          </p>

          {/* Social buttons */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <img src={Googleicon} alt="Google" className="w-5" /> Continue with Google
            </button>
            <button
              className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition"
              disabled
            >
              <img src={Appleicon} alt="Apple" className="w-5" /> Continue with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="text-center text-gray-400 my-4 text-sm">or sign in with</div>

          {/* Email form */}
          <form className="space-y-4" onSubmit={handleEmailLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              name="password"
              placeholder="minimum 8 characters"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-md hover:opacity-90 transition"
            >
              Sign In →
            </button>
          </form>

          {/* Forgot password */}
          <div className="text-center text-sm mt-4">
            <a href="/services/gst" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>

          {/* Sign up option */}
          <div className="text-center text-sm mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign Up</Link>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-400 mt-8">
            <span>© 2024 Orion</span> ·{' '}
            <a href="/services/gst" className="hover:underline">Privacy Policy</a> ·{' '}
            <a href="/services/gst" className="hover:underline">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
