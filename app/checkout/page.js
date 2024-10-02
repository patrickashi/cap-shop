export default function CheckoutPage() {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-700">Review your order and proceed with payment.</p>
        
        {/* Example of order summary */}
        <div className="border p-4 rounded mt-4">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <p className="text-gray-500">Cap 1: $20 x 2 = $40</p>
          <p className="font-bold mt-2">Total: $40</p>
        </div>
  
        {/* Payment form */}
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Proceed to Payment</button>
      </div>
    );
  }
  