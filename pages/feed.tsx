import { Inter } from 'next/font/google'
import Guest from '@/components/layout/guest'
import ArticlesList from '@/components/articles/list';
import Article from '@/interfaces/article';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useArticles, useFilters } from '@/hooks/articles';
import Loading from '@/components/articles/loading';
import { stringify } from 'querystring';

const inter = Inter({ subsets: ['latin'] })

export default function Feed() {
  const { query, push } = useRouter();
  const [keyword, setKeyword] = useState(query.keyword || '');
  const [date, setDate] = useState(query.date || '');
  const [category, setCategory] = useState(query.category || '');
  const [source, setSource] = useState(query.source || '');
  const { articles = [], error, isLoading } = useArticles(query);
  const { categories = [], sources = [] } = useFilters();

  const filter = (e) => {
    e.preventDefault();
    const filters = { keyword, date, category, source };

    push(`/?${stringify(filters)}`)
  }

  const reset = () => {
    setKeyword('');
    setDate('');
    setCategory('');
    setSource('');
    push(`/`)
  }

  return (
    <Guest>
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 font-bold text-3xl">News</h2>
        </div>
        <div className="rounded-lg px-4 py-4 my-4">
          <form onSubmit={filter} className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            <div className='lg:col-span-2'>
              <input id="keyword" name="keyword" placeholder="Search..." value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>
            <div>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                <option>Category</option>
                {categories.map((filter: string) => <option key={filter} value={filter}>{filter}</option>)}
              </select>
            </div>
            <div>
              <select value={source} onChange={(e) => setSource(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                <option>Source</option>
                {sources.map((filter: string) => <option key={filter} value={filter}>{filter}</option>)}
              </select>
            </div>
            <div>
              <input id="date" name="date" placeholder="Date..." value={date} onChange={(e) => setDate(e.target.value)} type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>
            <div>
              <button type='submit' className="mt-2 px-8 py-2.5 leading-5 text-white  duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Search</button>
              <button type='button' onClick={reset} className="mt-2 ml-2 px-8 py-2.5 leading-5 text-gray-700  duration-300 transform bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-300">Reset</button>
            </div>
          </form>
        </div>
        {isLoading && <Loading times={6}/> }
        {
          !isLoading && !articles.length && 
          <div className='text-3xl text-gray-600 mt-16'>No articles have been found!</div>}
        <ArticlesList articles={articles} />

        <ArticlesList articles={articles} />
      </section>
    </Guest>
  );
}