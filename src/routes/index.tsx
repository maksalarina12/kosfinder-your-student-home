import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/kosfinder/Navbar";
import { Hero } from "@/components/kosfinder/Hero";
import { FilterSidebar } from "@/components/kosfinder/FilterSidebar";
import { ListingGrid } from "@/components/kosfinder/ListingGrid";
import { TrustSection } from "@/components/kosfinder/TrustSection";
import { Footer } from "@/components/kosfinder/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KosFinder — Cari Kos Mahasiswa Aman & Terverifikasi" },
      {
        name: "description",
        content:
          "Marketplace kos mahasiswa #1 di Indonesia. Listing terverifikasi manual, bebas penipuan, harga transparan.",
      },
      { property: "og:title", content: "KosFinder — Cari Kos Mahasiswa Aman & Terverifikasi" },
      {
        property: "og:description",
        content: "Cari kos dekat kampus dengan jaminan verifikasi 3 lapis dari KosFinder.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <FilterSidebar />
            <ListingGrid />
          </div>
        </section>
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
}
