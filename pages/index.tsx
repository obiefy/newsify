import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import ArticlesList from '@/components/articles/list';
import Article from '@/interfaces/article';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useArticles } from '@/hooks/useArticles';
import Loading from '@/components/articles/loading';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { articles = [], error, isLoading } = useArticles();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 font-bold text-3xl">News</h2>
        </div>
        {isLoading && <Loading /> }
        <ArticlesList articles={articles} />
      </section>
    </Layout>
  );
}