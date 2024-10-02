// app/product/[id]/page.js

import Image from 'next/image';

const ProductPage = ({ params }) => {
  const { id } = params; // Get the ID from params

  // Sample product data
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
      name: "Blue Sports Cap",
      price: 30,
      imageUrl: "/images/green-casual-cap.jpg",
    },
    // Add more products as needed
  ];

  // Find the product based on the ID from the URL
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300} // Adjust width as needed
        height={300} // Adjust height as needed
        className="mt-4"
      />
      <p className="mt-2">Price: ${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default ProductPage;
