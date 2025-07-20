interface Error {
  error: string;
}

const ErrorMessage = ({ error }: Error) => {
  return <p className='text-center text-red-500'>{error}</p>;
};

export default ErrorMessage;
