import Link from "next/link";
import { CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Review } from "@/components/Review";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden selection:bg-[#ff1101]/20">

      {/* Navbar removed as it is handled by layout.tsx */}

      <main className="flex-1 ">

        <Hero />
        <Review />
        {/* --- FEATURES GRID --- */}
        <section id="features" className="py-24 bg-gradient-to-b from-transparent to-black/5 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Protecting the Digital Commons</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Advanced AI models analyzing content in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass-card p-10 rounded-3xl hover:bg-[#ff1101]/5 transition-colors group border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5">
                <div className="size-14 rounded-2xl bg-[#ff1101]/10 flex items-center justify-center text-[#ff1101] mb-6 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="size-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Deepfake Detection</h3>
                <p className="text-muted-foreground leading-relaxed">Instantly identify AI-manipulated videos and audio on social platforms.</p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card p-10 rounded-3xl hover:bg-[#ff1101]/5 transition-colors group border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5">
                <div className="size-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="size-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Source Verification</h3>
                <p className="text-muted-foreground leading-relaxed">Trace content origins and verify credibility against trusted sources.</p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card p-10 rounded-3xl hover:bg-[#ff1101]/5 transition-colors group border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5">
                <div className="size-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="size-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Real-time Alerts</h3>
                <p className="text-muted-foreground leading-relaxed">Get notified immediately when you're viewing potentially misleading content.</p>
              </div>
            </div>
          </div>
        </section>
        <Pricing />

      </main>

      {/* Footer is handled by global layout or can be added here if not present globally. Given user said "no navbar", I'll leave footer simple here */}
      <footer className="py-12 border-t border-black/5 dark:border-white/5 text-sm text-muted-foreground bg-black/5 dark:bg-black/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-semibold">UnFaked</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#ff1101] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#ff1101] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#ff1101] transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
      <SmoothCursor />
    </div>
  );
}
