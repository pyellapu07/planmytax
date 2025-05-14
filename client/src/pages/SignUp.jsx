import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import planmytaxlogo from "../assets/Plan My Tax.png";

const SignUp = () => {
  const navigate = useNavigate();
  const db = getFirestore();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 3000);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      return setError('❌ Passwords do not match');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        createdAt: new Date()
      });

      showToast("✅ Account created! Redirecting...");
      setTimeout(() => navigate('/'), 2500);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-bl from-gray-900 to-black text-white flex-col justify-center items-center p-12">
        <img src={planmytaxlogo} alt="Logo" className="w-20 mb-4" />
        <h2 className="text-2xl font-bold text-center">
          One Platform to <span className="text-yellow-400">Streamline</span><br />
          All Product <span className="text-yellow-400">Analytics</span>
        </h2>
        <p className="mt-4 text-sm text-gray-400 text-center max-w-xs">
          Your revenue is set to grow by 20% next month. Increase it further using our campaign tools.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex w-full md:w-1/2 bg-white justify-center items-center p-8 relative">
        <div className="w-full max-w-md">
          <img src={planmytaxlogo} alt="Logo" className="w-12 mx-auto mb-6" />
          <h2 className="text-center text-xl font-semibold mb-1">Create your account</h2>
          <p className="text-center text-sm text-gray-500 mb-6">Join PlanMyTax by creating an account</p>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">Log In</Link>
          </div>

          <div className="text-center text-xs text-gray-400 mt-8">
            © 2024 PlanMyTax · <a href="/services/gst" className="hover:underline">Privacy Policy</a> ·{' '}
            <a href="/services/gst" className="hover:underline">Support</a>
          </div>
        </div>

        {/* Toast Snackbar */}
        {toast && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-md animate-bounce">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
