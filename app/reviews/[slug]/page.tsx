import Heading from '@/components/Heading';
import { getReview } from '@/lib/reviews';

export default async function ReviewPage({ params }) {
  const { slug } = await params;
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img
        src={review.image}
        alt=""
        width={640}
        height={360}
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
