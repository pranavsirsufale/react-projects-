import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFocus = (field) => {
    setFocused((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setFocused((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let valid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to an API)
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className={`mt-1 p-3 w-full border-2 rounded-lg transition-all duration-300 
                          ${focused.name ? 'border-blue-500' : 'border-gray-300'} 
                          ${errors.name && !focused.name ? 'border-red-500' : ''}`}
            />
            {errors.name && !focused.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className={`mt-1 p-3 w-full border-2 rounded-lg transition-all duration-300 
                          ${focused.email ? 'border-blue-500' : 'border-gray-300'} 
                          ${errors.email && !focused.email ? 'border-red-500' : ''}`}
            />
            {errors.email && !focused.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              rows="4"
              className={`mt-1 p-3 w-full border-2 rounded-lg transition-all duration-300 
                          ${focused.message ? 'border-blue-500' : 'border-gray-300'} 
                          ${errors.message && !focused.message ? 'border-red-500' : ''}`}
            />
            {errors.message && !focused.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;