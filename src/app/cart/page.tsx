
// this is the best
// "use client";

// import { useCart } from "@/context/CartContext";

// const CartPage = () => {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id}>
//             <img src={item.image} alt={item.title} width={100} />
//             <h2>{item.title}</h2>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartPage;
//this is the best

// "use client";

// import { useCart } from "@/context/CartContext";
// import Image from "next/image";

// const CartPage = () => {
//   const { cart, removeFromCart } = useCart();

//   // Calculate the subtotal
//   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

//       {/* Cart Items */}
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Cart Items Section */}
//           <div className="flex-1 space-y-6">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center bg-white p-4 rounded-lg shadow-md"
//               >
//                 {/* Image */}
//                 <div className="w-24 h-24 relative mr-4">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={200}
//                     height={200}
//                     className="rounded-lg w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Item Details */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold">{item.title}</h2>
//                   <div className="flex justify-between w-full md:w-auto gap-3 mt-2">
//                     <p className="text-[16px] font-normal text-[#111111]">MRP:</p>
//                     <p className="text-[16px] font-normal text-[#111111]">
//                       ${item.price.toFixed(2)}
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold mt-2">
//                     Quantity: {item.quantity}
//                   </p>
//                 </div>

//                 {/* Remove Button */}
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-4"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Summary Section */}
//           <div className="w-full lg:w-1/3">
//             <h2 className="text-xl font-bold mb-6 ml-4">Summary</h2>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex justify-between mb-4">
//                 <p>Subtotal</p>
//                 <p className="font-semibold">${subtotal.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <p>Estimated Delivery & Handling</p>
//                 <p className="font-semibold">Free</p>
//               </div>
//               <hr className="mb-4" />
//               <div className="flex justify-between mb-6">
//                 <p className="font-bold">Total</p>
//                 <p className="font-bold">${subtotal.toFixed(2)}</p>
//               </div>
//               <button className="bg-blue-500 text-white w-full py-2 rounded-[30px] hover:bg-blue-600 transition">
//                 Member Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                {/* Image */}
                <div className="w-24 h-24 relative mr-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[16px] font-normal">Price:</p>
                    <p className="text-[16px] font-semibold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="text-sm font-semibold mt-2">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm font-bold mt-2">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-6 ml-4">Summary</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <p>Subtotal</p>
                <p className="font-semibold">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Estimated Delivery & Handling</p>
                <p className="font-semibold">Free</p>
              </div>
              <hr className="mb-4" />
              <div className="flex justify-between mb-6">
                <p className="font-bold">Total</p>
                <p className="font-bold">${subtotal.toFixed(2)}</p>
              </div>
              <button className="bg-blue-500 text-white w-full py-2 rounded-[30px] hover:bg-blue-600 transition">
              <Link href="/shipment" >
                Checkout
              </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;