import React from 'react';

export default function Settings() {
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Settings</h1>
        <p className="text-gray-600 mb-6">
          Configure how your dashboard and map behave. These features are placeholders and can be made dynamic later.
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Notification Settings</h2>
            <p className="text-gray-600">Manage email alerts for traffic events or threshold exceedances.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">Map Layer Preferences</h2>
            <p className="text-gray-600">Toggle visibility for traffic density, incidents, or camera feeds.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-700">User Profile</h2>
            <p className="text-gray-600">Change your email, password, or account preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
