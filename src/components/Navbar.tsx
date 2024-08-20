'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isAuthenticated, loading } = useAuth();
  const [initialCheck, setInitialCheck] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !loading && !initialCheck) {
      const currentPath = window.location.pathname;
      if (!isAuthenticated && !['/auth/login', '/auth/signup'].includes(currentPath)) {
        router.push("/auth/login");
      }
      setInitialCheck(true);
    }
  }, [loading, isAuthenticated, initialCheck, router]);

  if (loading) return null;

  const isSignupPage = typeof window !== 'undefined' && window.location.pathname === "/auth/signup";

  return (
      <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl font-bold">
            Seat Reservation
          </Link>
          <Link href="/products" className="btn btn-ghost">
            Products
          </Link>
        </div>
        <div className="flex-none space-x-4">
          {!isAuthenticated ? (
              <Link href={isSignupPage ? "/auth/login" : "/auth/signup"} className="btn btn-primary">
                {isSignupPage ? "Sign In" : "Sign Up"}
              </Link>
          ) : (
              <>
                <Link href="/cart" className="indicator">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </Link>
                <div className="dropdown dropdown-end">
                  <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full border-2 border-gray-200">
                      <Image
                          alt="User avatar"
                          src="/icons/user-avatar.webp"
                          width={40}
                          height={40}
                          className="rounded-full"
                      />
                    </div>
                  </button>
                  <ul
                      tabIndex={0}
                      className="dropdown-content menu menu-sm bg-base-100 rounded-box shadow-lg mt-3 w-52 p-2"
                  >
                    <li>
                      <Link href="/profile" className="justify-between">
                        Profile <span className="badge badge-secondary">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/settings">Settings</Link>
                    </li>
                    <li>
                      <button onClick={() => router.push("/auth/logout")}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
          )}
        </div>
      </nav>
  );
}