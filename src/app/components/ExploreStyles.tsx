
"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

type ChairsData = {
  title: string;
  image: string;
};

export default function ExploreStyles() {
  const [data, setData] = useState<ChairsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`*[_type == "products" && "gallery" in tags] {
        title,
        image,
      }`);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
      {/* Large Image Section */}
      <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
        <div className="w-full h-full relative">
          {data.slice(4,5).map((item, index) => (
            <Image
              key={index}
              src={urlFor(item.image).url()}
              alt={item.title}
              width={400}
              height={560}
              className="object-cover shadow-lg rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Grid of Smaller Images */}
      <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
        {data.slice(1, 5).map((item, index) => (
          <div className="relative" key={index}>
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
              width={200}
              height={280}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}