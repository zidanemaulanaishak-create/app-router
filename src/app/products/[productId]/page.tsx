// src/app/products/[productId]/page.tsx
type Props = {
  params: Promise <{
    productId: string
  }>
}

export default async function ProductDetails({ params }: Props) {
  const {productId} = await params;
  return (
    <h1>Details about product {productId}</h1>
  );
}