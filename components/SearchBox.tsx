'use client';

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const reviews = [
  { slug: 'celeste-2', title: 'Celeste 2 Update 1' },
  { slug: 'hades-2018', title: 'Hades' },
  { slug: 'fall-guys', title: 'Fall Guys: Ultimate Knockout' },
  { slug: 'black-mesa', title: 'Black Mesa' },
  { slug: 'disco-elysium', title: 'Disco Elysium' },
  { slug: 'dead-cells', title: 'Dead Cells' },
];

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  console.log('[SearchBox] query:', query);
  const filtered = reviews.filter((review) => review.title.includes(query));

  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  return (
    <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <ComboboxInput
          type="text"
          placeholder="Search..."
          className="w-full border px-2 py-1 rounded"
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxOptions className="absolute w-full bg-white py-1">
          {filtered.map((review) => (
            <ComboboxOption key={review.slug} value={review}>
              {({ focus }) => (
                <span
                  className={`block w-full px-2 truncate ${
                    focus ? 'bg-orange-100' : ''
                  }`}
                >
                  {review.title}
                </span>
              )}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
