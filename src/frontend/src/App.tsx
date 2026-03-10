import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Clock,
  DollarSign,
  Flame,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Quote,
  Star,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import { useEffect, useState } from "react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Tirupati+Plaza+Deepak+Hospital+Road+Gandhi+Chaman+Old+Jalna+Maharashtra+431213";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const menuItems = [
  {
    name: "Tandoori Momos",
    desc: "Smoky, charred perfection with our signature marinade",
    image: "/assets/generated/tandoori-momos.dim_600x400.jpg",
    tag: "🔥 Best Seller",
    gradient: null as string | null,
    emoji: null as string | null,
  },
  {
    name: "Schezwan Momos",
    desc: "Fiery schezwan sauce tossed with juicy momos",
    image: "/assets/generated/schezwan-momos.dim_600x400.jpg",
    tag: "🌶 Spicy",
    gradient: null as string | null,
    emoji: null as string | null,
  },
  {
    name: "Afghani Momos Roll",
    desc: "Creamy afghani sauce in a soft flatbread roll",
    image: "/assets/generated/afghani-roll.dim_600x400.jpg",
    tag: "⭐ Fan Fav",
    gradient: null as string | null,
    emoji: null as string | null,
  },
  {
    name: "Loaded Cheese Fries",
    desc: "Crispy fries smothered in melted cheese",
    image: "/assets/generated/cheese-fries.dim_600x400.jpg",
    tag: "🧀 Indulgent",
    gradient: null as string | null,
    emoji: null as string | null,
  },
  {
    name: "Cold Coffee & Mocktails",
    desc: "Refreshing drinks to cool down your spice game",
    image: "/assets/generated/cold-coffee.dim_600x400.jpg",
    tag: "❄ Chilled",
    gradient: null as string | null,
    emoji: null as string | null,
  },
  {
    name: "Paneer Momos",
    desc: "Soft, stuffed with spiced cottage cheese filling",
    image: null as string | null,
    gradient: "from-orange-900/50 via-amber-800/40 to-yellow-900/50",
    emoji: "🥟",
    tag: "🌿 Veg",
  },
  {
    name: "Honey Chilli Momos",
    desc: "Sweet, spicy, sticky — utterly irresistible",
    image: null as string | null,
    gradient: "from-red-900/50 via-orange-800/40 to-amber-900/50",
    emoji: "🍯",
    tag: "✨ New",
  },
  {
    name: "Pizza Roll",
    desc: "Indian-Chinese fusion in every bite",
    image: null as string | null,
    gradient: "from-rose-900/50 via-red-800/40 to-orange-900/50",
    emoji: "🍕",
    tag: "🔀 Fusion",
  },
];

const features = [
  {
    icon: Leaf,
    title: "Fresh Every Day",
    desc: "All ingredients sourced and prepared fresh daily",
    color: "text-green-400",
  },
  {
    icon: Flame,
    title: "Bold Flavors",
    desc: "Authentic recipes with a modern twist",
    color: "text-flame",
  },
  {
    icon: DollarSign,
    title: "Pocket Friendly",
    desc: "Great taste that won't break the bank",
    color: "text-amber",
  },
  {
    icon: Users,
    title: "Cozy Vibe",
    desc: "Perfect spot to hang out with friends and family",
    color: "text-blue-400",
  },
];

const reviews = [
  {
    text: "Best momos in Jalna! The tandoori ones are absolutely divine. I visit every week.",
    name: "Rahul S.",
    role: "Student",
    rating: 5,
    initials: "RS",
  },
  {
    text: "The Afghani Roll is a must-try. Super affordable and delicious.",
    name: "Priya M.",
    role: "Food Lover",
    rating: 5,
    initials: "PM",
  },
  {
    text: "Great ambiance, quick service, and amazing food. Perfect hangout spot!",
    name: "Vikram T.",
    role: "Regular Customer",
    rating: 5,
    initials: "VT",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* ── NAVBAR ──────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/generated/logo-transparent.dim_300x100.png"
              alt="Momo Ghar And Wrap"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className="text-sm font-heading font-semibold text-muted-foreground hover:text-flame transition-colors duration-200 tracking-wide uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:+918208118143"
            data-ocid="nav.call.primary_button"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-flame text-primary-foreground font-heading font-bold text-sm hover:bg-flame-dark transition-all duration-200 shadow-flame"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-ocid="nav.mobile.toggle"
            className="md:hidden p-2 rounded-md text-foreground hover:text-flame transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-card/95 backdrop-blur-md border-b border-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                    className="text-base font-heading font-semibold text-foreground hover:text-flame py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+918208118143"
                  data-ocid="nav.mobile.call.primary_button"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-flame text-primary-foreground font-heading font-bold mt-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.32 0.12 45 / 0.5), transparent 70%), linear-gradient(to bottom, oklch(0.10 0.01 30), oklch(0.12 0.005 20) 60%, oklch(0.10 0.01 30))",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle 600px at 20% 80%, oklch(0.60 0.18 40 / 0.08), transparent), radial-gradient(circle 400px at 80% 20%, oklch(0.72 0.16 60 / 0.07), transparent)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Badge className="mb-6 px-4 py-1.5 text-sm font-heading font-semibold bg-flame/20 text-amber border-flame/40 border">
              🥟 Old Jalna's Street Food Gem
            </Badge>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-foreground">Mumbai's Best</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.68 0.19 45), oklch(0.80 0.18 60), oklch(0.68 0.19 45))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Momos Are Now
              </span>
              <br />
              <span className="text-foreground">in Jalna!</span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl font-semibold text-amber mb-4">
              Authentic flavors. Bold spices. Unbeatable taste.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              From tandoori to schezwan, experience momos like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918208118143"
                data-ocid="hero.call.primary_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-flame text-primary-foreground font-heading font-bold text-lg hover:bg-flame-dark transition-all duration-200 shadow-flame hover:shadow-flame-lg hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call to Order
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.directions.secondary_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-flame text-flame font-heading font-bold text-lg hover:bg-flame/10 transition-all duration-200 hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.20 0.04 40 / 0.25), transparent)",
          }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-sm font-heading font-bold text-flame uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
                Crafted with
                <span className="text-flame"> Passion</span>,
                <br />
                Served with Love
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Born from a love of authentic street food, Momo Ghar And Wrap
                brings you the finest momos and wraps crafted with fresh
                ingredients and bold spices. Whether you're craving the smoky
                char of tandoori or the fiery kick of schezwan, we've got
                something for every palate.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4 font-semibold text-foreground/80">
                Come hungry, leave happy.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { num: "4.5★", label: "Google Rating" },
                { num: "8+", label: "Menu Items" },
                { num: "Daily", label: "Fresh Prep" },
                { num: "10am", label: "Opens Early" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-dark-card rounded-2xl p-6 border border-border hover:border-flame/50 transition-colors duration-300 text-center"
                >
                  <div className="font-display text-3xl font-black text-flame mb-1">
                    {stat.num}
                  </div>
                  <div className="text-sm font-heading text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────────────────── */}
      <section id="menu" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block text-sm font-heading font-bold text-flame uppercase tracking-widest mb-4">
                What We Serve
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
                Our Popular <span className="text-flame">Dishes</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={fadeUp}
                  data-ocid={`menu.item.${i + 1}`}
                  className="group relative rounded-2xl overflow-hidden border border-border hover:border-flame/60 transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{ background: "oklch(0.16 0.005 30)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                      >
                        <span className="text-6xl filter drop-shadow-lg">
                          {item.emoji}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-xs font-heading font-bold text-flame px-2 py-1 rounded-full border border-flame/30">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-heading font-bold text-foreground text-base mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block text-sm font-heading font-bold text-flame uppercase tracking-widest mb-4">
                Why Us?
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
                Why Choose <span className="text-flame">Us</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp}
                  data-ocid={`features.item.${i + 1}`}
                  className="gradient-dark-card rounded-2xl p-8 border border-border hover:border-flame/50 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 ${feat.color}`}
                    style={{ background: "oklch(0.20 0.01 30)" }}
                  >
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────── */}
      <section id="reviews" className="py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block text-sm font-heading font-bold text-flame uppercase tracking-widest mb-4">
                Testimonials
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground mb-4">
                What Our Customers <span className="text-flame">Say</span>
              </h2>
              <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 mt-4">
                <div className="flex gap-0.5">
                  {STAR_KEYS.map((k, i) => (
                    <Star
                      key={k}
                      className={`w-5 h-5 ${
                        i < 4
                          ? "fill-amber-400 text-amber-400"
                          : "fill-amber-400/50 text-amber-400/50"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-display font-black text-xl text-foreground">
                  4.5
                </span>
                <span className="text-muted-foreground text-sm font-heading">
                  /5 · 7 reviews
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {reviews.map((review, i) => (
                <motion.div
                  key={review.name}
                  variants={fadeUp}
                  data-ocid={`reviews.item.${i + 1}`}
                  className="gradient-dark-card rounded-2xl p-8 border border-border hover:border-flame/40 transition-all duration-300"
                >
                  <Quote className="w-8 h-8 text-flame/50 mb-4" />
                  <p className="text-foreground/90 text-base leading-relaxed mb-6 font-body">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-flame flex items-center justify-center text-primary-foreground font-heading font-black text-sm shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground text-sm">
                        {review.name}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {review.role}
                      </div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {STAR_KEYS.slice(0, review.rating).map((k) => (
                        <Star
                          key={k}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ──────────────────────────────────── */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block text-sm font-heading font-bold text-flame uppercase tracking-widest mb-4">
                Find Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
                Location &amp; <span className="text-flame">Contact</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Contact info */}
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="gradient-dark-card rounded-2xl p-8 border border-border space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-flame/15 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-flame" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground mb-1">
                        Address
                      </div>
                      <div className="text-muted-foreground text-sm leading-relaxed">
                        Tirupati Plaza, Deepak Hospital Road,
                        <br />
                        Gandhi Chaman, Old Jalna,
                        <br />
                        Maharashtra 431213
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-flame/15 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-flame" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground mb-1">
                        Phone
                      </div>
                      <a
                        href="tel:+918208118143"
                        data-ocid="contact.call.button"
                        className="text-flame font-heading font-semibold hover:text-amber transition-colors"
                      >
                        +91 82081 18143
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-flame/15 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-flame" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground mb-1">
                        Hours
                      </div>
                      <div className="text-muted-foreground text-sm">
                        11:00 AM – 9:00 PM
                      </div>
                      <div className="text-muted-foreground text-xs mt-0.5">
                        Open daily
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.directions.button"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl border-2 border-flame text-flame font-heading font-bold hover:bg-flame/10 transition-all duration-200"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions on Google Maps
                </a>
              </motion.div>

              {/* Map */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl overflow-hidden border border-border shadow-lg h-80 md:h-full min-h-72"
                data-ocid="contact.map_marker"
              >
                <iframe
                  title="Momo Ghar And Wrap Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.123!2d75.884!3d19.834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda6f1234567890%3A0xabcdef1234567890!2sTirupati%20Plaza%2C%20Deepak%20Hospital%20Road%2C%20Gandhi%20Chaman%2C%20Old%20Jalna%2C%20Maharashtra%20431213!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "288px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.06 40), oklch(0.18 0.05 35), oklch(0.20 0.07 50))",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, oklch(0.68 0.19 45 / 0.08), transparent)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <span className="text-4xl mb-4 block">🥟</span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-foreground mb-4">
                Ready to Taste the
                <span className="text-flame"> Difference?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Visit us today or call ahead for your order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918208118143"
                  data-ocid="cta.call.primary_button"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-flame text-primary-foreground font-heading font-black text-lg hover:bg-flame-dark transition-all duration-200 shadow-flame hover:shadow-flame-lg hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="cta.directions.secondary_button"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 border-flame text-flame font-heading font-black text-lg hover:bg-flame/10 transition-all duration-200 hover:scale-105"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <img
                src="/assets/generated/logo-transparent.dim_300x100.png"
                alt="Momo Ghar And Wrap"
                className="h-10 w-auto object-contain mb-3"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Authentic street food momos &amp; wraps in the heart of Old
                Jalna.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                  <span>
                    Tirupati Plaza, Deepak Hospital Road, Gandhi Chaman, Old
                    Jalna, MH 431213
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 text-flame shrink-0" />
                  <a
                    href="tel:+918208118143"
                    className="hover:text-flame transition-colors"
                  >
                    +91 82081 18143
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-flame shrink-0" />
                  <span>11:00 AM – 9:00 PM, Daily</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-flame transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Momo Ghar And Wrap. All rights
              reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame hover:text-amber transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
