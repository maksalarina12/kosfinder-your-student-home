import { useState } from "react";
import { Wifi, Snowflake, Bath, Shirt, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const facilities = [
  { id: "wifi", label: "WiFi Cepat", icon: Wifi },
  { id: "ac", label: "AC", icon: Snowflake },
  { id: "bath", label: "Kamar Mandi Dalam", icon: Bath },
  { id: "laundry", label: "Laundry", icon: Shirt },
];

export function FilterSidebar() {
  const [price, setPrice] = useState<number[]>([500, 1500]);
  return (
    <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-base font-bold">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            Filter
          </h3>
          <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground">
            Reset
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="mb-3 block text-sm font-semibold">Rentang Harga (per bulan)</Label>
            <Slider
              value={price}
              onValueChange={setPrice}
              min={300}
              max={3000}
              step={50}
              className="my-4"
            />
            <div className="flex justify-between text-xs font-medium text-muted-foreground">
              <span>Rp {price[0]}rb</span>
              <span>Rp {price[1]}rb</span>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <Label className="mb-3 block text-sm font-semibold">Fasilitas</Label>
            <div className="space-y-2.5">
              {facilities.map((f) => (
                <label
                  key={f.id}
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                >
                  <Checkbox id={f.id} />
                  <f.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{f.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <Label className="mb-3 block text-sm font-semibold">Status</Label>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-trust/10 p-2.5">
              <Checkbox id="verified" defaultChecked />
              <ShieldCheck className="h-4 w-4 text-trust" />
              <span className="text-sm font-semibold text-foreground">
                Terverifikasi saja
              </span>
            </label>
          </div>

          <Button className="w-full">Terapkan Filter</Button>
        </div>
      </div>
    </aside>
  );
}