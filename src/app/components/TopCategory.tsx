// import React from "react";
// import Image from "next/image";

// export default function TopCategory() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <section className="text-gray-600 body-font">
//         <div className="py-16">
//           <h1 className="text-3xl md:text-2xl font-semibold font-[Inter] text-left ml-14 mb-8">
//             Top Categories
//           </h1>
//           <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          

//             {/* Product 2 */}
//             <div className="p-4 hover:scale-105 duration-150">
//               <div className="relative h-48 rounded overflow-hidden">
//                 <Image
//                   src="/product5.png"
//                   width={600}
//                   height={600}
//                   className=" w-full h-full"
//                   alt="Wooden Chair"
//                 />
//                 <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
//                   <p className="text-sm font-semibold">Wooden Chair</p>
//                   <p className="text-xs font-light">157 Products</p>
//                 </div>
//               </div>
//             </div>

//             {/* Product 3 */}
//             <div className="p-4 hover:scale-105 duration-150">
//               <div className="relative h-48 rounded overflow-hidden">
//                 <Image
//                   src="/product6.png"
//                   width={600}
//                   height={600}
//                   className=" w-full h-full"
//                   alt="Wing Chair"
//                 />
//                 <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
//                   <p className="text-sm font-semibold">Wing Chair</p>
//                   <p className="text-xs font-light">3,584 Products</p>
//                 </div>
//               </div>
//             </div>

//             {/* Product 4 */}
//             <div className="p-4 hover:scale-105 duration-150">
//               <div className="relative h-48 rounded overflow-hidden">
//                 <Image
//                   src="/product7.png"
//                   width={600}
//                   height={600}
//                   className=" w-full h-full"
//                   alt="Desk Chair"
//                 />
//                 <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
//                   <p className="text-sm font-semibold">Desk Chair</p>
//                   <p className="text-xs font-light">154 Products</p>
//                 </div>
//               </div>
//             </div>

//            </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// import React from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// type Category = {
//   id: string;
//   title: string;
//   image: string;
//   products: number;
// };

// export default async function TopCategory() {
//   const data: Category[] = await client.fetch(`*[_type == "categories"] {
//     id,
//     title,
//     image,
//     products
//   }`);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <section className="text-gray-600 body-font">
//         <div className="py-16">
//           <h1 className="text-3xl md:text-2xl font-semibold font-[Inter] text-left ml-14 mb-8">
//             Top Categories
//           </h1>
//           <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//             {data.map((item, index) => (
//               <div key={item.id || index} className="p-4 hover:scale-105 duration-150">
//                 <div className="relative h-48 rounded overflow-hidden">
//                   <Image
//                     src={urlFor(item.image).url()}
//                     width={600}
//                     height={600}
//                     className="w-full h-full"
//                     alt={item.title}
//                   />
//                   <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
//                     <p className="text-sm font-semibold">{item.title}</p>
//                     <p className="text-xs font-light">{item.products} Products</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Category = {
  id: string;
  title: string;
  image: string;
  products: number;
};

export default function TopCategory() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data: Category[] = await client.fetch(`*[_type == "categories"] {
        id,
        title,
        image,
        products
      }`);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-gray-600 body-font">
        <div className="py-16">
          <h1 className="text-3xl md:text-2xl font-semibold font-[Inter] text-left ml-14 mb-8">
            Top Categories
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((item, index) => (
              <div key={item.id || index} className="p-4 hover:scale-105 duration-150">
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    src={urlFor(item.image).url()}
                    width={600}
                    height={600}
                    className="w-full h-full"
                    alt={item.title}
                  />
                  <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs font-light">{item.products} Products</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
