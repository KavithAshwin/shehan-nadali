import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Phone,
  Clock,
  Heart,
  Sparkles,
  ChevronDown,
  Navigation,
} from "lucide-react";
import oliveHero from "@/assets/olive-hero.jpg";
import oliveWreath from "@/assets/olive-wreath.png";
import venue from "@/assets/venue.jpg";
import coupleAsset from "@/assets/wedding-couple.jpeg";

export const Route = createFileRoute("/")({
  component: Invitation,
});

const WEDDING_DATE = new Date("2026-11-12T10:00:00+05:30");

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Invitation() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[oklch(0.9_0.03_95)] flex items-center justify-center p-0 sm:p-6">
      {/* Ambient desktop backdrop */}
      <div className="pointer-events-none fixed inset-0 hidden sm:block">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 20%, oklch(0.88 0.05 110 / 0.6), transparent 70%), radial-gradient(50% 40% at 80% 90%, oklch(0.78 0.06 90 / 0.5), transparent 70%)",
          }}
        />
      </div>

      {/* Phone frame */}
      <div className="relative w-full max-w-[440px] sm:max-w-[400px] sm:rounded-[3rem] sm:border sm:border-beige-deep/40 sm:shadow-[0_40px_120px_-30px_oklch(0.36_0.055_120_/_0.45)] overflow-hidden bg-background">
        <div className="relative w-full min-h-screen sm:min-h-0 sm:h-[860px] overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory">
          <AnimatePresence mode="wait">
            {!opened ? (
              <Envelope key="env" onOpen={() => setOpened(true)} />
            ) : (
              <Content key="content" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ---------------- ENVELOPE ---------------- */

function Envelope({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
      className="relative w-full min-h-screen sm:h-[860px] hero-bg flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      <motion.img
        src={oliveHero}
        alt=""
        aria-hidden
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/10 to-cream/90" />

      {/* Aurora blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-16 h-80 w-80 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.11 85 / 0.45), transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.5 0.07 118 / 0.4), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, -25, 0], y: [0, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full bg-gold/60"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 25}%`,
            boxShadow: "0 0 12px oklch(0.72 0.11 85 / 0.6)",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
        }}
        className="relative z-10 flex flex-col items-center gap-7"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="glass rounded-full px-5 py-2 flex items-center gap-2.5"
        >
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-olive-deep">
            Wedding Invitation
          </span>
          <motion.div
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            show: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="relative flex items-center justify-center py-6"
        >
          <motion.img
            src={oliveWreath}
            alt=""
            aria-hidden
            className="absolute h-72 w-72 object-contain opacity-90"
            animate={{ rotate: 360 }}
            transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden
            className="absolute h-56 w-56 rounded-full"
            style={{
              background: "radial-gradient(circle, oklch(1 0 0 / 0.7), oklch(0.94 0.03 90 / 0.3) 60%, transparent 75%)",
              filter: "blur(6px)",
            }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="glass relative z-10 flex flex-col items-center rounded-3xl px-8 py-6">
            <span className="font-script text-3xl text-olive leading-none">
              you're invited
            </span>
            <h1 className="font-display italic text-[44px] leading-[1.05] text-olive-deep mt-2 whitespace-nowrap">
              Shehan
              <span className="mx-2 font-script not-italic text-gold text-4xl">&</span>
              Nadali
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-6 bg-olive-deep/40" />
              <span className="text-[9px] uppercase tracking-[0.45em] text-olive-deep/70">
                Nov · 12 · 2026
              </span>
              <div className="h-px w-6 bg-olive-deep/40" />
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          }}
          className="text-[11px] uppercase tracking-[0.4em] text-olive/70 max-w-[240px]"
        >
          A celebration of love · Solis Hotel, Matara
        </motion.p>

        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
          }}
          onClick={onOpen}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="glass group relative mt-2 rounded-full px-8 py-3.5 text-olive-deep flex items-center gap-3 text-sm tracking-[0.15em] overflow-hidden"
        >
          <motion.span
            aria-hidden
            className="absolute inset-y-0 -left-1/2 w-1/2"
            style={{
              background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.6), transparent)",
            }}
            animate={{ x: ["0%", "400%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Heart className="h-4 w-4 fill-olive-deep" strokeWidth={0} />
          </motion.span>
          <span className="relative">Open Invitation</span>
        </motion.button>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
          }}
          className="flex flex-col items-center gap-1.5 text-olive-deep/50"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">tap to reveal</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* ---------------- CONTENT ---------------- */

function Content() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="relative"
    >
      <HeroSection />
      <PortraitSection />
      <CoupleSection />
      <CountdownSection />
      <CeremonySection />
      <VenueSection />
      <FamilySection />
      <ClosingSection />
    </motion.div>
  );
}

/* ---------------- SECTIONS ---------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

function SplitWord({ word, delay = 0 }: { word: string; delay?: number }) {
  return (
    <span className="inline-flex overflow-hidden pb-2">
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.1,
            delay: delay + i * 0.06,
            ease: EASE,
          }}
          className="inline-block"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

  const [tick, setTick] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTick(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const timeStr = tick.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full snap-start overflow-hidden bg-olive-deep"
    >
      {/* Backdrop: couple portrait, cinematic */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        initial={{ scale: 1.18, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
        className="absolute inset-0"
      >
        <img
          src={coupleAsset}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* olive foliage layer for texture */}
        <img
          src={oliveHero}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover mix-blend-soft-light opacity-60"
        />
      </motion.div>

      {/* Cinematic veils */}
      <motion.div
        style={{ opacity: veilOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-olive-deep/60 via-olive-deep/10 to-olive-deep/85"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,oklch(0.36_0.055_120_/_0.9),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,oklch(0.72_0.11_85_/_0.25),transparent_70%)]" />

      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.85 0 0 0 0 0.7 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Aurora orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-16 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.11 85 / 0.55), transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.5 0.07 118 / 0.6), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating specks */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-1 w-1 rounded-full bg-gold"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            boxShadow: "0 0 10px oklch(0.72 0.11 85 / 0.9)",
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            delay: (i * 0.35) % 6,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top status bar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: EASE }}
        className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 pt-4"
      >
        <div className="glass-dark rounded-full px-3 py-1.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[9px] uppercase tracking-[0.35em] text-cream/90">
            live · {timeStr}
          </span>
        </div>
        <div className="glass-dark rounded-full px-3 py-1.5">
          <span className="text-[9px] uppercase tracking-[0.35em] text-cream/90">
            S · N &nbsp;·&nbsp; MMXXVI
          </span>
        </div>
      </motion.div>

      {/* Corner ornaments */}
      <svg
        aria-hidden
        className="absolute top-16 left-4 h-16 w-16 text-gold/70"
        viewBox="0 0 64 64"
        fill="none"
      >
        <motion.path
          d="M2 2 L2 22 M2 2 L22 2"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
        />
        <motion.circle
          cx="2"
          cy="2"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6 }}
        />
      </svg>
      <svg
        aria-hidden
        className="absolute top-16 right-4 h-16 w-16 text-gold/70"
        viewBox="0 0 64 64"
        fill="none"
      >
        <motion.path
          d="M62 2 L62 22 M62 2 L42 2"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
        />
        <motion.circle
          cx="62"
          cy="2"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6 }}
        />
      </svg>

      {/* Main content */}
      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 flex h-full flex-col items-center justify-end pb-16 px-6 text-center"
      >
        {/* Monogram badge with conic border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
          className="relative mb-6"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, oklch(0.72 0.11 85 / 0.9), transparent 30%, transparent 60%, oklch(0.72 0.11 85 / 0.6), transparent 90%)",
              filter: "blur(2px)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <div className="glass-dark relative h-16 w-16 rounded-full flex items-center justify-center">
            <span className="font-display italic text-2xl text-cream">S</span>
            <span className="font-script text-lg text-gold -mx-0.5">&</span>
            <span className="font-display italic text-2xl text-cream">N</span>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="font-script text-3xl text-gold"
        >
          forever begins
        </motion.span>

        <h1 className="font-display italic text-[64px] leading-[0.95] text-cream mt-3 tracking-tight">
          <SplitWord word="Shehan" delay={0.55} />
        </h1>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
          className="font-script text-5xl text-gold my-1 drop-shadow-[0_2px_20px_oklch(0.72_0.11_85_/_0.6)]"
        >
          &
        </motion.span>
        <h1 className="font-display italic text-[64px] leading-[0.95] text-cream tracking-tight">
          <SplitWord word="Nadali" delay={1.15} />
        </h1>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: EASE }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="glass-dark rounded-full px-4 py-2 flex items-center gap-2">
            <Calendar className="h-3 w-3 text-gold" strokeWidth={2} />
            <span className="text-[10px] uppercase tracking-[0.35em] text-cream">
              12 · Nov · 26
            </span>
          </div>
          <div className="h-1 w-1 rounded-full bg-gold" />
          <div className="glass-dark rounded-full px-4 py-2 flex items-center gap-2">
            <MapPin className="h-3 w-3 text-gold" strokeWidth={2} />
            <span className="text-[10px] uppercase tracking-[0.35em] text-cream">
              Matara
            </span>
          </div>
        </motion.div>

        {/* Marquee ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="mt-8 w-full overflow-hidden"
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-cream/50"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-8 shrink-0">
                <span>Poruwa Ceremony</span>
                <span className="text-gold">✦</span>
                <span>10:00 AM</span>
                <span className="text-gold">✦</span>
                <span>Solis Hotel</span>
                <span className="text-gold">✦</span>
                <span>November Twelfth</span>
                <span className="text-gold">✦</span>
                <span>Two Thousand Twenty Six</span>
                <span className="text-gold">✦</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="mt-8 flex flex-col items-center gap-2 text-cream/70"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">
            scroll to explore
          </span>
          <div className="relative h-8 w-5 rounded-full border border-cream/40 flex items-start justify-center pt-1.5">
            <motion.div
              className="h-1.5 w-1 rounded-full bg-gold"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PortraitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const frameScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <SnapSection className="relative bg-cream overflow-hidden">
      <div ref={ref} className="relative px-6 py-16">
        {/* Ambient aurora */}
        <motion.div
          aria-hidden
          style={{ opacity: glowOpacity }}
          className="absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.11 85 / 0.55), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </motion.div>

        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-olive/70">
            The beloved couple
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display italic text-4xl text-center text-olive-deep mt-3">
            Shehan
            <span className="mx-2 font-script text-3xl text-gold">&</span>
            Nadali
          </h2>
        </FadeUp>

        {/* Portrait frame */}
        <motion.div
          style={{ scale: frameScale }}
          className="relative mt-8 mx-auto max-w-[340px]"
        >
          {/* Rotating wreath backdrop */}
          <motion.img
            src={oliveWreath}
            alt=""
            aria-hidden
            className="absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] object-contain opacity-30"
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          />

          {/* Glass portrait card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative rounded-[2rem] p-3 shadow-[0_30px_80px_-20px_oklch(0.36_0.055_120_/_0.35)]"
            style={{ transformPerspective: 1000 }}
          >
            {/* Corner sparkles */}
            {[
              { top: "-8px", left: "-8px" },
              { top: "-8px", right: "-8px" },
              { bottom: "-8px", left: "-8px" },
              { bottom: "-8px", right: "-8px" },
            ].map((pos, i) => (
              <motion.div
                key={i}
                aria-hidden
                className="absolute h-3 w-3 rounded-full bg-gold"
                style={{
                  ...pos,
                  boxShadow: "0 0 12px oklch(0.72 0.11 85 / 0.9)",
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

            <div className="relative overflow-hidden rounded-[1.6rem] aspect-[4/5]">
              <motion.img
                src={coupleAsset}
                alt="Shehan and Nadali in traditional wedding attire"
                loading="lazy"
                style={{ y: imgY }}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* Shimmer sweep */}
              <motion.div
                aria-hidden
                className="absolute inset-y-0 -left-1/3 w-1/3 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.35), transparent)",
                }}
                animate={{ x: ["0%", "500%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3,
                }}
              />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-olive-deep/50 to-transparent" />
              {/* Ornament chip */}
              <div className="absolute inset-x-0 bottom-3 flex justify-center">
                <div className="glass rounded-full px-4 py-1.5 flex items-center gap-2">
                  <Heart
                    className="h-3 w-3 text-gold fill-gold"
                    strokeWidth={0}
                  />
                  <span className="text-[9px] uppercase tracking-[0.4em] text-olive-deep">
                    Forever
                  </span>
                  <Heart
                    className="h-3 w-3 text-gold fill-gold"
                    strokeWidth={0}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <FadeUp delay={0.4}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-olive/40" />
            <span className="font-script text-2xl text-olive">two souls, one story</span>
            <div className="h-px w-10 bg-olive/40" />
          </div>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

function CoupleSection() {
  return (
    <SnapSection className="bg-cream">
      <div className="px-8 py-20">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-olive/70">
            Two hearts · one journey
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display italic text-4xl text-center text-olive-deep mt-4 leading-tight text-balance">
            "And in her smile I see something more beautiful than the stars."
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-olive/40" />
            <Heart
              className="h-3 w-3 text-olive fill-olive"
              strokeWidth={0}
            />
            <div className="h-px w-10 bg-olive/40" />
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="glass mt-10 rounded-3xl p-6 text-center">
            <p className="text-sm leading-relaxed text-ink/80 font-light">
              With hearts full of joy and gratitude, we invite you to share in
              the beginning of our forever. Your presence will be the greatest
              blessing of our special day.
            </p>
          </div>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
  const items = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds },
  ];

  return (
    <SnapSection className="relative bg-olive-deep text-cream overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 20%, oklch(0.6 0.08 118 / 0.6), transparent 70%), radial-gradient(50% 40% at 80% 90%, oklch(0.72 0.11 85 / 0.4), transparent 70%)",
        }}
      />
      <div className="relative px-8 py-20">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-cream/60">
            Counting the moments
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display italic text-4xl text-center mt-3">
            Until we say <em>I do</em>
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-4 gap-3">
          {items.map((it, i) => (
            <FadeUp key={it.label} delay={0.15 + i * 0.08}>
              <div className="glass-dark rounded-2xl px-2 py-4 text-center">
                <motion.div
                  key={it.value}
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-display text-3xl leading-none text-cream"
                >
                  {String(it.value).padStart(2, "0")}
                </motion.div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-cream/60 mt-2">
                  {it.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.6}>
          <div className="mt-10 flex items-center justify-center gap-2 text-cream/70">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-[0.35em]">
              Save the date
            </span>
          </div>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

function CeremonySection() {
  return (
    <SnapSection className="bg-cream">
      <div className="px-8 py-20">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-olive/70">
            The ceremony
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display italic text-4xl text-center text-olive-deep mt-3">
            Poruwa Ceremony
          </h2>
        </FadeUp>

        <div className="mt-10 space-y-4">
          <FadeUp delay={0.2}>
            <InfoCard
              icon={<Calendar className="h-5 w-5" strokeWidth={1.5} />}
              label="Date"
              value="Thursday, November 12"
            />
          </FadeUp>
          <FadeUp delay={0.3}>
            <InfoCard
              icon={<Clock className="h-5 w-5" strokeWidth={1.5} />}
              label="Auspicious Time"
              value="10:00 AM"
            />
          </FadeUp>
          <FadeUp delay={0.4}>
            <InfoCard
              icon={<MapPin className="h-5 w-5" strokeWidth={1.5} />}
              label="Venue"
              value="Solis Hotel, Matara"
            />
          </FadeUp>
        </div>
      </div>
    </SnapSection>
  );
}

function VenueSection() {
  return (
    <SnapSection className="bg-cream">
      <div className="px-6 py-16">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-olive/70">
            The venue
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display italic text-4xl text-center text-olive-deep mt-3">
            Solis Hotel
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-8 relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src={venue}
              alt="Solis Hotel Matara"
              loading="lazy"
              width={1216}
              height={832}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/10 to-transparent" />
            <div className="absolute inset-x-4 bottom-4">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-olive-deep">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  <span className="text-sm font-medium">Matara, Sri Lanka</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Solis+Hotel+Matara"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-olive-deep text-cream py-2.5 text-xs uppercase tracking-[0.25em]"
                >
                  <Navigation className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

function FamilySection() {
  return (
    <SnapSection className="bg-cream">
      <div className="px-8 py-20">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-olive/70">
            With the blessings of
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display italic text-4xl text-center text-olive-deep mt-3">
            Our Families
          </h2>
        </FadeUp>

        <div className="mt-10 space-y-5">
          <FadeUp delay={0.2}>
            <FamilyCard
              side="Bride's Parents"
              father="Mr. Nandana Rohan"
              mother="Mrs. Champa Rajapaksha"
              phone="077 507 7112"
            />
          </FadeUp>
          <FadeUp delay={0.3}>
            <FamilyCard
              side="Groom's Parents"
              father="Mr. Suranga Lakmal"
              mother="Mrs. Ayesha Liyanage"
              phone="071 481 1715"
            />
          </FadeUp>
        </div>
      </div>
    </SnapSection>
  );
}

function ClosingSection() {
  return (
    <SnapSection className="relative bg-cream overflow-hidden">
      <img
        src={oliveHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply scale-x-[-1]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/30 to-cream" />

      <div className="relative px-8 py-24 flex flex-col items-center text-center">
        <FadeUp>
          <span className="font-script text-3xl text-olive">with love</span>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="font-display italic text-5xl text-olive-deep mt-2 leading-[1]">
            See you there
          </h2>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="glass mt-10 rounded-3xl px-8 py-6">
            <p className="text-xs uppercase tracking-[0.35em] text-olive-deep/70">
              12 · 11
            </p>
            <p className="font-display italic text-3xl text-olive-deep mt-2">
              Shehan & Nadali
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.5}>
          <div className="mt-10 flex items-center gap-2 text-olive/70">
            <div className="h-px w-8 bg-olive/40" />
            <Heart
              className="h-3 w-3 text-olive fill-olive"
              strokeWidth={0}
            />
            <div className="h-px w-8 bg-olive/40" />
          </div>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

/* ---------------- SHARED ---------------- */

function SnapSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`snap-start w-full ${className}`}>{children}</section>
  );
}

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="glass rounded-2xl p-5 flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-olive-deep text-cream flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-[0.3em] text-olive/70">
          {label}
        </p>
        <p className="font-display italic text-xl text-olive-deep mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );
}

function FamilyCard({
  side,
  father,
  mother,
  phone,
}: {
  side: string;
  father: string;
  mother: string;
  phone: string;
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <p className="text-[10px] uppercase tracking-[0.35em] text-olive/70 text-center">
        {side}
      </p>
      <div className="mt-4 space-y-1 text-center">
        <p className="font-display italic text-lg text-olive-deep">{father}</p>
        <p className="font-script text-xl text-gold">&</p>
        <p className="font-display italic text-lg text-olive-deep">{mother}</p>
      </div>
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-cream/60 border border-olive/20 py-2.5 text-olive-deep text-sm"
      >
        <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
        {phone}
      </a>
    </div>
  );
}