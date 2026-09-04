// src/app/products/[productId]/page.tsx
type Props = {
  params: Promise <{
    blogsId: string
  }>
}

export default async function BlogsDetails({ params }: Props) {
  const {blogsId} = await params;
  return (
    <h1>Detail Blogs Saya {blogsId}</h1>
  );
}