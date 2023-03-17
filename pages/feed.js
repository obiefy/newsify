import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import ArticlesList from '@/components/articles/list';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFeed } from '@/hooks/articles';
import { useAuth } from '@/hooks/auth';
import Loading from '@/components/articles/loading';
import { stringify } from 'querystring';

const inter = Inter({ subsets: ['latin'] })

export default function Feed() {
  const { user } = useAuth({ middleware: 'auth', redirectIfAuthenticated: '/login' });
  const { articles = [], error, isLoading } = useFeed();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 font-bold text-3xl">Your Feed</h2>
        </div>
        {isLoading && <Loading times={6}/> }
        {
          !isLoading && !articles.length && 
          <div className='text-3xl text-gray-600 mt-16'>No articles have been found!</div>}
        <ArticlesList articles={articles} />

        <ArticlesList articles={articles} />
      </section>
    </Layout>
  );
}