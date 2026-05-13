import { useState } from "react";
import { ShieldCheck, Wifi, Snowflake, Bath, Star, MapPin, LayoutGrid, Map, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import kos1 from "@/assets/kos-1.jpg";
import kos2 from "@/assets/kos-2.jpg";
import kos3 from "@/assets/kos-3.jpg";
import kos4 from "@/assets/kos-4.jpg";
import kos5 from "@/assets/kos-5.jpg";
import kos6 from "@/assets/kos-6.jpg";

type Listing = {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  type: "Putra" | "Putri" | "Campur";
  verified: boolean;
  image: string;
  amenities: ("wifi" | "ac" | "bath")[];
};

const listings: Listing[] = [
  { id: 1, name: "Kos Mawar Eksklusif", location: "Syiah Kuala, Banda Aceh", price: 850000, rating: 4.8, reviews: 124, type: "Putri", verified: true, image: kos1, amenities: ["wifi", "ac", "bath"] },
  { id: 2, name: "Wisma Cendana", location: "Darussalam, Banda Aceh", price: 650000, rating: 4.6, reviews: 89, type: "Putra", verified: true, image: kos2, amenities: ["wifi", "ac"] },
  { id: 3, name: "Kos Hijau Asri", location: "Lampineung, Banda Aceh", price: 750000, rating: 4.7, reviews: 56, type: "Campur", verified: true, image: kos3, amenities: ["wifi", "bath"] },
  { id: 4, name: "Kos Pelangi", location: "Kopelma, Banda Aceh", price: 1200000, rating: 4.9, reviews: 201, type: "Putri", verified: true, image: kos4, amenities: ["wifi", "ac", "bath"] },
  { id: 5, name: "Premium House Aceh", location: "Lamgugob, Banda Aceh", price: 1500000, rating: 5.0, reviews: 78, type: "Putra", verified: true, image: kos5, amenities: ["wifi", "ac", "bath"] },
  { id: 6, name: "Kos Kenanga Shared", location: "Rukoh, Banda Aceh", price: 550000, rating: 4.4, reviews: 42, type: "Campur", verified: false, image: kos6, amenities: ["wifi"] },
];

const formatPrice = (n: number) => `Rp ${(n / 1000).toLocaleString("id-ID")}.000`;

export function ListingGrid() {
  const [view, setView] = useState<"grid" | "map">("grid");

  return (
    <div className="flex-1">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            {listings.length} Kos di Banda Aceh
          </h2>
          <p className="text-sm text-muted-foreground">Diurutkan berdasarkan rekomendasi</p>
        </div>
        <div className="inline-flex rounded-xl border border-border bg-card p-1">
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              view === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutGrid className="h-4 w-4" /> Grid
          </button>
          <button
            onClick={() => setView("map")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              view === "map" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Map className="h-4 w-4" /> Peta
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      ) : (
        <MapPlaceholder />
      )}
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={listing.image}
          alt={listing.name}
          loading="lazy"
          width={800}
          height={640}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {listing.verified && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-trust px-2.5 py-1 text-xs font-semibold text-trust-foreground shadow-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            Data Terverifikasi
          </div>
        )}
        <button
          aria-label="Simpan"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-foreground shadow-md transition-colors hover:bg-white hover:text-destructive"
        >
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute bottom-3 right-3 rounded-md bg-foreground/85 px-2 py-1 text-xs font-medium text-background backdrop-blur">
          {listing.type}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-tight">{listing.name}</h3>
          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {listing.rating}
          </div>
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {listing.location}
        </div>
        <div className="mt-3 flex items-center gap-3 text-muted-foreground">
          {listing.amenities.includes("wifi") && <Wifi className="h-4 w-4" />}
          {listing.amenities.includes("ac") && <Snowflake className="h-4 w-4" />}
          {listing.amenities.includes("bath") && <Bath className="h-4 w-4" />}
          <span className="ml-auto text-xs">{listing.reviews} ulasan</span>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
          <div>
            <div className="text-lg font-extrabold text-primary">{formatPrice(listing.price)}</div>
            <div className="-mt-0.5 text-xs text-muted-foreground">/ bulan</div>
          </div>
          <Button size="sm">Lihat Detail</Button>
        </div>
      </div>
    </article>
  );
}

function MapPlaceholder() {
  return (
    <div className="relative flex h-[600px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary to-muted">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:32px_32px]" />
      {[
        { top: "20%", left: "30%", price: "850rb" },
        { top: "40%", left: "55%", price: "650rb" },
        { top: "60%", left: "25%", price: "750rb" },
        { top: "30%", left: "70%", price: "1.2jt" },
        { top: "70%", left: "60%", price: "1.5jt" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg ring-4 ring-primary/20"
          style={{ top: p.top, left: p.left }}
        >
          <MapPin className="h-3 w-3" />
          {p.price}
        </div>
      ))}
      <div className="relative rounded-xl bg-card/95 px-5 py-3 text-center shadow-lg backdrop-blur">
        <Map className="mx-auto h-6 w-6 text-primary" />
        <p className="mt-1 text-sm font-semibold">Tampilan Peta Interaktif</p>
        <p className="text-xs text-muted-foreground">Cari kos terdekat dari kampusmu</p>
      </div>
    </div>
  );
}