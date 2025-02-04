
"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  image: string;
  price: string;
  priceWithoutDiscount?: string;
  badge?: string;
};

export default function PageFeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const fetchedProducts = await client.fetch(
        `*[_type == "products" && "featured" in tags]{
          _id,
          title,
          image,
          price,
          priceWithoutDiscount,
          badge,
        }`
      );
      setFeaturedProducts(fetchedProducts);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-12">
          {/* Heading */}
          <h1 className="text-center  text-3xl md:text-2xl font-semibold font-[Inter] mb-6">
            Featured Products
          </h1>

          {/* Product Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {featuredProducts.map((product) => (
              <Link
                href={`/products/${product._id}`} // Correct dynamic route
                key={product._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 hover:scale-105 transition-transform duration-150"
              >
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  {product.badge && (
                    <h1
                      className={`absolute top-2 left-2 text-white px-2 py-1 text-xs rounded-md`}
                      style={{
                        backgroundColor:
                          product.badge === "New" ? "#01AD5A" : "#F5813F",
                      }}
                    >
                      {product.badge}
                    </h1>
                  )}
                  <FaRegHeart className="absolute top-2 right-2 text-black bg-white p-2 text-2xl rounded-md" />
                  <Image
                    src={urlFor(product.image).url()}
                    width={600}
                    height={600}
                    alt={product.title}
                    className="w-full h-48"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-[#007580]">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-[#272343]">${product.price}</p>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
