

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductDetails from "@/app/components/ProductDetails";


type Props = {
  params: {
    id: string;
  };
};

export default async function SingleProduct({ params }: Props) {
  const { id } = params;

  // Fetch product details from Sanity
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]{
      title,
      image,
      price,
      priceWithoutDiscount,
      badge,
      description
    }`,
    { id }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductDetails
      product={{
        id,
        title: product.title,
        image: urlFor(product.image).url(),
        price: product.price,
        priceWithoutDiscount: product.priceWithoutDiscount,
        description: product.description,
      }}
    />
  );
}
