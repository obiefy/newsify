import React from 'react';
import Header from '@/components/layout/header';
import Link from 'next/link';

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div >
      <Header headers={
        <Link href="/feed" className="px-4 py-1.5 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-lg lg:mt-0 hover:bg-gray-100">Feed</Link>
      }/>
      <main>{children}</main>
  </div>
  );
}