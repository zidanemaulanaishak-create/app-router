//
type Props = {
    params: {
        productId: string;
        reviewId: string;
    }
}

export default async function ReviewDetails({ params }: Props) {
     const {productId,reviewId} = await params;
    return (
        <div>
        <h1>Review {reviewId} for Product {productId}</h1>
        </div>
    )
}