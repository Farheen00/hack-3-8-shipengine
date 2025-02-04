// import Image from "next/image";
// export default function Newsletter() {
//   return (
//     <div className="w-full h-auto bg-[#F0F2F3]">
//       <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
//         <h2 className="font-bold text-xl mt-4">
//           Or Subscribe to the Newsletter
//         </h2>
//         <div className="flex justify-center items-center gap-16">
//           <div className="flex flex-col items-start mt-12">
//             <span className="text-[#8F9499] text-[16px] font-semibold mb-2 ml-3">
//               Email address...
//             </span>
//             <div className="w-[643px] h-[2px] bg-black"></div>
//           </div>
//           <div className="flex flex-col items-center mt-12">
//             <span className="text-[16px] font-normal mb-2">SUBMIT</span>
//             <div className="w-[91px] h-[2px] bg-black"></div>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
//         <h2 className="text-xl font-bold  text-center">
//           Follow Products and Discounts on Instagram
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-24">
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/product6.png"
//               alt="Instagram product 1"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/product5.png"
//               alt="Instagram product 2"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/product1.png"
//               alt="Instagram product 3"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/product2.png"
//               alt="Instagram product 4"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/product3.png"
//               alt="Instagram product 5"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/product7.png"
//               alt="Instagram product 6"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type InstagramProduct = {
  id: string;
  image: string;
  alt: string;
};

export default function Newsletter() {
  const [instagramProducts, setInstagramProducts] = useState<InstagramProduct[]>([]);

  useEffect(() => {
    const fetchInstagramProducts = async () => {
      const products = await client.fetch(`*[_type == "products" && "instagram" in tags][0...6]{
        id,
        image,
         title
      }`);
      setInstagramProducts(products);
    };

    fetchInstagramProducts();
  }, []);

  return (
    <div className="w-full h-auto bg-[#F0F2F3]">
      <div className="max-w-3xl mx-auto py-16 px-6 sm:px-8 md:px-12 text-center space-y-6">
        <h2 className="font-bold text-lg sm:text-xl mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          <div className="flex flex-col items-start mt-8 sm:mt-12 w-full sm:w-auto">
            <span className="text-[#8F9499] text-sm sm:text-base font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-full sm:w-[643px] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col items-center mt-8 sm:mt-12">
            <span className="text-sm sm:text-base font-normal mb-2">SUBMIT</span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-6 space-y-8">
        <h2 className="text-lg sm:text-xl font-bold text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pb-12">
          {instagramProducts.map((product) => (
            <div key={product.id} className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={urlFor(product.image).url()}
                alt={product.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
