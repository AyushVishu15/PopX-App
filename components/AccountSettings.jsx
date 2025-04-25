const AccountSettings = ({ setPage }) => (
    <div className="p-6 text-left">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h1>
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
          <span className="text-gray-600 text-xl">📷📷</span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800 uppercase">AYUSH</h2>
          <p className="text-gray-600 uppercase">Ayushprajapati148@Gmail.Com</p>
        </div>
      </div>
      <p className="text-gray-600 capitalize">
      Built by a Coder Alchemist – Turning Code into Gold! 🧙‍♂️
      </p>
      <div className="mt-4 border-t border-gray-300 pt-4">
        <button onClick={() => setPage('home')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg w-full hover:bg-gray-300">Back to Home</button>
      </div>
    </div>
  );