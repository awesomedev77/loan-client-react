// src/pages/Signup.tsx
import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, isNotEmpty } from '../utils/validators';
import AuthHeader from '../components/AuthHeader';
import Input from '../components/Input';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ email: '', fullName: '', password: '', confirmPassword: '', description: '' });
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    let errors = { email: '', fullName: '', password: '', confirmPassword: '', description: '' };

    if (!isNotEmpty(email)) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
      valid = false;
    }
    if (!isNotEmpty(fullName)) {
      errors.fullName = 'Full name is required';
      valid = false;
    }
    if (!isNotEmpty(password)) {
      errors.password = 'Password is required';
      valid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }
    if (!isNotEmpty(description)) {
      errors.description = 'Description is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('/auth/signup', { email, fullName, description, password });
      const { token } = response.data;
      Signup(token);
      alert('Signup successful');
      navigate('/login');
    } catch (error) {
      alert('Failed to signup');
    }
  };

  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <AuthHeader heading='Signup to create an account' paragraph='Already have an account? ' linkName='Login' linkUrl='/login' />
          <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
            <div className="mb-4">
              <Input
                type="text"
                value={email}
                error={!!errors.email}
                placeholder='Email address'
                handleChange={(e) => {
                  setEmail(e.target.value);
                  if (!isNotEmpty(e.target.value)) {
                    setErrors({ ...errors, email: 'Email is required' })
                  } else if (!isValidEmail(e.target.value)) {
                    setErrors({ ...errors, email: 'Invalid email format' })
                  } else {
                    setErrors({ ...errors, email: '' })
                  }
                }}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <Input
                type="text"
                value={fullName}
                error={!!errors.fullName}
                placeholder='Full Name'
                handleChange={(e) => {
                  setFullName(e.target.value);
                  if (!isNotEmpty(e.target.value)) {
                    setErrors({ ...errors, fullName: 'Full Name is required' })
                  } else {
                    setErrors({ ...errors, fullName: '' })
                  }
                }}
              />
              {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
            </div>
            <div className="mb-4">
              <Input
                type="text"
                value={description}
                error={!!errors.description}
                placeholder='Description'
                handleChange={(e) => {
                  setDescription(e.target.value);
                  if (!isNotEmpty(e.target.value)) {
                    setErrors({ ...errors, description: 'Description is required' })
                  } else {
                    setErrors({ ...errors, description: '' })
                  }
                }}
              />
              {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                value={password}
                placeholder='Password'
                error={!!errors.password}
                handleChange={(e) => {
                  setPassword(e.target.value);
                  let newPassword = ""
                  if (!isNotEmpty(e.target.value)) {
                    newPassword = 'Password is required';
                  } else {
                    newPassword = '';
                  }

                  if (e.target.value !== confirmPassword) {
                    setErrors({ ...errors, password: newPassword, confirmPassword: 'Passwords do not match' })
                  } else {
                    setErrors({ ...errors, password: newPassword, confirmPassword: '' })
                  }
                }}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                value={confirmPassword}
                placeholder='Confirm Password'
                error={!!errors.confirmPassword}
                handleChange={(e) => {
                  setConfirmPassword(e.target.value)
                  if (password !== e.target.value) {
                    setErrors({ ...errors, confirmPassword: 'Passwords do not match' })
                  } else {
                    setErrors({ ...errors, confirmPassword: '' })
                  }
                }}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;