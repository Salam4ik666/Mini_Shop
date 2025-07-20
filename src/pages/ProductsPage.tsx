import { useProducts } from '../hooks/products.ts';
import { ModalContext } from '../context/ModalContext.tsx';
import type { IProduct } from '../model.ts';
import Loader from '../components/Loader.tsx';
import ErrorMessage from '../components/ErrorMessage.tsx';
import Product from '../components/Product.tsx';
import Modal from '../components/Modal.tsx';
import CreateProduct from '../components/CreateProduct.tsx';
import { useContext } from 'react';

const ProductsPage = () => {
  const { products, loading, error, addProduct } = useProducts();
  const { showModal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {showModal && (
        <Modal title='Create New Product ' onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        type='submit'
        className='py-2 px-4 bg-yellow-400 border hover:text-white fixed bottom-5 right-5 rounded-3xl'
        onClick={open}
      >
        Create
      </button>
    </div>
  );
};

export default ProductsPage;
