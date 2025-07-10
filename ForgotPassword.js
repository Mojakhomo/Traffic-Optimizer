import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-10 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Reset Password</h2>
        <p className="text-sm text-gray-300 text-center mb-8">
          Enter your email and we’ll send you instructions to reset your password.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center text-green-400 text-sm">
            ✅ If the email exists, a reset link has been sent!
            <br />
            Redirecting to login...
          </div>
        )}

        <p className="text-sm text-center mt-6 text-gray-300">
          Remembered your password?{' '}
          <button onClick={() => navigate('/')} className="text-blue-400 hover:underline">
            Go Back to Login
          </button>
        </p>
      </div>
    </div>
  );
}
