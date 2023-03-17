import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout} = useAuth({ middleware: 'guest', redirectIfAuthenticated: false });

  return (
    <nav className="relative bg-white">
      <div className="container px-4 py-6 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link href='/' className="text-2xl font-medium text-sky-500 transition-colors flex items-center duration-300 transform hover:text-sky-400" >
                <Logo />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                {!isOpen &&
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M4 8h16M4 16h16" />
                  </svg>
                }
                {isOpen &&
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                }
              </button>
            </div>
          </div>

          <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center">
              <Link href='/' className={`px-4 py-1.5 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-lg lg:mt-0 hover:bg-gray-100 ${pathname === '/' ? 'bg-gray-100' : ''}`}>News</Link>
              {
                !user &&
                <Link href="/register" className={`px-4 py-1.5 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-lg lg:mt-0 hover:bg-gray-100 ${pathname === '/register' || pathname === '/login' ? 'bg-gray-100' : ''}`}>Sign Up</Link>
              }
              {
                user &&
                <>
                  <Link href="/feed" className={`px-4 py-1.5 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-lg lg:mt-0 hover:bg-gray-100 ${pathname === '/feed' ? 'bg-gray-100' : ''}`}>Feed</Link>
                  <button onClick={logout} className="px-4 py-1.5 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-lg lg:mt-0 hover:bg-gray-100">Logout ({user?.name})</button>
                </>
              }
            </div>
          </div>
        </div>
      </div >
    </nav >
  );
}