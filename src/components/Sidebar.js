import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  //Early Return pattern
  if(!isMenuOpen) return null;
  
  return (
    <aside className="w-64 h-screen border-r border-gray-200 px-4 py-4">
      
      {/* Main Menu */}
      <div className="space-y-2">

        {/* Home */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">🏠</span>
          <span>Home</span>
        </div>

        {/* Shorts */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">🎬</span>
          <span>Shorts</span>
        </div>

        {/* Subscriptions */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">📺</span>
          <span>Subscriptions</span>
        </div>

      </div>


      {/* You Section */}
      <div className="border-t border-gray-200 mt-4 pt-4">

        <h2 className="font-semibold px-3 mb-2">
          You
        </h2>

        {/* Your Channel */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">👤</span>
          <span>Your channel</span>
        </div>

        {/* History */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">🕐</span>
          <span>History</span>
        </div>

        {/* Playlists */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">📋</span>
          <span>Playlists</span>
        </div>

        {/* Watch Later */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">⏰</span>
          <span>Watch later</span>
        </div>

        {/* Liked Videos */}
        <div className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <span className="text-xl">👍</span>
          <span>Liked videos</span>
        </div>

      </div>


      {/* Subscriptions */}
      <div className="border-t border-gray-200 mt-4 pt-4">

        <h2 className="font-semibold px-3 mb-2">
          Subscriptions
        </h2>

        <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-red-500"></div>
          <span>CodeWithHarry</span>
        </div>

        <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-blue-500"></div>
          <span>Apna College</span>
        </div>

        <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-green-500"></div>
          <span>JavaScript Mastery</span>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;