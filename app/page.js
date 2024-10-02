// app/page.js


import NavBar from './components/NavBar'; // Adjust the path as necessary
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const products = [
    {
      id: '1',
      name: "Classic Black Cap",
      price: 25,
      imageUrl: "/images/black-cap.jpg",
    },
    {
      id: '2',
      name: "Blue Sports Cap",
      price: 30,
      imageUrl: "/images/blue-sports-cap.jpg",
    },
    {
      id: '3',
      name: "Green Casual Cap",
      price: 20,
      imageUrl: "/images/green-casual-cap.jpg",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 my-20">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={150}
                height={150}
                className="mt-2"
              />
            </Link>
            <p className="mt-2 text-gray-600">Price: ${product.price}</p>
            <Link href={`/product/${product.id}`} legacyBehavior>
              <button className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
