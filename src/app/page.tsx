"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WalletManager from "@/components/WalletManager";
import ContractSection from "@/components/ContractSection";
import RecordsSection from "@/components/RecordsSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="space-y-20 pb-24">
        <Hero />

        {/* How it works */}
        <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
            <p className="text-muted-foreground mt-2">Connect your wallet, deploy or join a HealthVault contract, and submit shielded records with doctor signatures.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[{
              title: "Connect Wallet",
              desc: "Use Lace or a headless SDK wallet to manage keys and tDUST.",
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"},
            { title: "Deploy/Join", desc: "Spin up a new contract or join an existing address on Testnet.", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
            { title: "Add Record", desc: "Create a record with a doctor signature. Only proofs/commitments are public.", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" }]
              .map((c) => (
                <Card key={c.title}>
                  <CardContent className="p-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt="" className="h-40 w-full object-cover" />
                    <div className="p-5">
                      <h3 className="font-medium">{c.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        <WalletManager />
        <ContractSection />
        <RecordsSection />
        <Testimonials />
        <FAQ />

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-card p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Join our community</h3>
            <p className="text-muted-foreground mt-2">Follow development updates and help shape privacy-first healthcare.</p>
            <div className="mt-4 text-sm text-muted-foreground">Testnet only · ZK proofs via local Proof Server</div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} HealthVault</span>
          <span>Built for Midnight Testnet</span>
        </div>
      </footer>
    </div>
  );
}