import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Phone,
  Clock,
  Heart,
  Users,
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
const EASE = [0.22, 1, 0.36, 1] as const;

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

/* ================= SHELL ================= */

function Invitation() {
  const [opened, setOpened] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      <div className="relative w-full max-w-[440px] sm:max-w-[400px] sm:rounded-[3rem] sm:border sm:border-beige-deep/40 sm:shadow-[0_40px_120px_-30px_oklch(0.36_0.055_120_/_0.45)] overflow-hidden bg-olive-deep">
        <div
          ref={scrollRef}
          className="relative w-full min-h-screen sm:min-h-0 sm:h-[860px] overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-proximity"
        >
          <AnimatePresence mode="wait">
            {!opened ? (
              <Envelope key="env" onOpen={() => setOpened(true)} />
            ) : (
              <Content key="content" />
            )}
          </AnimatePresence>
        </div>

        {/* Floating liquid-glass dock */}
        <AnimatePresence>
          {opened && <GlassDock scrollRef={scrollRef} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================= GRAIN ================= */

function Grain({ opacity = 0.1 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.85 0 0 0 0 0.7 0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}

/* ================= ORNAMENTS ================= */

function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="48" cy="48" r="46" stroke="currentColor" strokeWidth="0.75" opacity="0.75" />
      <circle cx="48" cy="48" r="41" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <text
        x="48"
        y="55"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        fontSize="30"
        fill="currentColor"
      >
        S·N
      </text>
      <text
        x="48"
        y="74"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="6"
        letterSpacing="3"
        fill="currentColor"
        opacity="0.8"
      >
        MMXXVI
      </text>
    </svg>
  );
}

function OliveSprig({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 24" fill="none" className={className}>
      <path d="M4 12 H 116" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <g transform="translate(60 12)">
        <path
          d="M-14 0 C -8 -7, 8 -7, 14 0 C 8 7, -8 7, -14 0 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <ellipse cx="-20" cy="-1.5" rx="4.5" ry="2" fill="currentColor" opacity="0.55" transform="rotate(-18 -20 -1.5)" />
        <ellipse cx="20" cy="-1.5" rx="4.5" ry="2" fill="currentColor" opacity="0.55" transform="rotate(18 20 -1.5)" />
        <circle r="1.4" fill="currentColor" />
      </g>
    </svg>
  );
}

/* ================= KINETIC TYPE ================= */

function SplitWord({
  word,
  delay = 0,
  className = "",
}: {
  word: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex overflow-hidden pb-2 ${className}`}>
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "115%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: delay + i * 0.055, ease: EASE }}
          className="inline-block"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ================= ENVELOPE ================= */

function Envelope({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.06,
        filter: "blur(14px)",
        transition: { duration: 0.9, ease: EASE },
      }}
      className="relative w-full min-h-screen sm:h-[860px] flex flex-col items-center justify-center px-7 text-center overflow-hidden bg-olive-deep"
    >
      {/* Blurred portrait wash behind the glass */}
      <motion.img
        src={coupleAsset}
        alt=""
        aria-hidden
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 9, ease: EASE }}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        style={{ filter: "blur(6px) saturate(1.1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-olive-deep/70 via-olive-deep/25 to-olive-deep/90" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,oklch(0.72_0.11_85_/_0.14),transparent_60%)]" />
      <Grain opacity={0.09} />

      {/* Drifting light orbs, seen through the glass */}
      <motion.div
        aria-hidden
        className="absolute -top-20 -left-16 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.11 85 / 0.35), transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, 34, 0], y: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.6 0.08 118 / 0.45), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -26, 0], y: [0, -16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 0.25 } } }}
        className="relative z-10 flex w-full flex-col items-center gap-8"
      >
        {/* Floating liquid-glass invitation card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 34, scale: 0.94 },
            show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.3, ease: EASE } },
          }}
          className="relative w-full max-w-[318px]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-liquid glass-rim glass-sheen relative rounded-[2rem] px-8 pb-9 pt-10 text-cream"
          >
            {/* Rotating wreath behind the names */}
            <motion.img
              src={oliveWreath}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-64 w-64 -translate-y-1/2 object-contain opacity-25"
              animate={{ rotate: 360 }}
              transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            />

            <Monogram className="relative z-10 mx-auto h-14 w-14 text-gold" />

            <p className="relative z-10 mt-6 text-[9px] uppercase tracking-[0.55em] text-cream/75">
              The Wedding of
            </p>

            <h1 className="relative z-10 mt-4 font-display italic text-[44px] leading-[1.04]">
              Shehan
            </h1>
            <span className="relative z-10 block font-script text-3xl leading-none text-gold my-0.5">
              &
            </span>
            <h1 className="relative z-10 font-display italic text-[44px] leading-[1.04]">
              Nadali
            </h1>

            <div className="relative z-10 mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.45em] text-cream/85">
                12 · 11 · 2026
              </span>
              <span className="h-px w-8 bg-gold/60" />
            </div>
            <p className="relative z-10 mt-2 text-[9px] uppercase tracking-[0.35em] text-cream/55">
              Solis Hotel · Matara
            </p>
          </motion.div>
        </motion.div>

        {/* Open button — liquid glass pill */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
          }}
          onClick={onOpen}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="glass-liquid-deep glass-sheen relative rounded-full px-9 py-4 text-cream flex items-center gap-3 text-[12px] uppercase tracking-[0.3em]"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Heart className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
          </motion.span>
          <span className="relative z-10">Open Invitation</span>
        </motion.button>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, delay: 0.3 } } }}
          className="flex flex-col items-center gap-1.5 text-cream/45"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">tap to reveal</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* ================= DOCK ================= */

const DOCK_ITEMS = [
  { id: "hero", label: "Home", icon: Heart },
  { id: "countdown", label: "Date", icon: Calendar },
  { id: "venue", label: "Venue", icon: MapPin },
  { id: "family", label: "Family", icon: Users },
] as const;

function GlassDock({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [active, setActive] = useState("hero");
  const clickLockUntil = useRef(0);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < clickLockUntil.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // root: null observes against the viewport and correctly accounts
      // for clipping by the inner scroll container on desktop
      { root: null, threshold: 0.4 },
    );
    for (const item of DOCK_ITEMS) {
      const el = root.querySelector(`#${item.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [scrollRef]);

  const go = (id: string) => {
    // Activate immediately on tap, and briefly ignore scroll-spy so
    // intermediate sections don't flicker the highlight mid-scroll
    setActive(id);
    clickLockUntil.current = Date.now() + 1000;
    scrollRef.current
      ?.querySelector(`#${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 26, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 26 }}
      transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
      className="pointer-events-none fixed sm:absolute inset-x-0 bottom-5 z-40 flex justify-center"
      aria-label="Invitation sections"
    >
      <div className="glass-liquid-deep glass-rim pointer-events-auto flex items-center gap-1 rounded-full p-1.5">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              aria-label={item.label}
              className="relative flex h-11 items-center gap-2 rounded-full px-4 text-cream/80 transition-colors duration-300"
            >
              {isActive && (
                <motion.span
                  layoutId="dock-pill"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gold/25 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.4)]"
                />
              )}
              <Icon
                className={`relative z-10 h-[17px] w-[17px] ${isActive ? "text-gold" : ""}`}
                strokeWidth={1.5}
              />
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="relative z-10 overflow-hidden whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-cream"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}

/* ================= CONTENT ================= */

function Content() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, ease: EASE } }}
      className="relative bg-cream"
    >
      <HeroSection />
      <InvitationSection />
      <PortraitSection />
      <CountdownSection />
      <CeremonySection />
      <VenueSection />
      <FamilySection />
      <ClosingSection />
    </motion.div>
  );
}

/* ================= HERO ================= */

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const plateY = useTransform(scrollYProgress, [0, 1], [0, -46]);
  const plateOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] w-full snap-start overflow-hidden bg-olive-deep"
    >
      {/* Portrait backdrop */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        initial={{ scale: 1.14, opacity: 0 }}
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
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-olive-deep/50 via-transparent to-olive-deep/80" />
      <Grain opacity={0.1} />

      {/* Glass status pills */}
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
        className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 pt-5"
      >
        <div className="glass-liquid-deep rounded-full px-4 py-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-cream/90">
            S &amp; N
          </span>
        </div>
        <div className="glass-liquid-deep rounded-full px-4 py-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-cream/90">
            MMXXVI
          </span>
        </div>
      </motion.div>

      {/* Bottom masthead — one liquid glass plate */}
      <motion.div
        style={{ y: plateY, opacity: plateOpacity }}
        className="absolute inset-x-4 bottom-24 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
          className="glass-liquid-deep glass-rim glass-sheen rounded-[2rem] px-7 pb-7 pt-8 text-center text-cream"
        >
          <p className="relative z-10 text-[9px] uppercase tracking-[0.55em] text-gold">
            The Wedding of
          </p>

          <h1 className="relative z-10 mt-3 font-display italic text-[52px] leading-[0.98]">
            <SplitWord word="Shehan" delay={1.0} />
          </h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
            className="relative z-10 block font-script text-4xl leading-none text-gold"
          >
            &
          </motion.span>
          <h1 className="relative z-10 font-display italic text-[52px] leading-[0.98]">
            <SplitWord word="Nadali" delay={1.7} />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.4 }}
            className="relative z-10 mt-5 flex items-center justify-center gap-3 text-cream/90"
          >
            <span className="h-px w-9 bg-gold/60" />
            <span className="text-[10px] uppercase tracking-[0.4em]">
              12 · 11 · 2026
            </span>
            <span className="h-px w-9 bg-gold/60" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.7 }}
            className="relative z-10 mt-2 text-[9px] uppercase tracking-[0.35em] text-cream/60"
          >
            Solis Hotel · Matara · Sri Lanka
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ================= INVITATION WORDS ================= */

function InvitationSection() {
  return (
    <SnapSection className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="absolute -top-24 right-[-30%] h-80 w-80 rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.11 85 / 0.25), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div className="relative px-9 py-24 flex flex-col items-center text-center">
        <FadeUp>
          <span className="font-script text-3xl text-olive">
            together with their families
          </span>
        </FadeUp>

        <FadeUp delay={0.12}>
          <h2 className="mt-6 font-display italic text-[33px] leading-snug text-olive-deep text-balance">
            request the honour of your presence at the celebration of their
            marriage
          </h2>
        </FadeUp>

        <FadeUp delay={0.24}>
          <OliveSprig className="mt-10 h-6 w-40 text-gold" />
        </FadeUp>

        <FadeUp delay={0.34}>
          <div className="glass-liquid glass-rim mt-10 max-w-[320px] rounded-[1.75rem] px-7 py-6">
            <p className="relative z-10 text-sm leading-[1.9] font-light text-ink/80">
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

/* ================= PORTRAIT (3D tilt glass card) ================= */

function PortraitSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(30);

  const srx = useSpring(rx, { stiffness: 140, damping: 18 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18 });
  const sGlareX = useSpring(glareX, { stiffness: 120, damping: 20 });
  const sGlareY = useSpring(glareY, { stiffness: 120, damping: 20 });

  const glare = useMotionTemplate`radial-gradient(60% 45% at ${sGlareX}% ${sGlareY}%, oklch(1 0 0 / 0.35), transparent 70%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 12);
    glareX.set((px + 0.5) * 100);
    glareY.set((py + 0.5) * 100);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
    glareX.set(50);
    glareY.set(30);
  };

  return (
    <SnapSection className="relative overflow-hidden bg-cream">
      <div className="relative px-8 pb-24 pt-6 flex flex-col items-center">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-gold">
            The beloved couple
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-4 text-center font-display italic text-4xl text-olive-deep">
            Shehan
            <span className="mx-2 font-script text-3xl not-italic text-gold">&</span>
            Nadali
          </h2>
        </FadeUp>

        <FadeUp delay={0.22}>
          <div style={{ perspective: 900 }} className="mt-10">
            <motion.div
              ref={cardRef}
              onPointerMove={handleMove}
              onPointerLeave={handleLeave}
              style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
              className="glass-liquid glass-rim relative w-[292px] rounded-[2rem] p-3"
            >
              <div className="relative overflow-hidden rounded-[1.55rem] aspect-[3/4]">
                <img
                  src={coupleAsset}
                  alt="Shehan and Nadali in traditional wedding attire"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                {/* Pointer-tracked specular glare */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: glare }}
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-olive-deep/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-4 flex justify-center">
                  <div className="glass-liquid-deep rounded-full px-5 py-2">
                    <span className="text-[9px] uppercase tracking-[0.45em] text-cream">
                      Forever
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeUp>

        <FadeUp delay={0.34}>
          <p className="mt-10 max-w-[280px] text-center font-display italic text-xl leading-relaxed text-olive-deep text-balance">
            "And in her smile I see something more beautiful than the stars."
          </p>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

/* ================= COUNTDOWN ================= */

function RollingDigits({ value }: { value: number }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="flex justify-center overflow-hidden">
      {text.split("").map((ch, i) => (
        <div key={i} className="relative h-[42px] w-[22px] overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={ch + i + text}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-0 flex items-center justify-center font-display text-[38px] leading-none text-cream tabular-nums"
            >
              {ch}
            </motion.span>
          </AnimatePresence>
        </div>
      ))}
    </div>
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
    <SnapSection id="countdown" className="relative overflow-hidden bg-olive-deep text-cream">
      <img
        src={oliveHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,oklch(0.72_0.11_85_/_0.16),transparent_65%)]" />
      <Grain opacity={0.08} />

      <div className="relative px-7 py-24">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-gold">
            Counting the moments
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-4 text-center font-display italic text-4xl">
            Until we say <em>I&nbsp;do</em>
          </h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-4 gap-2.5">
          {items.map((it, i) => (
            <FadeUp key={it.label} delay={0.18 + i * 0.08}>
              <div className="glass-liquid-deep glass-rim rounded-2xl px-1 pb-4 pt-5 text-center">
                <RollingDigits value={it.value} />
                <div className="relative z-10 mt-2.5 text-[8px] uppercase tracking-[0.3em] text-cream/55">
                  {it.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.55}>
          <div className="mt-12 flex items-center justify-center gap-4 text-cream/60">
            <span className="h-px w-8 bg-gold/40" />
            <span className="text-[10px] uppercase tracking-[0.45em]">Save the date</span>
            <span className="h-px w-8 bg-gold/40" />
          </div>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

/* ================= CEREMONY ================= */

function CeremonySection() {
  const rows = [
    {
      icon: <Calendar className="h-4 w-4" strokeWidth={1.25} />,
      label: "The Date",
      value: "Thursday, November 12",
      note: "Two thousand twenty six",
    },
    {
      icon: <Clock className="h-4 w-4" strokeWidth={1.25} />,
      label: "Auspicious Time",
      value: "10:00 in the morning",
      note: "Poruwa ceremony",
    },
    {
      icon: <MapPin className="h-4 w-4" strokeWidth={1.25} />,
      label: "The Venue",
      value: "Solis Hotel",
      note: "Matara, Sri Lanka",
    },
  ];

  return (
    <SnapSection className="bg-cream">
      <div className="px-8 py-24">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-gold">
            The ceremony
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-4 text-center font-display italic text-4xl text-olive-deep">
            Poruwa Ceremony
          </h2>
        </FadeUp>

        <div className="relative mx-auto mt-14 max-w-[300px]">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          />
          <div className="space-y-12">
            {rows.map((row, i) => (
              <FadeUp key={row.label} delay={0.15 + i * 0.12}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="glass-liquid glass-rim relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-olive-deep">
                    <span className="relative z-10">{row.icon}</span>
                  </div>
                  <p className="mt-4 text-[9px] uppercase tracking-[0.45em] text-olive/70">
                    {row.label}
                  </p>
                  <p className="mt-2 font-display italic text-2xl text-olive-deep">
                    {row.value}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.15em] text-ink/55">
                    {row.note}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </SnapSection>
  );
}

/* ================= VENUE ================= */

function VenueSection() {
  return (
    <SnapSection id="venue" className="relative overflow-hidden bg-olive-deep">
      <div className="relative">
        <img
          src={venue}
          alt="Solis Hotel, Matara"
          loading="lazy"
          width={1216}
          height={832}
          className="h-[580px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-deep/25 via-transparent to-olive-deep/70" />
        <Grain opacity={0.08} />

        <div className="absolute inset-x-4 bottom-6">
          <FadeUp>
            <div className="glass-liquid-deep glass-rim glass-sheen rounded-[2rem] px-7 py-7 text-center text-cream">
              <p className="relative z-10 text-[9px] uppercase tracking-[0.5em] text-gold">
                The venue
              </p>
              <h2 className="relative z-10 mt-3 font-display italic text-4xl">
                Solis Hotel
              </h2>
              <p className="relative z-10 mt-1.5 text-[10px] uppercase tracking-[0.4em] text-cream/70">
                Matara · Sri Lanka
              </p>
              <a
                href="https://maps.google.com/?q=Solis+Hotel+Matara"
                target="_blank"
                rel="noreferrer"
                className="relative z-10 mt-6 inline-flex items-center gap-3 rounded-full border border-gold/60 bg-gold/10 px-8 py-3 text-[10px] uppercase tracking-[0.35em] text-cream transition-colors duration-300 hover:bg-gold/20"
              >
                <Navigation className="h-3.5 w-3.5" strokeWidth={1.25} />
                Get directions
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </SnapSection>
  );
}

/* ================= FAMILIES ================= */

function FamilySection() {
  return (
    <SnapSection id="family" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="absolute -bottom-20 left-[-30%] h-80 w-80 rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, oklch(0.6 0.08 118 / 0.22), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div className="relative px-8 py-24">
        <FadeUp>
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-gold">
            With the blessings of
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-4 text-center font-display italic text-4xl text-olive-deep">
            Our Families
          </h2>
        </FadeUp>

        <div className="mx-auto mt-12 max-w-[320px] space-y-6">
          <FadeUp delay={0.2}>
            <FamilyCard
              side="Parents of the Bride"
              father="Mr. Nandana Rohan"
              mother="Mrs. Champa Rajapaksha"
              phone="077 507 7112"
            />
          </FadeUp>
          <FadeUp delay={0.32}>
            <FamilyCard
              side="Parents of the Groom"
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
    <div className="glass-liquid glass-rim rounded-[1.9rem] px-7 py-7 text-center">
      <p className="relative z-10 text-[9px] uppercase tracking-[0.45em] text-olive/70">
        {side}
      </p>
      <p className="relative z-10 mt-4 font-display italic text-[21px] leading-snug text-olive-deep">
        {father}
      </p>
      <span className="relative z-10 block font-script text-xl leading-none text-gold my-1">
        &
      </span>
      <p className="relative z-10 font-display italic text-[21px] leading-snug text-olive-deep">
        {mother}
      </p>
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="glass-liquid-deep relative z-10 mt-5 inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 text-[11px] tracking-[0.25em] text-cream transition-transform duration-300 active:scale-95"
      >
        <Phone className="h-3 w-3" strokeWidth={1.5} />
        {phone}
      </a>
    </div>
  );
}

/* ================= CLOSING ================= */

function ClosingSection() {
  return (
    <SnapSection className="relative overflow-hidden bg-olive-deep text-cream">
      <img
        src={oliveHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_30%,transparent,oklch(0.28_0.05_120_/_0.75))]" />
      <Grain opacity={0.08} />

      <div className="relative flex flex-col items-center px-9 pb-28 pt-24 text-center">
        <FadeUp>
          <div className="glass-liquid-deep glass-rim glass-sheen rounded-full p-5">
            <Monogram className="relative z-10 h-20 w-20 text-gold" />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <span className="mt-9 block font-script text-3xl text-gold">with love</span>
        </FadeUp>
        <FadeUp delay={0.25}>
          <h2 className="mt-2 font-display italic text-5xl leading-tight">
            See you there
          </h2>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="mt-8 flex items-center gap-4 text-cream/85">
            <span className="h-px w-9 bg-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.4em]">12 · 11 · 2026</span>
            <span className="h-px w-9 bg-gold/50" />
          </div>
        </FadeUp>

        <FadeUp delay={0.45}>
          <p className="mt-4 font-display italic text-2xl text-cream/95">
            Shehan & Nadali
          </p>
        </FadeUp>

        <FadeUp delay={0.55}>
          <div className="mt-14 flex flex-col items-center gap-2">
            <Heart className="h-3 w-3 fill-gold text-gold" strokeWidth={0} />
            <p className="text-[8px] uppercase tracking-[0.4em] text-cream/45">
              Concept &amp; Designed by Kavith Ashwin
            </p>
          </div>
        </FadeUp>
      </div>
    </SnapSection>
  );
}

/* ================= SHARED ================= */

function SnapSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`snap-start w-full ${className}`}>
      {children}
    </section>
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
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}