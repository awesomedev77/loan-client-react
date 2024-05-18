// src/pages/Signup.tsx
import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, isNotEmpty } from '../utils/validators';

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => {
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
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                            if (!isNotEmpty(e.target.value)) {
                                setErrors({ ...errors, fullName: 'Full Name is required' })
                            } else {
                                setErrors({ ...errors, fullName: '' })
                            }
                        }}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (!isNotEmpty(e.target.value)) {
                                setErrors({ ...errors, password: 'password is required' })
                            } if (e.target.value !== confirmPassword) {
                                setErrors({ ...errors, confirmPassword: 'Passwords do not match' })
                            } else {
                                setErrors({ ...errors, password: '' })
                            }
                        }}
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                            if (password !== e.target.value) {
                                setErrors({ ...errors, confirmPassword: 'Passwords do not match' })
                            } else {
                                setErrors({ ...errors, confirmPassword: '' })
                            }
                        }}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            if (!isNotEmpty(e.target.value)) {
                                setErrors({ ...errors, description: 'Description is required' })
                            } else {
                                setErrors({ ...errors, description: '' })
                            }
                        }}
                    />
                    {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
                </div>
                <button type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;