const App = () => {
  const [page, setPage] = React.useState('home');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage('home'); // Navigate to Home after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('signin'); // Navigate to SignIn after logout
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} isLoggedIn={isLoggedIn} onLogout={handleLogout} />;
      case 'signin':
        return <SignIn setPage={setPage} onLogin={handleLogin} />;
      case 'create':
        return <CreateAccount setPage={setPage} />;
      case 'account-settings':
        return <AccountSettings setPage={setPage} />;
      default:
        return <Home setPage={setPage} isLoggedIn={isLoggedIn} onLogout={handleLogout} />;
    }
  };

  return (
    <div className="min-h-full">
      {renderPage()}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));