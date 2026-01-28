export default function CV() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-mono selection:bg-[#4ade80]/20">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        <header className="mb-8 animate-in">
          <div className="flex items-center justify-between">
            <a href="/" className="text-base font-medium hover:text-[#4ade80] transition-colors">
              ← back
            </a>
            <a
              href="/cv.pdf"
              download="Millen_CV.pdf"
              className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333] rounded text-sm transition-colors"
            >
              download cv
            </a>
          </div>
        </header>

        <div className="animate-in delay-1">
          <iframe
            src="/cv.pdf"
            className="w-full h-[85vh] rounded border border-[#1a1a1a]"
            title="CV"
          />
        </div>
      </div>
    </main>
  )
}
