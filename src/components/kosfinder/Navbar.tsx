import { Link } from "@tanstack/react-router";
import { Home, Menu, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
            <Home className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Kos<span className="text-primary">Finder</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#cari" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Cari Kos</a>
          <a href="#verifikasi" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Verifikasi</a>
          <a href="#cara-kerja" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Cara Kerja</a>
          <a href="#bantuan" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Bantuan</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">Masuk</Button>
          <Button size="sm" className="gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            Pasang Iklan Kos
          </Button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            <a href="#cari" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Cari Kos</a>
            <a href="#verifikasi" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Verifikasi</a>
            <a href="#cara-kerja" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Cara Kerja</a>
            <Button className="mt-2 w-full">Pasang Iklan Kos</Button>
          </div>
        </div>
      )}
    </header>
  );
}