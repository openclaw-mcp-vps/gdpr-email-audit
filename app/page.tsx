export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Audit Email Lists for{' '}
          <span className="text-[#58a6ff]">GDPR Compliance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your CSV or Excel email list and instantly identify missing consent records,
          expired permissions, and contacts requiring deletion — with a full PDF report.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Auditing — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for free preview. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['CSV & Excel Upload','Consent Gap Detection','Expiry Tracking','Deletion Flags','Compliance Score','PDF Report'].map(f => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited email list uploads',
              'GDPR consent gap analysis',
              'Expired permission detection',
              'Deletion requirement flags',
              'Compliance score dashboard',
              'Downloadable PDF reports',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What file formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support CSV and Excel (.xlsx, .xls) files. Your list should include at minimum an email column; consent date and source columns unlock deeper analysis.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data stored after the audit?</h3>
            <p className="text-[#8b949e] text-sm">No. Uploaded files are processed in-memory and deleted immediately after your report is generated. We never store your contacts' personal data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does this make me fully GDPR compliant?</h3>
            <p className="text-[#8b949e] text-sm">This tool identifies common compliance gaps and provides actionable recommendations. For full legal compliance, consult a qualified data protection officer or legal counsel.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} GDPR Email Audit. Not legal advice.
      </footer>
    </main>
  )
}
