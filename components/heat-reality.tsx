import Image from 'next/image'

export default function HeatReality() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="surface-king p-6 md:p-8 rounded-[2rem]">
          <div className="text-center mb-6">
            <h3 className="text-white text-xl md:text-2xl tracking-wide">THE HEAT &amp; DAMAGE REALITY</h3>
            <div className="mx-auto mt-2 w-16 h-px bg-white/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Metric card */}
            <div className="bg-white/95 text-obsidian rounded-xl p-5 md:p-6 shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="chip text-obsidian bg-[#FFE7E7] border-[#F3C5C5]">⚠️</div>
                <div className="text-2xl font-bold">140°F+</div>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Your vehicle&apos;s interior reaches 140°F+ on summer days. Every minute of UV exposure accelerates leather cracking, dashboard fading, and creates a dangerously uncomfortable driving environment that forces your AC to work overtime.
              </p>
            </div>

            {/* Photo with chip */}
            <div className="relative rounded-xl overflow-hidden">
              <Image src="/images/customer-06.jpg" alt="Vehicle interior" width={800} height={500} className="w-full h-auto object-cover" />
              <div className="absolute bottom-3 left-3 chip">UV Damage in Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

