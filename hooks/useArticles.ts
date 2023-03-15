
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useArticles = () => {
    const { data, error, isLoading } = useSWR('http://127.0.0.1:8000/', fetcher);
    
    return {
      articles: data?.data,
      error,
      isLoading,
    }
}
