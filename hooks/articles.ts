import useSWR from 'swr'
import { stringify } from 'querystring';
import Article from '@/interfaces/article';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useArticles = (filters: {}) => {
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/news?${stringify(filters)}`, fetcher);
    
    return {
      articles: data?.data,
      error,
      isLoading,
    }
}


export const useFilters = () => {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/filters`, fetcher);

  return {
    categories: data?.data?.categories,
    sources: data?.data?.sources,
    error,
    isLoading,
  }
}
