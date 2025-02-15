import CustomLink from '@/Components/Atoms/CustomLink';
import Img from '@/Components/Atoms/Img';
import ProductCard from '../CardsGroup/ProductCard';

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  description?: string;
  rating: string;
}

interface ProductListProps {
  products: Product[];
  title: string;
  addToCartText: string;
}

export default function ProductList({
  products,
  title,
  addToCartText,
}: ProductListProps) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              imageUrl={product.imageSrc}
              productName={product.name}
              price={product.price}
              ratingText={product.rating.toString()}
              onAddToCart={() => addToCartText}
              addToCartText={'add to cart'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
