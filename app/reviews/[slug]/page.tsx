import Heading from '@/components/Heading';
import { getReview, getSlugs } from '@/lib/reviews';

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: Promise<ReviewPageParams>;
}

export async function generateMetadata({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({ params }: ReviewPageProps) {
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
