import { type ChangeEvent, type FormEvent, useState } from 'react';
import type { IProduct } from '../model.ts';
import axios from 'axios';

import ErrorMessage from './ErrorMessage.tsx';

const productData: IProduct = {
  title: 'string',
  price: 0.1,
  description: 'string',
  category: 'string',
  image: 'http://example.com',
  rating: {
    rate: 5,
    count: 200,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (value.trim() === '') {
      setError('Please enter a valid title');
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    onCreate(response.data); // createProduct(response.data)
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        value={value}
        onChange={changeHandler}
        className='border py-2 px-4 mb-2 w-full outline-none'
        placeholder='Product Name'
      />
      {error && <ErrorMessage error={error} />}
      <button type='submit' className='py-2 px-4 bg-yellow-400 border hover:text-white'>
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
