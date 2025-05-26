type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  // Add other fields if needed
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  );
}
