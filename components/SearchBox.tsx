'use client';

import { searchReviews } from '@/lib/reviews';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [reviews, setReviews] = useState([]);
  const [debounceQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (debounceQuery.length > 1) {
      const controller = new AbortController();
      (async () => {
        try {
          const url = 'api/search?query=' + encodeURIComponent(debounceQuery);
          const response = await fetch(url, { signal: controller.signal });
          const reviews = await response.json();
          setReviews(reviews);
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('aborted successfully: IGNORE');
          } else {
            throw error;
          }
        }
      })();
      return () => controller.abort();
    } else {
      setReviews([]);
    }
  }, [debounceQuery]);

  console.log('[SearchBox] query:', { query, debounceQuery });

  const handleChange = (review) => {
    console.log('[SearchBox] handleChange param:', review);
    router.push(`/reviews/${review?.slug ?? ''}`);
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
          {reviews.map((review) => (
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
