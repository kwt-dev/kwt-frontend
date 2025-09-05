'use client';

import { useState } from 'react';

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section>
      <div className="relative flex max-w-7xl bg-dark-red border border-1 border-light-brown mx-auto rounded-[3rem]">
        <div className="w-full max-w-7xl px-18 py-18">
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
