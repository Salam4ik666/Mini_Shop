import type { IProduct } from '../model.ts';
import { useState } from 'react';

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  return (
    <div className='border px-6 py-5 rounded flex flex-col items-center mb-5'>
      <img src={product.image} className='w-1/6' alt='product' />
      <p>{product.title}</p>
      <span className='font-bold'>{product.price}</span>
      <button
        className={`py-2 px-4 border rounded-3xl ${details ? 'bg-yellow-400' : 'bg-blue-400'}`}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide details' : 'Show details'}
      </button>
      {details && <p>{product.description}</p>}
      {product.rating?.rate && (
        <p>
          Rate: <span style={{ fontWeight: 'bold' }}>{product.rating?.rate}</span>
        </p>
      )}
    </div>
  );
};

export default Product;
