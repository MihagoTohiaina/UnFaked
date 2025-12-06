import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";
import Tweet from "@/components/TweetCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden selection:bg-[#ff1101]/20">

      {/* Navbar removed as it is handled by layout.tsx */}

      <main className="flex-1 ">

        {/* --- HERO SECTION --- */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden min-h-[90vh] flex items-center justify-center">
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#ff1101]/20 rounded-[100%] blur-[100px] pointer-events-none -z-10 opacity-40 mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-[100%] blur-[120px] pointer-events-none -z-10 opacity-30" />

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff1101]/10 border border-[#ff1101]/20 text-xs font-medium text-[#ff1101] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              AI-Powered Disinformation Detection
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 leading-[0.9]">
              Restore Truth <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff1101] via-orange-500 to-purple-600">
                In The Age of AI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              UnFaked protects your reality. Detect deepfakes and verify content credibility instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Link href="/tools" className="h-14 px-8 rounded-full bg-[#ff1101] text-white font-bold hover:bg-[#ff1101]/90 transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_#ff1101] hover:shadow-[0_0_60px_-15px_#ff1101] hover:scale-105">
                Start Verifying
                <ArrowRight className="size-5" />
              </Link>
              <Link href="/demo" className="h-14 px-8 rounded-full bg-secondary/50 text-secondary-foreground border border-black/5 dark:border-white/10 hover:bg-secondary transition-all flex items-center gap-2 backdrop-blur-sm font-semibold">
                How it works
              </Link>
            </div>

            {/* Platform Icons Floating (Visual only) */}
            <div className="mt-24 flex flex-wrap justify-center gap-8 opacity-60">
              {/* Visual representation of platforms supported */}
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">TikTok</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">YouTube</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">Instagram</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">Twitter / X</div>
            </div>
          </div>
        </section>
        <div className="flex justify-center align-center content-center">
        <Tweet />
        </div>
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
    </div>
  );
}
