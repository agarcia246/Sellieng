import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import {
  ShoppingBag,
  Shield,
  MapPin,
  BookOpen,
  Star,
  Mail,
  UserCheck,
  Search,
  Handshake,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

export function Welcome() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signupRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => {
    const ieEmailPattern = /^[a-zA-Z0-9._%+-]+@(student\.)?ie\.edu$/;
    return ieEmailPattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError(
        "Please use your IE email (e.g., name@ie.edu or name@student.ie.edu)."
      );
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate("/check-email");
    }, 1000);
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-cyan)]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-16 left-16 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left text-white">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              IE Student Marketplace
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Buy&nbsp;&amp;&nbsp;Sell Safely
              <br />
              on Campus
            </h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-lg mx-auto lg:mx-0 mb-8">
              The marketplace built exclusively for IE&nbsp;University students.
              Sell your textbooks, furniture, electronics&nbsp;— and find great
              deals from classmates you trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo(signupRef)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[var(--brand-blue)] font-semibold px-7 py-3.5 text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Get Early Access
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo(howItWorksRef)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 text-white font-medium px-7 py-3.5 text-lg hover:bg-white/10 transition-all duration-200"
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Illustration – abstract card stack */}
          <div className="flex-1 hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute top-0 left-6 w-56 h-36 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 flex items-center gap-4 px-5">
                <ShoppingBag className="w-10 h-10 text-white/90" />
                <div>
                  <div className="h-3 w-28 bg-white/40 rounded mb-2" />
                  <div className="h-2 w-20 bg-white/25 rounded" />
                </div>
              </div>
              <div className="absolute top-24 left-0 w-56 h-36 bg-white/20 backdrop-blur-md rounded-2xl border border-white/25 flex items-center gap-4 px-5">
                <BookOpen className="w-10 h-10 text-white/90" />
                <div>
                  <div className="h-3 w-24 bg-white/40 rounded mb-2" />
                  <div className="h-2 w-16 bg-white/25 rounded" />
                </div>
              </div>
              <div className="absolute top-48 left-12 w-56 h-36 bg-white/25 backdrop-blur-md rounded-2xl border border-white/30 flex items-center gap-4 px-5">
                <MapPin className="w-10 h-10 text-white/90" />
                <div>
                  <div className="h-3 w-32 bg-white/40 rounded mb-2" />
                  <div className="h-2 w-18 bg-white/25 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Features Row ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Shield className="w-8 h-8 text-[var(--brand-blue)]" />,
              title: "Verified IE Students",
              desc: "Every user signs up with their IE email, so you always know who you're dealing with.",
            },
            {
              icon: <MapPin className="w-8 h-8 text-[var(--brand-blue)]" />,
              title: "Safe Campus Pickups",
              desc: "Arrange convenient exchanges on the Madrid or Segovia campus — no shipping needed.",
            },
            {
              icon: <BookOpen className="w-8 h-8 text-[var(--brand-blue)]" />,
              title: "Great Deals on Essentials",
              desc: "Find textbooks, furniture, electronics, and more at student-friendly prices.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-start gap-3"
            >
              <div className="p-3 rounded-xl bg-blue-50">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Detailed Benefits ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {/* Benefit 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Sell What You No Longer Need
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  Offload course materials the moment you finish a class
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  List in seconds — snap a photo, set a price, done
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  Reach hundreds of classmates who need exactly what you have
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Benefit 2 – reversed */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Shop From People You Trust
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  Skip sketchy public marketplaces — trade within your community
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  Message sellers directly through the built-in chat
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  Every listing is from a verified IE student
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <Shield className="w-16 h-16 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Meet on Campus, No Hassle
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  Coordinate campus meetups between classes
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  No shipping costs, no waiting — instant exchange
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                  Available for both Madrid and Segovia campuses
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trusted by IE Students
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "María G.",
                label: "BBA '27",
                quote:
                  "I sold all my first-year textbooks in a single weekend. So much easier than posting on random Facebook groups.",
              },
              {
                name: "Alex T.",
                label: "MIM '26",
                quote:
                  "Found a barely-used monitor for half the retail price. Picked it up on campus the same day!",
              },
              {
                name: "Priya K.",
                label: "LLB '28",
                quote:
                  "I love knowing that everyone on the platform is a real IE student. It just feels safer.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.label}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section ref={howItWorksRef} className="py-20 scroll-mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-14">
            Getting started takes less than a minute. Here's everything you need
            to know.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-14">
            {[
              {
                step: 1,
                icon: (
                  <Mail className="w-7 h-7 text-[var(--brand-blue)]" />
                ),
                title: "Sign Up with Your IE Email",
                desc: "Enter your @ie.edu or @student.ie.edu address and verify via magic link — no password needed.",
              },
              {
                step: 2,
                icon: (
                  <Search className="w-7 h-7 text-[var(--brand-blue)]" />
                ),
                title: "Browse or List Items",
                desc: "Search for what you need, or create a listing with photos and a price in seconds.",
              },
              {
                step: 3,
                icon: (
                  <Handshake className="w-7 h-7 text-[var(--brand-blue)]" />
                ),
                title: "Meet on Campus & Exchange",
                desc: "Message the other student, pick a spot on campus, and complete the deal face‑to‑face.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-start gap-4"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] text-white text-sm font-bold">
                  {s.step}
                </span>
                <div className="p-2.5 rounded-xl bg-blue-50">{s.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center bg-blue-50 rounded-2xl p-6 text-sm text-gray-700 leading-relaxed">
            <Shield className="w-6 h-6 text-[var(--brand-blue)] mx-auto mb-3" />
            All accounts are verified through IE&nbsp;University email
            addresses, and all exchanges happen on campus. Your safety and trust
            are our top priorities.
          </div>
        </div>
      </section>

      {/* ── Signup / CTA ── */}
      <section
        ref={signupRef}
        className="bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-cyan)] py-20 scroll-mt-8"
      >
        <div className="max-w-md mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="flex justify-center mb-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)]">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Join SELLieNG
            </h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Sign up with your IE email to get early access.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="email"
                label="IE Email Address"
                placeholder="your.name@student.ie.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                disabled={loading}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending link…" : "Send Me a Magic Link"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
              <p className="text-sm text-gray-700">
                Only IE University emails (@ie.edu / @student.ie.edu) can join.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-base font-semibold">
                Is SELLieNG only for IE students?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. You must have an active @ie.edu or @student.ie.edu email
                address to create an account. This keeps the community small,
                trusted, and relevant to your campus life.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-base font-semibold">
                How are payments handled?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                SELLieNG connects buyers and sellers — payment is arranged
                directly between students (cash, Bizum, or any method you
                agree on). We don't process payments or charge transaction
                fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-base font-semibold">
                Is there any fee for listing items?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Nope — listing items on SELLieNG is completely free. Post as
                many listings as you like with no hidden charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-base font-semibold">
                What can I sell on the platform?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Anything that's useful to fellow students — textbooks,
                electronics, furniture, clothing, event tickets, and more. Just
                make sure your listing follows our community guidelines.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-8">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SELLieNG &middot; By IE students,
          for IE students.
        </p>
      </footer>
    </div>
  );
}
