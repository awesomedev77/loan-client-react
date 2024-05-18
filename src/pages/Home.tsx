import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuthStore} from '../store/authStore';
import api from '../api/axios';

const Home: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  console.log(user);

  const test = () =>{
    api.get('profile').then((res)=>{
        console.log(res);
    })
  }
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome, {user?.email || 'User'}</h1>
      {/* Display user information */}
      <div className="mt-4">
        <p>Email: {user?.email}</p>
      </div>
      <button onClick={()=>{logout()}}>logout</button>
      <button type="button" onClick={test}>test</button>
    </div>
  );
};

export default Home;