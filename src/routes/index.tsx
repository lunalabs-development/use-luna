import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Luna } from "@/components/Luna";
import { Imagine } from "@/components/Imagine";
import { HowItWorks } from "@/components/HowItWorks";
import { Technology } from "@/components/Technology";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luna Labs — AI that understands you" },
      { name: "description", content: "Luna Labs builds Luna, an iOS AI assistant, and Imagine, a built-in image generation engine. Fast, personal, useful AI for everyday life." },
      { property: "og:title", content: "Luna Labs — AI that understands you" },
      { property: "og:description", content: "Luna helps you think, create, learn, and get things done. All from one intelligent assistant." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🫟%3C/text%3E%3C/svg%3E" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Luna />
        <Imagine />
        <HowItWorks />
        <Technology />
        <About />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
