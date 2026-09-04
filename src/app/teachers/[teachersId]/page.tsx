// src/app/products/[productId]/page.tsx
type Props = {
  params: Promise <{
    teachersId: string
  }>
}

export default async function TeacherDetails({ params }: Props) {
  const {teachersId} = await params;
  return (
    <h1>Melihat Profil Akademik untuk Guru: {teachersId}</h1>
  );
}