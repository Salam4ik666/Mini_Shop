import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='h-[50px] flex items-center justify-between px-5 bg-gray-800 text-white'>
      <span className='font-bold'>React2025</span>
      <span>
        <Link to='/' className='mr-2'>
          Product
        </Link>
        <Link to='/about' className='mr-2'>
          About
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;
