import { Search, MapPin, Wallet, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kos.jpg";

export function Hero() {
  return (
    <section id="cari" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover"
          width={1536}
          height={1024}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-32 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-trust" />
            <span>100% Pemilik Terverifikasi · Bebas Penipuan</span>
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Temukan Kos Mahasiswa
            <span className="mt-2 block text-trust drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
              Aman, Transparan & Bebas Penipuan
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
            Marketplace kos #1 untuk mahasiswa Indonesia. Setiap listing dicek manual oleh tim kami.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/30 bg-white/95 p-3 shadow-[var(--shadow-elegant)] backdrop-blur-xl sm:mt-12">
          <div className="grid gap-2 sm:grid-cols-[1.4fr_1fr_1fr_auto]">
            <SearchField icon={MapPin} label="Lokasi" placeholder="Kota atau kampus..." />
            <SearchField icon={Wallet} label="Harga" placeholder="Rp 500rb – 1.5jt" />
            <SearchSelect icon={Users} label="Tipe" options={["Putra", "Putri", "Campur"]} />
            <Button size="lg" className="h-full min-h-12 gap-2 rounded-2xl text-base font-semibold sm:px-6">
              <Search className="h-5 w-5" />
              <span className="sm:hidden lg:inline">Cari Kos</span>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 text-center text-primary-foreground sm:gap-8">
          <Stat value="12.500+" label="Listing Aktif" />
          <Stat value="80+" label="Kota & Kampus" />
          <Stat value="4.8/5" label="Rating Mahasiswa" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs text-white/70 sm:text-sm">{label}</div>
    </div>
  );
}

function SearchField({
  icon: Icon,
  label,
  placeholder,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  placeholder: string;
}) {
  return (
    <label className="group flex cursor-text items-center gap-3 rounded-2xl px-4 py-2.5 transition-colors hover:bg-muted/60">
      <Icon className="h-5 w-5 shrink-0 text-primary" />
      <div className="flex min-w-0 flex-col text-left">
        <span className="text-xs font-semibold text-foreground">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
    </label>
  );
}

function SearchSelect({
  icon: Icon,
  label,
  options,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  options: string[];
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-2.5 transition-colors hover:bg-muted/60">
      <Icon className="h-5 w-5 shrink-0 text-primary" />
      <div className="flex min-w-0 flex-col text-left">
        <span className="text-xs font-semibold text-foreground">{label}</span>
        <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    </label>
  );
}