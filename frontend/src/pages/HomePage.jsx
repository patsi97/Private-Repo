import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
      <div className="min-h-screen bg-green-600 text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">🏠 Home Page</h1>
        <Link className="text-blue-300 underline" to="/about">Go to About</Link>
      </div>
  );
}


