'use client';

import { useState } from 'react';

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className='py-6 md:py-8'>
      <div className="relative flex max-w-7xl bg-dark-red mx-auto rounded-[2rem] overflow-hidden">
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 opacity-50 mix-blend-multiply"
          style={{
            backgroundImage: 'url(/images/schedulerGradient.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative w-full max-w-7xl px-18 py-18">
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
