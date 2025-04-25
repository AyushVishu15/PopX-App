const Home = ({ setPage, isLoggedIn, onLogout }) => (
  <div className="p-6 text-center">
    <h1 className="text-2xl font-bold text-gray-800">{isLoggedIn ? 'Hello PopX User' : 'Welcome to PopX'}</h1>
    <p className="text-gray-600 mt-2">{isLoggedIn ? 'You are logged in!' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
    {!isLoggedIn && (
      <>
        <button onClick={() => setPage('create')} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700">Create Account</button>
        <button onClick={() => setPage('signin')} className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700">Already Registered? Login</button>
      </>
    )}
    {isLoggedIn && (
      <>
        <button onClick={() => setPage('account-settings')} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700">Account Settings</button>
        <button onClick={onLogout} className="bottom-button bg-red-600 text-white px-6 py-2 rounded-lg mt-80 hover:bg-red-700">Logout</button>
      </>
    )}
  </div>
);