import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Sample products data, you can fetch this from your backend later
  const products = [
    {
      id: 1,
      name: "Classic Black Cap",
      price: 25,
      imageUrl: "/images/black-cap.jpg",
    },
    {
      id: 2,
      name: "Blue Sports Cap",
      price: 30,
      imageUrl: "/images/blue-sports-cap.jpg",
    },
    {
      id: 3,
      name: "Green Casual Cap",
      price: 20,
      imageUrl: "/images/green-casual-cap.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Cap Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <Link href={`/product/${product.id}`} legacyBehavior>
              <button className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
