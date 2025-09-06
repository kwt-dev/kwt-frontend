"use client"
import Image from 'next/image'
import { useState } from 'react'
import KingsButton from '@/components/ui/kings-button'

type TabKey = 'tint' | 'ppf' | 'coating'

const TAB_COPY: Record<TabKey, { title: string; body: string; cta: string; image: string }> = {
  tint: {
    title: 'Transform Every Drive From Uncomfortable to Luxurious',
    body:
      "Stop dreading hot days and sun glare. Our precision-installed ceramic tint delivers up to 15°F cooler interiors, 99% UV protection, and crystal-clear visibility that won't interfere with electronics.",
    cta: 'SECURE YOUR COOL, COMFORTABLE RIDE',
    image: '/images/tint.webp',
  },
  ppf: {
    title: "Invisible Armor That Keeps Your Vehicle Looking Showroom-New",
    body:
      'Every drive threatens your finish with rock chips and road debris. Our precision-cut PPF creates an invisible shield that self-heals minor scratches while preserving original brilliance.',
    cta: "SHIELD YOUR VEHICLE'S VALUE",
    image: '/images/ppf.webp',
  },
  coating: {
    title: 'Show-Car Shine With Effortless Maintenance',
    body:
      'Enhance appearance while creating a hydrophobic barrier that repels water, dirt, and contaminants. Washing becomes easier while long-term gloss turns heads.',
    cta: "ENHANCE YOUR VEHICLE'S BEAUTY",
    image: '/images/ceramicCoating.webp',
  },
}

export default function ServicesShowcase() {
  const [active, setActive] = useState<TabKey>('tint')

  const current = TAB_COPY[active]

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] min-h-[420px]">
          {/* Background image with gradient overlay */}
          <div className="absolute inset-0">
            <Image src={current.image} alt="Service background" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_20%,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.75)_60%,rgba(0,0,0,0.85)_100%)]" />
          </div>

          {/* Content */}
          <div className="relative p-6 sm:p-10 md:p-14">
            <div className="text-center mb-6">
              <div className="text-xs uppercase tracking-[.25em] text-light-grey/80 mb-2">Solutions We Offer</div>
              <h2 className="text-white text-2xl md:text-3xl font-semibold">Three Ways to Upgrade Your Vehicle</h2>
              <p className="text-light-grey mt-2 text-sm max-w-2xl mx-auto">Quality that transforms how your vehicle looks, feels, and performs—backed by our 25+ years and uncompromising craftsmanship.</p>
            </div>

            {/* Tabs */}
            <div role="tablist" aria-label="Services" className="flex items-center justify-center gap-3">
              {([
                ['tint', 'Window Tinting'],
                ['ppf', 'Paint Protection Film'],
                ['coating', 'Ceramic Coating'],
              ] as [TabKey, string][]) .map(([key, label]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active === key}
                  className={active === key ? 'pill-active' : 'pill-ghost'}
                  onClick={() => setActive(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div role="tabpanel" className="surface-king mt-6 sm:mt-8 p-5 sm:p-8 rounded-2xl">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{current.title}</h3>
              <p className="text-light-grey mb-5 max-w-3xl">{current.body}</p>
              <KingsButton variant="gold" href="/contact" className="w-auto px-6 py-2 text-sm">
                {current.cta}
              </KingsButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
