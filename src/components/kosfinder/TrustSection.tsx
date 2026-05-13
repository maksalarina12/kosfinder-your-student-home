import { ShieldCheck, BadgeCheck, MessagesSquare, FileSearch } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Survei Lokasi Manual",
    desc: "Tim kami datang langsung ke setiap lokasi kos untuk verifikasi alamat & fasilitas.",
  },
  {
    icon: BadgeCheck,
    title: "Validasi Identitas Pemilik",
    desc: "Setiap pemilik wajib menyertakan KTP & dokumen kepemilikan yang kami cek satu per satu.",
  },
  {
    icon: MessagesSquare,
    title: "Review Asli Mahasiswa",
    desc: "Hanya penghuni terverifikasi yang dapat memberi rating, jadi ulasan dijamin jujur.",
  },
];

export function TrustSection() {
  return (
    <section id="verifikasi" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-trust/15 px-3 py-1 text-xs font-semibold text-trust">
            <ShieldCheck className="h-3.5 w-3.5" />
            SISTEM VERIFIKASI KOSFINDER
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Stop Penipuan Kos. <br />
            <span className="text-primary">Cari Kos dengan Tenang.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Kami tahu mahasiswa pernah jadi korban kos fiktif. Karena itu setiap listing di KosFinder melewati 3 lapis verifikasi sebelum tayang.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute -top-4 left-7 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-trust/15 text-trust">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}