const CreateAccount = ({ setPage }) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'no',
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? (checked ? value : formData.isAgency) : value,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validateForm();
    if (Object.keys(tempErrors).length === 0) {
      console.log('Account created:', formData);
      setPage('signin'); // Navigate to SignIn after account creation
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <div className="page-content">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Create your PopX account</h1>
        <form onSubmit={handleSubmit} className="mt-4 text-left">
          <input
            className="w-full p-2 border rounded-lg text-purple-600"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          <input
            className="mt-2 w-full p-2 border rounded-lg text-purple-600"
            placeholder="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          <input
            className="mt-2 w-full p-2 border rounded-lg text-purple-600"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input
            className="mt-2 w-full p-2 border rounded-lg text-purple-600"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <input
            className="mt-2 w-full p-2 border rounded-lg text-purple-600"
            placeholder="Company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <div className="mt-2 flex justify-center">
            <label className="mr-2 text-gray-700">Are you an Agency?</label>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === 'yes'}
              onChange={handleChange}
              className="mr-1"
            /> Yes
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === 'no'}
              onChange={handleChange}
              className="ml-2 mr-1"
            /> No
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </div>
      <button onClick={() => setPage('home')} className="middle-button bg-gray-200 text-gray-800 px-6 py-2 rounded-lg mt-60">Home</button>
    </div>
  );
};