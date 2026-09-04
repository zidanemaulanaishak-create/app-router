//
type Props = {
    params: {
        sourseId: string;
        materialsId: string;
    }
}

export default async function MaterialsDetails({ params }: Props) {
     const {sourseId,materialsId} = await params;
    return (
        <div>
        <h1>Melihat materi bab {materialsId} untuk mata pelajaran {sourseId}</h1>
        </div>
    )
}