const SignIn = ({ setPage, onLogin }) => (
  <div className="page-content">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-800">Sign in to your PopX account</h1>
      <p className="text-gray-600 mt-2">Log In or Log Out – The Coder’s Dilemma! 😂</p>
      <input className="mt-4 w-full p-2 border rounded-lg text-purple-600" placeholder="Email address" />
      <input className="mt-2 w-full p-2 border rounded-lg text-purple-600" placeholder="Password" />
      <button onClick={onLogin} className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Login</button>
    </div>
    <button onClick={() => setPage('home')} className="middle-button bg-gray-200 text-gray-800 px-6 py-2 rounded-lg mt-80">Home</button>
  </div>
);