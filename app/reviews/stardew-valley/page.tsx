import { marked } from 'marked';
import { readFile } from 'node:fs/promises';
import Heading from '@/components/Heading';

export default async function StardewValleyPage() {
  const text = await readFile('./content/reviews/stardew-valley.md', 'utf8');
  const html = marked(text);

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
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
