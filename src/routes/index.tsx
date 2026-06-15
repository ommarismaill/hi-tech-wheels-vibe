import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-shop.jpg";
import tiresImg from "@/assets/tires.jpg";
import diagnosticImg from "@/assets/diagnostic.jpg";
import oilImg from "@/assets/oil-change.jpg";
import muralImg from "@/assets/mural.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hi-Tech Auto & Tire Center | Honest Mechanics in Moorpark, CA" },
      { name: "description", content: "Moorpark's most trusted auto repair shop. Smog checks, tires, alignments, brakes, and full service. Fair pricing, fast turnaround, 4.7★ from 145+ reviews." },
      { property: "og:title", content: "Hi-Tech Auto & Tire Center — Moorpark, CA" },
      { property: "og:description", content: "Honest mechanics. Fair prices. Fastest smog in town. Call (805) 529-8800." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { num: "01", title: "Smog Check", desc: "Fastest and cheapest in town. In and out, certified, done right.", img: diagnosticImg },
  { num: "02", title: "Tires & Alignment", desc: "Top brands, precision alignment, balanced for the long haul.", img: tiresImg },
  { num: "03", title: "Oil & Maintenance", desc: "Full synthetic, conventional, filters, fluids — keep it running.", img: oilImg },
  { num: "04", title: "Brakes & Suspension", desc: "Pads, rotors, shocks, struts. Stop short and ride smooth.", img: diagnosticImg },
  { num: "05", title: "Engine Diagnostics", desc: "Check engine light on? We pull the codes and explain in plain English.", img: diagnosticImg },
  { num: "06", title: "AC & Heating", desc: "Recharge, repair, replace. Cold air through every California summer.", img: oilImg },
];

const REVIEWS = [
  { name: "Jennifer C.", body: "Hands down the best, most efficient, and honest mechanics you could ever ask for. Do not take your car to the dealership — High Tech has saved me SO much money.", tag: "honest mechanics" },
  { name: "Kaleb Garcia", body: "I've had several vehicle repairs done at this location. Always friendly, professional, fast and fair with pricing. They gave me options every time.", tag: "fair pricing" },
  { name: "Josh Sarfaty", body: "If the huge mural of Kobe and Jordan doesn't attract you to this shop, the professionalism, expertise and quality will.", tag: "the mural" },
  { name: "Ashley Mulhorn", body: "We had our truck towed in on a Friday afternoon. Hi-Tech diagnosed it and had a new starter in by noon Saturday. Super fast and reasonable pricing.", tag: "fast turnaround" },
  { name: "Elisa Stylist", body: "So professional, honest and reliable. The owner is patient and actually listens. Pricing is competitive and they give you options. A+.", tag: "owner cares" },
  { name: "Mahmoud Majdoub", body: "Hi-Tech Auto and Tire Center is consistently fantastic! I always get great service here, and they are incredibly reliable.", tag: "consistent" },
];

const MARQUEE = ["SMOG CHECK", "OIL CHANGE", "TIRES", "ALIGNMENT", "BRAKES", "DIAGNOSTICS", "AC REPAIR", "BATTERIES", "SUSPENSION", "TUNE-UPS"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <MuralStrip />
      <Reviews />
      <Booking />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center bg-primary font-display text-xl text-primary-foreground">HT</span>
          <span className="font-display text-xl tracking-wider">HI-TECH AUTO</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider md:flex">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#book" className="hover:text-primary transition-colors">Book</a>
        </nav>
        <a href="tel:+18055298800" className="bg-primary px-4 py-2 font-display text-base tracking-wider text-primary-foreground transition-transform hover:scale-105">
          (805) 529-8800
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      <img src={heroImg} alt="Hi-Tech Auto repair shop" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 grain-bg" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6">
        <div className="mb-6 flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-accent">
          <span className="h-px w-12 bg-accent" />
          Moorpark, California · Est. Trust
        </div>
        <h1 className="font-display text-6xl leading-[0.85] tracking-tight sm:text-8xl md:text-[10rem] lg:text-[12rem]">
          HONEST <br />
          <span className="text-stroke">MECHANICS.</span> <br />
          <span className="text-primary">FAIR PRICES.</span>
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-end">
          <p className="max-w-xl text-lg text-muted-foreground">
            Family-run auto repair and tire center serving Moorpark for over a decade. Smog checks, tires, brakes, diagnostics — done right the first time, at a price you'll actually feel good about.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <a href="#book" className="bg-primary px-8 py-4 font-display text-xl tracking-wider text-primary-foreground transition-transform hover:scale-105">
              Book a Service →
            </a>
            <a href="tel:+18055298800" className="border border-bone px-8 py-4 font-display text-xl tracking-wider text-bone transition-colors hover:bg-bone hover:text-background">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="border-y border-border bg-primary py-4 overflow-hidden">
      <div className="flex ticker whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {MARQUEE.map((w) => (
              <span key={w} className="mx-8 font-display text-3xl tracking-wider text-primary-foreground">
                {w} <span className="ml-16 text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { k: "4.7★", v: "Google Rating" },
    { k: "145+", v: "5-Star Reviews" },
    { k: "10+", v: "Years Serving Moorpark" },
    { k: "100%", v: "Honest Quotes" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <div key={s.v} className="p-8 text-center md:p-12">
            <div className="font-display text-5xl text-primary md:text-7xl">{s.k}</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">/ What We Do</div>
            <h2 className="font-display text-6xl leading-none md:text-8xl">
              Full service.<br />
              <span className="text-stroke">Zero BS.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From smog checks to engine rebuilds — one shop, every job, done by mechanics who explain what they're doing and why.
          </p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.num} className="group relative overflow-hidden bg-card p-8 transition-colors hover:bg-secondary">
              <div className="mb-6 flex items-start justify-between">
                <span className="font-mono text-sm text-primary">{s.num}</span>
                <span className="font-display text-2xl opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </div>
              <h3 className="font-display text-4xl tracking-wide">{s.title}</h3>
              <p className="mt-4 text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MuralStrip() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-border">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[400px]">
          <img src={muralImg} alt="The famous Kobe and Jordan mural at Hi-Tech Auto" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-card p-8 md:p-16">
          <div className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">/ The Shop</div>
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            Yes, the mural is real.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            You can't miss us. The Kobe & Jordan mural on the side of the building is half the reason people stop in. The other half? We do honest work, charge fair prices, and treat your car like it's our own.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We're a small family-owned shop in Moorpark. No corporate upsells. No mystery fees. Just diagnosis, options, and a handshake.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Address</div>
              <div className="mt-2 font-display text-xl">13806 Princeton Ave<br />Moorpark, CA 93021</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
              <div className="mt-2 font-display text-xl">Mon–Fri · 8a–6p<br />Sat by appt.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">/ Word On The Street</div>
            <h2 className="font-display text-6xl leading-none md:text-8xl">
              145 reviews.<br />
              <span className="text-primary">4.7 stars.</span>
            </h2>
          </div>
          <a href="https://www.google.com/search?q=hi-tech+auto+moorpark" target="_blank" rel="noopener noreferrer" className="text-sm font-mono uppercase tracking-widest text-accent hover:underline">
            Read all on Google →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col justify-between border border-border bg-card p-8 transition-colors hover:border-primary">
              <div>
                <div className="mb-4 flex text-accent">{"★★★★★"}</div>
                <blockquote className="text-lg leading-relaxed">"{r.body}"</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-display text-xl tracking-wider">{r.name}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">#{r.tag.replace(/\s/g, "")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="book" className="relative overflow-hidden border-y border-border bg-card py-24 md:py-32">
      <div className="absolute inset-0 grain-bg" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">/ Get In Touch</div>
        <h2 className="font-display text-6xl leading-none md:text-8xl">
          Drop the keys.<br />
          <span className="text-stroke">We'll handle it.</span>
        </h2>

        <form
          className="mt-12 grid gap-6 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const params = new URLSearchParams();
            params.set("subject", `Service request — ${fd.get("service") || "General"}`);
            params.set("body", `Name: ${fd.get("name")}\nPhone: ${fd.get("phone")}\nVehicle: ${fd.get("vehicle")}\nService: ${fd.get("service")}\nNotes: ${fd.get("notes")}`);
            window.location.href = `mailto:hitechautomp@gmail.com?${params.toString()}`;
          }}
        >
          <Field name="name" label="Your name" />
          <Field name="phone" label="Phone" type="tel" />
          <Field name="vehicle" label="Year / Make / Model" />
          <Field name="service" label="Service needed" />
          <div className="md:col-span-2">
            <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">Notes</label>
            <textarea name="notes" rows={4} className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-primary" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Prefer to talk? Call <a href="tel:+18055298800" className="text-bone underline">(805) 529-8800</a></p>
            <button type="submit" className="bg-primary px-10 py-4 font-display text-xl tracking-wider text-primary-foreground transition-transform hover:scale-105">
              Request Appointment →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} required className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-primary" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-4xl tracking-wider">HI-TECH AUTO<br /><span className="text-primary">& TIRE CENTER</span></div>
            <p className="mt-4 max-w-md text-muted-foreground">Honest, family-run auto repair in Moorpark, California. The shop with the mural.</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Visit</div>
            <p className="mt-3">13806 Princeton Ave<br />Moorpark, CA 93021</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
            <p className="mt-3">
              <a href="tel:+18055298800" className="block hover:text-primary">(805) 529-8800</a>
              <a href="https://hitechautomp.com" className="block hover:text-primary">hitechautomp.com</a>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Hi-Tech Auto & Tire Center. All rights reserved.</span>
          <span>Moorpark · Simi Valley · Thousand Oaks · Camarillo</span>
        </div>
      </div>
    </footer>
  );
}
