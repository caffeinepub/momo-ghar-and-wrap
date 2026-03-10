import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PHONE = "+918208118143";
const WHATSAPP_URL = "https://wa.me/918208118143";
const MAPS_URL =
  "https://maps.google.com/?q=Tirupati+Plaza+Deepak+Hospital+Road+Gandhi+Chaman+Old+Jalna+Maharashtra";

const menuItems = [
  {
    emoji: "🔥",
    name: "Tandoori Momos",
    desc: "Smoky, chargrilled momos with a fiery tandoor twist",
    tag: "Best Seller",
    img: "/assets/generated/menu-tandoori-momos.dim_400x300.jpg",
  },
  {
    emoji: "🌶️",
    name: "Schezwan Momos",
    desc: "Spicy Chinese-style momos with bold schezwan sauce",
    tag: "Spicy",
    img: "/assets/generated/menu-schezwan-momos.dim_400x300.jpg",
  },
  {
    emoji: "🧀",
    name: "Paneer Momos",
    desc: "Soft cottage cheese filled momos, mildly spiced",
    tag: "Veg",
    img: null,
  },
  {
    emoji: "🌯",
    name: "Afghani Momos Roll",
    desc: "Creamy afghani-style momos wrapped in a soft roll",
    tag: "Fan Favorite",
    img: "/assets/generated/menu-afghani-roll.dim_400x300.jpg",
  },
  {
    emoji: "🍕",
    name: "Pizza Roll",
    desc: "Italian-inspired roll with cheesy pizza flavors",
    tag: "Unique",
    img: null,
  },
  {
    emoji: "🍯",
    name: "Honey Chilli Momos",
    desc: "Sweet and spicy crispy momos glazed in honey chilli",
    tag: "Sweet & Spicy",
    img: null,
  },
  {
    emoji: "🍟",
    name: "Loaded Cheese Fries",
    desc: "Crispy fries loaded with melted cheese and toppings",
    tag: "Indulgent",
    img: "/assets/generated/menu-loaded-fries.dim_400x300.jpg",
  },
  {
    emoji: "🥤",
    name: "Cold Coffee & Mocktails",
    desc: "Refreshing beverages to pair with your meal",
    tag: "Cool",
    img: null,
  },
];

const features = [
  "Wide Variety of Momos & Wraps",
  "Freshly Prepared Fast Food",
  "Affordable Prices",
  "Cozy Cafe Ambience",
  "Perfect for Friends & Family",
  "Quick Service & Takeaway",
];

const reviews = [
  {
    name: "Rahul S.",
    rating: 5,
    text: "Delicious food and amazing taste — must try the tandoori momos! The smoky flavour is unlike anything I've had in Jalna.",
    date: "2 weeks ago",
  },
  {
    name: "Priya M.",
    rating: 5,
    text: "Great place with unique momo varieties and a nice ambience. Perfect spot to hang out with friends after college!",
    date: "1 month ago",
  },
  {
    name: "Amit K.",
    rating: 4,
    text: "Best momos in Jalna! Affordable and super tasty. The honey chilli momos are absolutely addictive. Will be back!",
    date: "3 weeks ago",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.floor(rating)
              ? "fill-accent text-accent"
              : "text-muted-foreground"
          }
          fill={i <= Math.floor(rating) ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display font-bold text-lg md:text-xl text-foreground"
          >
            <span className="text-gradient-fire">Momo Ghar</span>
            <span className="text-foreground/80"> & Wrap</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href={`tel:${PHONE}`} data-ocid="nav.call_button">
                <Phone size={14} className="mr-1.5" />
                Call Now
              </a>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-card border-b border-border px-4 pb-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="mt-3 flex items-center gap-2 text-primary font-semibold"
              >
                <Phone size={16} />
                Call Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-momos.dim_1200x600.jpg')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.19_35/0.15)_0%,transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <Badge className="mb-6 bg-primary/20 text-accent border-primary/40 font-semibold tracking-wide uppercase text-xs">
            ⭐ 4.5/5 · Old Jalna's #1 Momo Cafe
          </Badge>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight mb-4">
            <span className="text-gradient-fire">Momo Ghar</span>
            <br />
            <span className="text-foreground">&amp; Wrap</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold mb-4">
            Jalna's Favorite Spot for Delicious Momos &amp; Wraps
          </p>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the perfect blend of flavor, freshness, and street-style
            fast food at Momo Ghar and Wrap. From sizzling tandoori momos to
            mouth-watering wraps and loaded fries — every bite is crafted to
            satisfy your cravings.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-glow-sm w-full sm:w-auto"
              asChild
            >
              <a href={`tel:${PHONE}`} data-ocid="hero.call_button">
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-600/20 font-bold text-base w-full sm:w-auto"
              asChild
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp_button"
              >
                <MessageCircle size={18} className="mr-2" />
                Order on WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-bold text-base w-full sm:w-auto"
              asChild
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.directions_button"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-20 md:py-28 px-4 bg-card relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute -right-40 top-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs uppercase tracking-widest">
                Our Story
              </Badge>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Where Flavor Meets
                <span className="text-gradient-fire"> Street-Food Passion</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Located in the heart of Old Jalna, Momo Ghar And Wrap is a cozy
                fast-food cafe known for its unique momo varieties, delicious
                wraps, and flavorful snacks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mission is simple — serve freshly prepared food with
                authentic taste and great quality. Whether you're visiting with
                friends, grabbing a quick bite, or enjoying evening snacks, our
                cafe offers the perfect place to relax and enjoy amazing food.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From classic momos to creative rolls and tasty beverages, every
                dish is prepared with care and quality ingredients that you can
                taste in every bite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: "🏠",
                  label: "Cozy Ambience",
                  sub: "Perfect for hangouts",
                },
                {
                  icon: "⚡",
                  label: "Quick Service",
                  sub: "Fast & fresh every time",
                },
                { icon: "💰", label: "Affordable", sub: "Value for money" },
                { icon: "👨‍🍳", label: "Made Fresh", sub: "Prepared to order" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-background rounded-xl p-5 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {item.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-primary/20 text-accent border-primary/40 text-xs uppercase tracking-widest">
              Menu
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3">
              Customer <span className="text-gradient-fire">Favorites</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Fresh &bull; Flavorful &bull; Made to Order
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                data-ocid={`menu.item.${i + 1}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl overflow-hidden group cursor-default hover:border-primary/50 transition-colors"
              >
                {/* Image or emoji banner */}
                <div className="relative h-40 overflow-hidden bg-secondary flex items-center justify-center">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-6xl">{item.emoji}</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <Badge className="absolute top-2 right-2 bg-primary/90 text-primary-foreground border-0 text-xs">
                    {item.tag}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why"
        className="py-20 md:py-28 px-4 bg-card relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute -left-40 bottom-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs uppercase tracking-widest">
              Why Us
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
              Why Food Lovers{" "}
              <span className="text-gradient-fire">Choose Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-background border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
              >
                <CheckCircle2
                  size={22}
                  className="shrink-0 text-primary group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-foreground">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-primary/20 text-accent border-primary/40 text-xs uppercase tracking-widest">
              Reviews
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
              What Our Customers <span className="text-gradient-fire">Say</span>
            </h2>
            <div className="flex items-center gap-3 justify-center">
              <StarRating rating={4.5} size={20} />
              <span className="font-display font-bold text-2xl text-foreground">
                4.5
              </span>
              <span className="text-muted-foreground">
                / 5 &bull; Based on 7 ratings
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                data-ocid={`reviews.item.${i + 1}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors"
              >
                <StarRating rating={review.rating} />
                <p className="text-foreground/90 leading-relaxed text-sm flex-1">
                  &#8220;{review.text}&#8221;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-foreground text-sm">
                    {review.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section
        id="contact"
        className="py-20 md:py-28 px-4 bg-card relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs uppercase tracking-widest">
              Find Us
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
              Location &amp; <span className="text-gradient-fire">Contact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="bg-background border border-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground mb-1">
                    Address
                  </div>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    Tirupati Plaza, Deepak Hospital Road
                    <br />
                    Gandhi Chaman, Old Jalna
                    <br />
                    Maharashtra 431213
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-primary font-semibold hover:text-accent transition-colors"
                  >
                    +91 82081 18143
                  </a>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground mb-1">
                    Opening Hours
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Everyday:{" "}
                    <span className="text-foreground font-semibold">
                      11:00 AM – 9:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Star size={18} className="text-accent fill-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground mb-1">
                    Rating
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={4.5} size={14} />
                    <span className="text-sm text-muted-foreground">
                      4.5 / 5 · 7 reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  asChild
                >
                  <a href={`tel:${PHONE}`} data-ocid="contact.call_button">
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-border hover:bg-secondary font-bold"
                  asChild
                >
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.directions_button"
                  >
                    <MapPin size={16} className="mr-2" />
                    Directions
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Map embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-border h-[420px] relative bg-secondary"
            >
              <iframe
                title="Momo Ghar And Wrap Location"
                src="https://maps.google.com/maps?q=Old+Jalna+Maharashtra+431213&output=embed&z=15"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div
                className="absolute bottom-3 right-3"
                data-ocid="contact.map_marker"
              >
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-primary/90 transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.19_35/0.12)_0%,transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl text-foreground mb-4 leading-tight">
            Craving
            <span className="text-gradient-fire"> Delicious Momos?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
            Visit Momo Ghar And Wrap today and enjoy Jalna's most loved momos,
            wraps, and snacks. We're open every day from 11 AM to 9 PM. Come
            hungry, leave happy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-glow-md w-full sm:w-auto"
              asChild
            >
              <a href={`tel:${PHONE}`} data-ocid="cta.call_button">
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary font-bold text-base w-full sm:w-auto"
              asChild
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="cta.directions_button"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-600/20 font-bold text-base w-full sm:w-auto"
              asChild
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="cta.whatsapp_button"
              >
                <MessageCircle size={18} className="mr-2" />
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                <span className="text-gradient-fire">Momo Ghar</span> &amp; Wrap
              </h3>
              <p className="text-muted-foreground text-sm">
                Jalna's favorite spot for momos, wraps, and fast food.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Visit Us
              </h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Tirupati Plaza, Deepak Hospital Road</p>
                <p>Gandhi Chaman, Old Jalna</p>
                <p>Maharashtra 431213</p>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Contact &amp; Hours
              </h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>
                  <a
                    href={`tel:${PHONE}`}
                    className="hover:text-primary transition-colors"
                  >
                    +91 82081 18143
                  </a>
                </p>
                <p>Everyday: 11:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© {year} Momo Ghar And Wrap. All rights reserved.</p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
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
