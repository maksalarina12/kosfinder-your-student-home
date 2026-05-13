import { Home, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Home className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">
                Kos<span className="text-primary">Finder</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Platform kos #1 untuk mahasiswa Indonesia. Aman, transparan, terverifikasi.
            </p>
          </div>
          <FooterCol title="Untuk Mahasiswa" links={["Cari Kos", "Bandingkan Kos", "Tips Anti Penipuan", "Bantuan"]} />
          <FooterCol title="Untuk Pemilik" links={["Pasang Iklan", "Sistem Verifikasi", "Harga Listing", "Pusat Pemilik"]} />
          <FooterCol title="Perusahaan" links={["Tentang Kami", "Karir", "Kebijakan Privasi", "Syarat & Ketentuan"]} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 KosFinder. Semua hak dilindungi.</p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}