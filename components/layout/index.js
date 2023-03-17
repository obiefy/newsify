import React from 'react';
import Header from '@/components/layout/header';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';


export default function Layout({ children }) {
  return (
    <div >
      <Header />
      <main>{children}</main>
  </div>
  );
}