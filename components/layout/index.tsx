import React from 'react';
import Header from '@/components/layout/header';

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div >
      <Header />
      <main>{children}</main>
  </div>
  );
}