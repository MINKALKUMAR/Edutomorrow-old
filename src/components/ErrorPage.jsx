import { useNavigate } from 'react-router-dom';
import errorGif from '../assets/404-Page.gif';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <div>
          <img 
            src={errorGif} 
            alt="404 Error" 
            className="mx-auto w-full max-w-md mb-8"
          />
          <h2 className="text-5xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Go back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
