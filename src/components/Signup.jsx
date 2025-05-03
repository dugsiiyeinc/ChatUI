// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { signUp } from '../lib/auth';
// import { useAuth } from '../context/AuthContext';

// const SignUpPage = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       await signUp(email, password, username);

//       // Navigate to dashboard after successful signup
//       navigate('/signin');
//     } catch (error) {
//       console.error(error);
//       setError(error.message || "Failed to create account. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Create an Account</h1>
//           <p className="text-gray-600 mt-2">Join and start your journey</p>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
//               placeholder="your@email.com"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
//               placeholder="username"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               minLength={6}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
//               placeholder="••••••••"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 disabled:bg-orange-400"
//           >
//             {isLoading ? "Creating Account..." : "Create Account"}
//           </button>
//         </form>

//         <p className="text-sm text-center mt-6 text-gray-600">
//           Already have an account?{' '}
//           <Link to="/signin" className="text-orange-600 font-semibold hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
