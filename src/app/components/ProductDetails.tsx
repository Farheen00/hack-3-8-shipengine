// "use client";

// import { useCart } from "@/context/CartContext";
// import Image from "next/image";

// type ProductProps = {
//   product: {
//     id: string;
//     title: string;
//     image: string;
//     price: number;
//     priceWithoutDiscount?: number;
//     description: string;
//   };
// };

// export default function ProductDetails({ product }: ProductProps) {
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       image: product.image,
//       quantity: 1, // Initial quantity
//     });
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:px-32 lg:px-48 px-6 sm:px-12 md:py-12 space-y-6 md:space-y-0 md:space-x-6 items-center md:items-start">
//       {/* Image Section */}
//       <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
//         <div className="relative w-full h-64 md:h-96">
//           <Image
//             className="object-cover object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
//             src={product.image}
//             alt={product.title}
//             width={200}
//             height={200}
//           />
//         </div>
//       </div>

//       {/* Card Section */}
//       <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg text-gray-800 flex flex-col justify-between items-center md:items-start">
//         <h1 className="text-2xl md:text-4xl font-medium md:font-semibold mb-4 text-center md:text-left">
//           {product.title}
//         </h1>
//         <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded hover:bg-emerald-600 transition duration-300 mb-4">
//           ${product.price} USD
//         </button>
//         {product.priceWithoutDiscount && (
//           <p className="line-through text-gray-400">
//             ${product.priceWithoutDiscount}
//           </p>
//         )}
//         <p className="text-center md:text-left leading-relaxed mb-6">
//           {product.description || "No description available for this product."}
//         </p>
//         <button
//           className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition duration-300"
//           onClick={handleAddToCart}
//         >
//           ADD To Cart
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

type ProductProps = {
  product: {
    id: string;
    title: string;
    image: string;
    price: number;
    priceWithoutDiscount?: number;
    description: string;
  };
};

export default function ProductDetails({ product }: ProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1, // Initial quantity
    });
  };

  return (
    <div className="flex flex-col md:flex-row md:px-20 lg:px-32 xl:px-48 px-6 sm:px-12 py-8 md:py-12 space-y-8 md:space-y-0 md:space-x-8 items-center md:items-start">
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            className="object-cover object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
            src={product.image}
            alt={product.title}
            fill
            priority
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg text-gray-800 flex flex-col justify-between items-center md:items-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold mb-4 text-center md:text-left">
          {product.title}
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xl md:text-2xl font-bold text-emerald-500">
            ${product.price} USD
          </span>
          {product.priceWithoutDiscount && (
            <p className="line-through text-gray-400 text-lg">
              ${product.priceWithoutDiscount}
            </p>
          )}
        </div>
        <p className="text-center md:text-left leading-relaxed mb-6">
          {product.description || "No description available for this product."}
        </p>
        <button
          className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition duration-300"
          onClick={handleAddToCart}
        >
          ADD To Cart
        </button>
      </div>
    </div>
  );
}
