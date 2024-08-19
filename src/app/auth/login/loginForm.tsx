'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import Image from "next/image";
import Button from "@/components/Button";
import { useAuth } from '@/hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password });
      setIsAuthenticated(true);
      router.push("/"); // Redirige al usuario después de iniciar sesión
    } catch (err: any) {
      setError("Login failed. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="w-full px-8 md:px-32 lg:px-24">
      <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-2xl p-5">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
        
        {error && <p className="text-red-600">{error}</p>}
        
        <label className="input input-bordered flex items-center gap-2 mb-8">
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

        <label className="input input-bordered flex items-center gap-2 mb-12">
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

        <Button type="submit">Login</Button>

        <div className="flex justify-between mt-4">
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password?</span>
          <a href="/auth/signup" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Do not have an account yet?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
