import React, { useState } from "react";

const Dashboard = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen w-[1350px]">
      {/* Search Bar */}
      <div className="flex justify-between items-center bg-white p-4 shadow rounded-md">
        <input
          type="text"
          placeholder="Job title, keyword, company"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <img
          src="Avatar.webp"
          alt="Profile"
          className="rounded-full w-10 h-10 ml-4 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setIsFullScreen(true)}
        />
      </div>

      {/* Full-Screen Avatar Modal */}
      {isFullScreen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setIsFullScreen(false)}
        >
          <img
            src="Avatar.webp"
            alt="Profile Fullscreen"
            className="w-96 h-96 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Profile Section */}
      <div className="mt-6 bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-semibold">Hello, Esther Howard</h2>
        <p className="text-gray-600">Here is your daily activities and job alerts</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-blue-100 p-4 rounded-md text-center">
            <h3 className="text-2xl font-bold">589</h3>
            <p>Applied Jobs</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md text-center">
            <h3 className="text-2xl font-bold">238</h3>
            <p>Favorite Jobs</p>
          </div>
          <div className="bg-green-100 p-4 rounded-md text-center">
            <h3 className="text-2xl font-bold">574</h3>
            <p>Job Alerts</p>
          </div>
        </div>
      </div>

      {/* Profile Warning */}
      <div className="mt-6 bg-red-100 p-4 rounded-md shadow flex flex-col md:flex-row justify-between items-center">
        <p className="text-red-700 text-center md:text-left">
          Your profile editing is not completed. Complete your profile editing & build your custom Resume.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 md:mt-0">
          Edit Profile
        </button>
      </div>

      {/* Recently Applied Jobs */}
      <div className="mt-6 bg-white p-6 rounded-md shadow">
        <h3 className="text-lg font-semibold">Recently Applied</h3>

        <div className="mt-4 space-y-4">
          {["Networking Engineer", "Product Designer", "Junior Graphic Designer", "Visual Designer"].map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
              <div className="text-center md:text-left">
                <h4 className="font-semibold">{job}</h4>
                <p className="text-gray-500">$50k-80k/month</p>
              </div>
              <span className="text-green-600 mt-2 md:mt-0">✔ Active</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 md:mt-0">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
