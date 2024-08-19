'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signup } from '@/lib/auth';
import Image from 'next/image';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username, email, password)
    setError('');

    try {
      console.log(username, email, password)
      const data = await signup({ username, email, password });
      console.log(data)
      console.log('Signup successful:', data);
      router.push('/auth/login'); // Redirige al usuario al login después de registrarse
    } catch (err: any) {
      setError('Signup failed. Please try again.');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="w-full px-8 md:px-32 lg:px-24">
      <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-2xl p-5">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Create an Account</h1>
        <p className="text-sm font-normal text-gray-600 mb-8">Join us today</p>

        {error && <p className="text-red-600">{error}</p>}

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <Image src="/icons/user.svg" alt="Username icon" width={16} height={16} />
          <input
            id="username"
            type="text"
            className="grow"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <Image src="/icons/email.svg" alt="Email icon" width={16} height={16} />
          <input
            id="email"
            type="email"
            className="grow"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-8">
          <Image src="/icons/lock.svg" alt="Lock icon" width={16} height={16} />
          <input
            id="password"
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
        >
          Sign Up
        </button>

        <div className="flex justify-between mt-4">
          <a href="/auth/login" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
