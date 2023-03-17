import useSWR from 'swr'
import { stringify } from 'querystring';
import { useState } from 'react';
import axios from '@/lib/axios';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useArticles = (filters) => {
    const { data, error, isLoading } = useSWR(`/api/news?${stringify(filters)}`, () => 
      axios
        .get(`/api/news?${stringify(filters)}`)
        .then(res => res.data)
        .catch(error => {
        }),
    );
    return {
      articles: data?.data,
      error,
      isLoading,
    }
}

export const useFeed = () => {
  const { data, error, isLoading } = useSWR('/api/feed', () => 
    axios
      .get('/api/feed')
      .then(res => res.data)
      .catch(error => {
      }),
  );
  
  return {
    articles: data?.data,
    error,
    isLoading,
  }
}


export const useFilters = () => {
  const { data, error, isLoading } = useSWR('/api/filters', () => 
    axios
      .get('/api/filters')
      .then(res => res.data)
      .catch(error => {
      }),
  );

  return {
    categories: data?.data?.categories,
    sources: data?.data?.sources,
    error,
    isLoading,
  }
}
