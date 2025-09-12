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
    image: '/images/solutionsUpgrade.webp',
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
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] min-h-[520px]">
          {/* Background image with gradient overlay */}
          <div className="absolute inset-0">
            <Image src={current.image} alt="Service background" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(120%_80%_at_70%_20%,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.75)_60%,rgba(0,0,0,0.85)_100%)]" />
          </div>

          {/* Content */}
          <div className="relative pt-8 pb-10 px-8 sm:pt-14 pb-18 px-14 md:pt-20 pb-26 px-20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-[0.5px] w-8 bg-gold-accent"></span>
                <span className="text-xs uppercase tracking-[.25em] text-white font-medium">Satisfaction Guaranteed</span>
                <span className="h-[0.5px] w-8 bg-gold-accent"></span>
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-semibold pb-8">Three Ways to Upgrade Your Vehicle</h2>
              {/* <p className="text-white mt-2 text-sm max-w-2xl mx-auto">Quality that transforms how your vehicle looks, feels, and performs—backed by our 25+ years and uncompromising craftsmanship.</p> */}
            </div>

            {/* Tabs */}
            <div role="tablist" aria-label="Services" className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              {([
                ['tint', 'WINDOW TINTING'],
                ['ppf', 'PAINT PROTECTION FILM'],
                ['coating', 'CERAMIC COATING'],
              ] as [TabKey, string][]).map(([key, label]) => (
                <KingsButton
                  key={key}
                  variant="ghost"
                  onClick={() => setActive(key)}
                  className="min-w-[200px] md:min-w-[260px]"
                >
                  {label}
                </KingsButton>
              ))}
            </div>

            {/* Detail panel */}
            <div 
              role="tabpanel" 
              className="mt-6 sm:mt-8 p-6 md:p-10 rounded-[20px] mx-auto relative overflow-hidden"
              style={{
                width: '960px',
                maxWidth: '100%',
                background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.25) 0%, rgba(103, 37, 48, 0.35) 50%, rgba(40, 15, 25, 0.4) 100%)',
                backdropFilter: 'blur(13.591px)',
                border: '0.5px solid rgba(196, 30, 58, 0.3)',
                boxShadow: '0px 1px 2px 0px rgba(196,30,58,0.4), inset 0px 0px 40px rgba(196,30,58,0.15)'
              }}
            >
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{current.title}</h3>
              <p className="text-light-grey mb-5 max-w-3xl opacity-50">{current.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
