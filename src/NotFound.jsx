import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, that route doesn’t exist.</p>
      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
