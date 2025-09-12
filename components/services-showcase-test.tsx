"use client"
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import KingsButton from '@/components/ui/kings-button'
import ServiceBentoGrid from './ServiceBentoGrid'

type TabKey = 'tint' | 'ppf' | 'coating'

const TAB_COPY: Record<TabKey, { 
  title: string; 
  body: string; 
  cta: string; 
  image: string; 
  bentoCards: Array<{ title: string; description: string; label: string }>;
  bentoSettings?: {
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    enableTilt?: boolean;
    enableMagnetism?: boolean;
    clickEffect?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    glowColor?: string;
    cardColor?: string;
  }
}> = {
  tint: {
    title: 'Transform Every Drive From Uncomfortable to Luxurious',
    body:
      "Stop dreading hot days and sun glare. Our precision-installed ceramic tint delivers up to 15°F cooler interiors, 99% UV protection, and crystal-clear visibility that won't interfere with electronics.",
    cta: 'SECURE YOUR COOL, COMFORTABLE RIDE',
    image: '/images/solutionsUpgrade.webp',
    bentoCards: [
      {
        title: 'Heat Reduction',
        description: 'Up to 15°F cooler interior temperatures',
        label: 'Comfort'
      },
      {
        title: 'UV Protection',
        description: '99% harmful UV ray blockage',
        label: 'Health'
      },
      {
        title: 'Glare Control',
        description: 'Enhanced visibility in bright conditions',
        label: 'Safety'
      },
      {
        title: 'Privacy Shield',
        description: 'Increased security and privacy',
        label: 'Security'
      },
      {
        title: 'Signal Friendly',
        description: 'No interference with electronics',
        label: 'Technology'
      },
      {
        title: 'Lifetime Warranty',
        description: 'Comprehensive coverage for years',
        label: 'Protection'
      }
    ],
    bentoSettings: {
      textAutoHide: false,
      enableStars: false,
      enableSpotlight: false,
      enableBorderGlow: true,
      enableTilt: false,
      enableMagnetism: false,
      clickEffect: false,
      glowColor: "196, 30, 58",
      cardColor: "#100a1a",
      gridLayout: "2x3"  // Simple 2 rows, 3 columns
    }
  },
  ppf: {
    title: "Invisible Armor That Keeps Your Vehicle Looking Showroom-New",
    body:
      'Every drive threatens your finish with rock chips and road debris. Our precision-cut PPF creates an invisible shield that self-heals minor scratches while preserving original brilliance.',
    cta: "SHIELD YOUR VEHICLE'S VALUE",
    image: '/images/ppf.webp',
    bentoCards: [
      {
        title: 'Self-Healing',
        description: 'Minor scratches disappear with heat',
        label: 'Innovation'
      },
      {
        title: 'Rock Chip Defense',
        description: 'Military-grade impact protection',
        label: 'Armor'
      },
      {
        title: 'Stain Resistance',
        description: 'Repels road grime and contaminants',
        label: 'Clean'
      },
      {
        title: 'Crystal Clear',
        description: 'Invisible protection maintains aesthetics',
        label: 'Clarity'
      },
      {
        title: 'Custom Fit',
        description: 'Precision-cut for perfect coverage',
        label: 'Precision'
      },
      {
        title: 'Value Protection',
        description: 'Preserves paint and resale value',
        label: 'Investment'
      }
    ],
    bentoSettings: {
      textAutoHide: false,
      enableStars: true,
      enableSpotlight: true,
      enableBorderGlow: true,
      enableTilt: true,
      enableMagnetism: true,
      clickEffect: true,
      particleCount: 15,
      spotlightRadius: 400,
      glowColor: "245, 197, 66",  // Gold accent for PPF
      cardColor: "#1a1410",
      gridLayout: "featured"  // Mixed sizes with featured cards
    }
  },
  coating: {
    title: 'Show-Car Shine With Effortless Maintenance',
    body:
      'Enhance appearance while creating a hydrophobic barrier that repels water, dirt, and contaminants. Washing becomes easier while long-term gloss turns heads.',
    cta: "ENHANCE YOUR VEHICLE'S BEAUTY",
    image: '/images/ceramicCoating.webp',
    bentoCards: [
      {
        title: 'Hydrophobic',
        description: 'Water beads and rolls off effortlessly',
        label: 'Protection'
      },
      {
        title: 'Deep Gloss',
        description: 'Mirror-like shine that lasts for years',
        label: 'Brilliance'
      },
      {
        title: 'Easy Clean',
        description: 'Dirt and grime wash away easily',
        label: 'Convenience'
      },
      {
        title: 'Chemical Shield',
        description: 'Resists bird droppings and acid rain',
        label: 'Defense'
      },
      {
        title: 'UV Blocking',
        description: 'Prevents paint fade and oxidation',
        label: 'Longevity'
      },
      {
        title: 'Scratch Resistance',
        description: 'Added hardness protects clear coat',
        label: 'Durability'
      }
    ],
    bentoSettings: {
      textAutoHide: true,
      enableStars: false,
      enableSpotlight: true,
      enableBorderGlow: true,
      enableTilt: true,
      enableMagnetism: false,
      clickEffect: true,
      spotlightRadius: 250,
      glowColor: "139, 115, 85",  // Light brown for Ceramic
      cardColor: "#1a1612",
      gridLayout: "3x2"  // 3 columns, 2 rows
    }
  },
}

export default function ServicesShowcaseTest() {
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
            <div role="tablist" aria-label="Services" className="flex items-center justify-center gap-[60px]">
              {([
                ['tint', 'WINDOW TINTING'],
                ['ppf', 'PAINT PROTECTION FILM'],
                ['coating', 'CERAMIC COATING'],
              ] as [TabKey, string][]) .map(([key, label]) => (
                <motion.button
                  key={key}
                  role="tab"
                  aria-selected={active === key}
                  className={(active === key ? 'pill-active' : 'pill-ghost') + ' w-[280px] h-10'}
                  onClick={() => setActive(key)}
                  whileHover={active !== key ? { 
                    backgroundColor: "rgba(255,255,255,1)",
                    color: "#672530",
                    transition: { duration: 0.2, ease: "easeOut" }
                  } : undefined}
                  whileTap={{ opacity: 0.9 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Bento Grid Panel */}
            <div 
              role="tabpanel" 
              className="mt-8 sm:mt-10 mx-auto"
              style={{
                width: '100%',
                maxWidth: '1200px'
              }}
            >
              <ServiceBentoGrid 
              cards={current.bentoCards} 
              settings={current.bentoSettings}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
