export default function Faqs() {
  const faqs = [
    {
      q: 'Will my windows be too dark or look “aftermarket”?',
      a:
        "We help you choose the right shade for comfort, visibility, and legal compliance. Our computer-cut patterns ensure a factory‑level fit with clean edges that look intentional, not aftermarket.",
    },
    {
      q: 'How long does installation take?',
      a:
        'Most vehicles are completed in 2–3 hours. We never rush quality—each vehicle receives the time needed for perfect results. Relax in our lounge with Wi‑Fi or drop off and return later.',
    },
    {
      q: 'Will tint interfere with electronics or cell signal?',
      a:
        'No. We use premium ceramic films that do not interfere with electronics or signals. You get heat rejection and UV protection without compromise.',
    },
    {
      q: 'What if I notice an issue after installation?',
      a:
        'Your satisfaction is guaranteed. Any concern within 30 days is addressed immediately at no charge. Our lifetime warranty covers materials and workmanship—if tint bubbles, peels, or fades, we replace it free.',
    },
    {
      q: 'How far in advance should I book?',
      a:
        'We recommend booking 1–2 weeks ahead, especially during peak summer. Premium appointment slots fill quickly.',
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
          <p className="text-light-grey mt-2">Everything you need to feel confident before you book.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-black/20 p-4 open:bg-black/30">
              <summary className="list-none cursor-pointer flex items-center justify-between">
                <h3 className="text-white font-medium">{item.q}</h3>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-white/80 transition transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 pl-1 border-l-2 border-gold-accent/50">
                <p className="text-light-grey text-sm ml-3">{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-light-grey mb-3">Ready for answers specific to your vehicle?</p>
          <a href="/contact" className="pill-active inline-block">CONTACT OUR EXPERT TEAM</a>
        </div>
      </div>
    </section>
  )
}
