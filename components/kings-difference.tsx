export default function KingsDifference() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-xs uppercase tracking-[.25em] text-light-grey/70 mb-2">Certified Professionals</div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold">Why Smart Vehicle Owners Choose King&apos;s Over the Competition</h2>
          <p className="text-light-grey/90 text-sm md:text-base mt-2 max-w-2xl mx-auto">Quality that&apos;s immediately visible and guaranteed to last.</p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {[
            { value: '350+', label: 'Google Reviews' },
            { value: '25+', label: 'Years of Family Excellence' },
            { value: '20,000+', label: 'Vehicles Protected' },
            { value: '100%', label: '5-Star Reviews' },
          ].map((item) => (
            <div key={item.label} className="tile-gold h-28 flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold tracking-tight">{item.value}</div>
              <div className="text-xs/5 opacity-90 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Short narrative / solution bullets (kept concise) */}
        <div className="surface-king p-6 md:p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">The Cost of Waiting</h3>
              <ul className="text-light-grey text-sm space-y-1 list-disc pl-5">
                <li>Interior replacement can reach $3,000–$8,000+</li>
                <li>Increased fuel usage from overworked AC</li>
                <li>UV damage to skin and interior materials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">King&apos;s Proven Protection</h3>
              <ul className="text-light-grey text-sm space-y-1 list-disc pl-5">
                <li>Computer-cut precision for perfect fit</li>
                <li>Premium ceramic tech for lasting performance</li>
                <li>Meticulous installation and zero‑tolerance QC</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Lifetime Confidence</h3>
              <p className="text-light-grey text-sm">Backed by an industry‑leading lifetime warranty—no bubbling, peeling, or fading.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
