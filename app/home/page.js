import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Cap Shop</h1>
      <p className="text-gray-700">Browse our latest collection of caps below.</p>
      
      {/* Example of products listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">Cap 1</h2>
          <p className="text-gray-500">Price: $20</p>
          <Link href="/product/1">
            <a className="text-blue-500">View Details</a>
          </Link>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">Cap 2</h2>
          <p className="text-gray-500">Price: $25</p>
          <Link href="/product/2">
            <a className="text-blue-500">View Details</a>
          </Link>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  );
}
