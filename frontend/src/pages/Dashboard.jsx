import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or token if stored
    localStorage.removeItem('token'); // or sessionStorage
    alert('Logged out successfully.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-700 text-lg mb-6">
          Here you can upload medical images for classification, view predictions, and manage your profile.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-blue-100 rounded p-4">
            <h2 className="text-xl font-semibold text-blue-700">Upload Image</h2>
            <p className="text-sm text-gray-600 mt-1">Upload and classify medical images using our AI model.</p>
            <button
              onClick={() => navigate('/')}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go to Upload
            </button>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h2 className="text-xl font-semibold text-green-700">Profile</h2>
            <p className="text-sm text-gray-600 mt-1">View your details and manage account info.</p>
            <button
              onClick={() => alert('Profile page coming soon')}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              View Profile
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
