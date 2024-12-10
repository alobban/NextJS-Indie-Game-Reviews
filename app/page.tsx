import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const { reviews } = await getReviews(3);
  // console.log(
  //   '[Homepage] rendering:',
  //   reviews.map((review) => review.slug).join(', ')
  // );

  return (
    <>
      <Heading>Indie World</Heading>
      <div className="flex flex-col gap-1 mb-4">
        <p>Only the best indie games, reviewed for you.</p>
        <p>
          This is a demo website built with Responsive Web Design running{' '}
          <strong>NextJS 15.0.4</strong>.
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt=""
                priority={index === 0}
                width={320}
                height={180}
                className="rounded-t sm:rounded-l sm:rounded-r-none"
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-semibold font-orbitron">{review.title}</h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
