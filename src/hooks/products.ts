import { useEffect, useState } from 'react';
import type { IProduct } from '../model.ts';
import axios, { type AxiosError } from 'axios';

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        setError('');
        setLoading(true);
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (e: unknown) {
        console.log(e);
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }

    fetchProducts();
  }, []);
  return { loading, error, products, addProduct };
}
