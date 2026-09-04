// src/app/sourses/[sourseId]/page.tsx
type Props = {
  params: Promise <{
    sourseId: string
  }>
}

export default async function SourseDetails({ params }: Props) {
  const {sourseId} = await params;
  return (
    <h1>Mata Pelajaran {sourseId}</h1>
  );
}