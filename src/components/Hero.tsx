"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100/35 via-white to-sky-100/35 dark:from-fuchsia-600/10 dark:via-background dark:to-sky-600/10" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[1200px] rounded-full bg-[radial-gradient(closest-side,theme(colors.fuchsia.400/15),transparent_60%)] dark:bg-[radial-gradient(closest-side,theme(colors.fuchsia.600/12),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          Privacy-preserving healthcare on Midnight Testnet
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Own your health records—share only the proof
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          HealthVault lets doctors sign records and patients control access. Data stays shielded while verifiable via zero-knowledge proofs.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <a href="#wallet">Get started</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="#contract">Deploy contract</a>
          </Button>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          {[
            { label: "Shielded", value: "+ZK" },
            { label: "On Testnet", value: "tDUST" },
            { label: "Doctor-signed", value: "EdDSA" },
            { label: "Wallet-first", value: "Lace" },
          ].map((i) => (
            <div key={i.label} className="rounded-xl border bg-card p-4">
              <div className="text-foreground font-medium">{i.label}</div>
              <div className="text-xs mt-1">{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}