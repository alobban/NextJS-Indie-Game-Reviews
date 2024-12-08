import Heading from '@/components/Heading';

export default function StardewValleyPage() {
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt=""
        width={640}
        height={360}
        className="rounded mb-2"
      />
      <p>This will be the review for Stardew Valley.</p>
    </>
  );
}
